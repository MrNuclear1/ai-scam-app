import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import { personas } from "./data/personas.mjs";

dotenv.config();

const app = express();

// CORS configuration for production
const corsOptions = {
	origin: process.env.NODE_ENV === 'production' 
		? [
			'https://scamproof.ca',
			'https://www.scamproof.ca'
		]
		: ['http://localhost:3000', 'http://127.0.0.1:3000'],
	credentials: true,
	optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

const PORT = process.env.PORT || 3001;
const SCAM_MODEL = process.env.SCAM_MODEL || "gpt-4o-mini";

// Enhanced OpenAI client with better error handling
let openaiClient = null;
let openaiConnectionStatus = 'disconnected';
let openaiLastError = null;

async function initializeOpenAI() {
	try {
		// Enhanced logging for Railway deployment debugging
		console.log("🔧 Initializing OpenAI client...");
		console.log("📋 Environment variables check:");
		console.log(`   NODE_ENV: ${process.env.NODE_ENV || 'not set'}`);
		console.log(`   SCAM_MODEL: ${process.env.SCAM_MODEL || 'not set'}`);
		console.log(`   PORT: ${process.env.PORT || 'not set'}`);
		
		const apiKey = process.env.OPENAI_API_KEY;
		if (!apiKey) {
			console.warn("⚠️  OPENAI_API_KEY not found - chat functionality will be disabled");
			console.warn("🔍 Railway Debug: Verify OPENAI_API_KEY is set in Railway environment variables");
			openaiConnectionStatus = 'no-api-key';
			return null;
		}
		
		console.log(`   OPENAI_API_KEY: ${apiKey ? `present (${apiKey.length} chars, starts with '${apiKey.substring(0, 8)}...')` : 'not set'}`);
		
		// Check for placeholder API key
		if (apiKey === 'your_openai_api_key_here' || apiKey.startsWith('sk-your-') || apiKey === 'sk-your-openai-api-key-here') {
			console.warn("⚠️  OPENAI_API_KEY appears to be a placeholder - chat functionality will be disabled");
			console.warn("🔍 Railway Debug: Replace placeholder API key with real OpenAI API key");
			openaiConnectionStatus = 'placeholder-key';
			openaiLastError = 'API key is a placeholder value';
			return null;
		}
		
		openaiClient = new OpenAI({ 
			apiKey,
			timeout: 30000, // 30 second timeout
			maxRetries: 3
		});
		
		// Test the API key with a minimal request
		console.log("🔍 Testing OpenAI API connection...");
		try {
			await openaiClient.chat.completions.create({
				model: "gpt-3.5-turbo",
				messages: [{ role: "user", content: "test" }],
				max_tokens: 1,
				timeout: 10000
			});
			
			console.log("✅ OpenAI client initialized and API key validated successfully");
			openaiConnectionStatus = 'connected';
			openaiLastError = null;
			return openaiClient;
		} catch (testError) {
			console.error("❌ OpenAI API key validation failed:", testError.message);
			openaiConnectionStatus = 'api-error';
			openaiLastError = testError.message;
			
			// Check for specific error types
			if (testError.message?.includes('ENOTFOUND') || testError.message?.includes('getaddrinfo')) {
				openaiConnectionStatus = 'network-error';
				openaiLastError = 'Network connectivity issue - cannot reach api.openai.com';
			} else if (testError.status === 401) {
				openaiConnectionStatus = 'invalid-key';
				openaiLastError = 'Invalid API key';
			} else if (testError.status === 429) {
				openaiConnectionStatus = 'rate-limited';
				openaiLastError = 'API rate limit exceeded';
			}
			
			// Set client to null if validation fails
			openaiClient = null;
			return null;
		}
		
	} catch (error) {
		console.error("❌ Failed to initialize OpenAI client:", error.message);
		console.error("🔍 Railway Debug: OpenAI client initialization failed");
		console.error("🔍 Environment check:");
		console.error(`   Working directory: ${process.cwd()}`);
		console.error(`   Node.js version: ${process.version}`);
		console.error(`   Platform: ${process.platform}`);
		openaiConnectionStatus = 'initialization-error';
		openaiLastError = error.message;
		return null;
	}
}

// Initialize OpenAI on startup
(async () => {
	await initializeOpenAI();
})();

function getOpenAI() {
	if (!openaiClient) {
		const errorMessage = openaiLastError 
			? `OpenAI client not available: ${openaiLastError}`
			: "OpenAI client not initialized - check OPENAI_API_KEY";
		throw new Error(errorMessage);
	}
	return openaiClient;
}

// Health check endpoint with detailed status
app.get("/", (req, res) => {
	res.json({ 
		status: "🚀 AI Scam Backend is running", 
		timestamp: new Date().toISOString(),
		version: "2.0.0",
		personas: Object.keys(personas).length
	});
});

app.get("/api/health", (_req, res) => {
	const hasOpenAI = !!process.env.OPENAI_API_KEY;
	const isPlaceholderKey = process.env.OPENAI_API_KEY === 'your_openai_api_key_here' || 
		process.env.OPENAI_API_KEY?.startsWith('sk-your-') || 
		process.env.OPENAI_API_KEY === 'sk-your-openai-api-key-here';
	
	res.json({ 
		status: "ok", 
		timestamp: new Date().toISOString(),
		uptime: process.uptime(),
		memory: process.memoryUsage(),
		environment: {
			nodeEnv: process.env.NODE_ENV || "development",
			port: PORT,
			model: SCAM_MODEL,
			openaiConfigured: hasOpenAI && !isPlaceholderKey,
			openaiStatus: openaiConnectionStatus,
			openaiError: openaiLastError,
			personas: Object.keys(personas).length,
			availablePersonas: Object.keys(personas)
		}
	});
});

// Get all personas endpoint
app.get("/api/personas", (_req, res) => {
	try {
		const personaList = Object.entries(personas).map(([id, persona]) => ({
			id,
			title: persona.title,
			description: persona.description || "Scammer training simulation"
		}));
		
		res.json({ 
			personas: personaList,
			count: personaList.length 
		});
	} catch (error) {
		console.error("/api/personas error:", error);
		res.status(500).json({ error: "Failed to fetch personas" });
	}
});

// Enhanced scam chat endpoint with better error handling
app.post("/api/scam-chat", async (req, res) => {
	try {
		// Validate request payload
		const { personaId, messages } = req.body || {};
		
		if (!personaId) {
			return res.status(400).json({ 
				error: "Missing personaId",
				availablePersonas: Object.keys(personas)
			});
		}
		
		if (!Array.isArray(messages) || messages.length === 0) {
			return res.status(400).json({ 
				error: "Invalid messages array - must be non-empty array" 
			});
		}
		
		// Validate persona exists
		const persona = personas[personaId];
		if (!persona) {
			return res.status(400).json({ 
				error: `Invalid persona ID: ${personaId}`,
				availablePersonas: Object.keys(personas)
			});
		}
		
		// Validate messages format
		for (let i = 0; i < messages.length; i++) {
			const msg = messages[i];
			if (!msg.role || !msg.content) {
				return res.status(400).json({ 
					error: `Invalid message format at index ${i} - must have 'role' and 'content'` 
				});
			}
			if (!['user', 'assistant', 'system'].includes(msg.role)) {
				return res.status(400).json({ 
					error: `Invalid role '${msg.role}' at index ${i} - must be 'user', 'assistant', or 'system'` 
				});
			}
		}

		// Get OpenAI client
		const openai = getOpenAI();
		
		// Prepare messages for OpenAI
		const chatMessages = [
			{ role: "system", content: persona.system },
			...messages.map(m => ({ 
				role: m.role, 
				content: String(m.content).trim() 
			}))
		];
		
		console.log(`🤖 Processing chat for persona: ${personaId} (${messages.length} messages)`);
		
		// Call OpenAI API with enhanced configuration
		const completion = await openai.chat.completions.create({
			model: SCAM_MODEL,
			messages: chatMessages,
			temperature: 0.8,
			max_tokens: 100,
			presence_penalty: 0.1,
			frequency_penalty: 0.1,
			timeout: 25000 // 25 second timeout
		});
		
		const content = completion.choices?.[0]?.message?.content?.trim() || "";
		
		if (!content) {
			console.warn("⚠️  OpenAI returned empty response");
			return res.status(500).json({ 
				error: "No response generated by AI model" 
			});
		}
		
		console.log(`✅ Generated response for ${personaId}: ${content.substring(0, 50)}...`);
		
		res.json({ 
			content,
			personaId,
			model: SCAM_MODEL,
			timestamp: new Date().toISOString()
		});
		
	} catch (error) {
		console.error(`❌ /api/scam-chat error:`, error);
		
		// Enhanced error handling with user-friendly messages
		if (error.message?.includes('OpenAI client not available')) {
			return res.status(503).json({ 
				error: "Sorry, I'm having trouble connecting right now. Please try again later.",
				details: "AI service is currently unavailable",
				adminDetails: error.message
			});
		}
		
		if (error.message?.includes('API key') || error.status === 401) {
			return res.status(503).json({ 
				error: "Sorry, I'm having trouble connecting right now. Please try again later.",
				details: "Authentication error with AI service",
				adminDetails: "OpenAI API key invalid or missing"
			});
		}
		
		if (error.message?.includes('ENOTFOUND') || error.message?.includes('getaddrinfo')) {
			return res.status(503).json({ 
				error: "Sorry, I'm having trouble connecting right now. Please try again later.",
				details: "Network connectivity issue",
				adminDetails: "Cannot reach OpenAI API servers"
			});
		}
		
		if (error.message?.includes('timeout')) {
			return res.status(504).json({ 
				error: "The AI is taking too long to respond. Please try again.",
				details: "Request timeout"
			});
		}
		
		if (error.message?.includes('rate limit') || error.status === 429) {
			return res.status(429).json({ 
				error: "Too many requests right now. Please wait a moment and try again.",
				details: "Rate limit exceeded"
			});
		}
		
		if (error.status) {
			return res.status(error.status).json({ 
				error: "Sorry, I'm having trouble connecting right now. Please try again later.",
				details: `AI service error (${error.status})`,
				adminDetails: error.message
			});
		}
		
		res.status(500).json({ 
			error: "Sorry, I'm having trouble connecting right now. Please try again later.",
			details: "Internal server error",
			adminDetails: error.message || "Unknown error occurred"
		});
	}
});

// Enhanced scam evaluation endpoint
app.post("/api/scam-eval", async (req, res) => {
	try {
		const { personaId, transcript } = req.body || {};
		
		if (!Array.isArray(transcript) || transcript.length === 0) {
			return res.status(400).json({ 
				error: "Transcript is required and must be non-empty array" 
			});
		}
		
		const schema = {
			name: "ScamEval",
			schema: {
				type: "object",
				properties: {
					outcome: { 
						type: "string", 
						enum: ["safe", "risky", "compromised"],
						description: "Overall safety assessment" 
					},
					score: { 
						type: "integer", 
						minimum: 0, 
						maximum: 100,
						description: "Performance score out of 100" 
					},
					badge: { 
						type: "string",
						description: "Achievement badge name"
					},
					feedback: { 
						type: "string",
						description: "Detailed feedback on performance"
					},
					redFlags: {
						type: "array",
						items: { type: "string" },
						description: "List of red flags user should have noticed"
					}
				},
				additionalProperties: false,
				required: ["outcome", "score", "badge", "feedback", "redFlags"]
			},
			strict: true
		};

		const system = `You are an expert cybersecurity evaluator for scam awareness training. Analyze the user's performance in a chat with a scammer persona and provide detailed assessment.

SCORING GUIDELINES:
- 90-100: Excellent - Immediately identified as scam, no sensitive info shared, asked good questions
- 70-89: Good - Identified as scam with some hesitation, minimal engagement
- 50-69: Risky - Showed some suspicious behavior but didn't completely fall for it
- 30-49: Poor - Engaged significantly with scammer, shared some information
- 0-29: Compromised - Fell for the scam completely, shared sensitive information

BADGE GUIDELINES:
- 90-100: "Scam Detector", "Cyber Guardian", "Digital Sleuth", "Fraud Fighter"
- 70-89: "Cautious User", "Alert Citizen", "Scam Aware", "Safety First"
- 50-69: "Needs Practice", "Learning Mode", "Getting Better", "Almost There"
- 30-49: "High Risk", "Vulnerable User", "Needs Training", "Danger Zone"
- 0-29: "Scam Victim", "Extremely Vulnerable", "Urgent Training Needed"

Focus on identifying red flags the user should have noticed and provide constructive feedback.`;

		const openai = getOpenAI();
		
		const completion = await openai.chat.completions.create({
			model: SCAM_MODEL,
			temperature: 0.2, // Lower temperature for more consistent evaluation
			response_format: { type: "json_schema", json_schema: schema },
			max_tokens: 300,
			messages: [
				{ role: "system", content: system },
				{ 
					role: "user", 
					content: `Evaluate this scam awareness training session:

Persona: ${personaId || 'unknown'}
Total Messages: ${transcript.length}

Conversation Transcript:
${transcript.map((m, i) => `${i + 1}. ${m.role}: ${m.content}`).join('\n')}

Provide detailed evaluation with scoring, badge, feedback, and identified red flags.`
				}
			],
			timeout: 30000
		});
		
		const jsonContent = completion.choices?.[0]?.message?.content || "{}";
		
		try {
			const evaluation = JSON.parse(jsonContent);
			
			// Validate required fields
			if (!evaluation.outcome || 
				evaluation.score === undefined || 
				!evaluation.badge || 
				!evaluation.feedback) {
				throw new Error("Incomplete evaluation result from AI");
			}
			
			// Add metadata
			evaluation.personaId = personaId;
			evaluation.timestamp = new Date().toISOString();
			evaluation.messagesAnalyzed = transcript.length;
			
			console.log(`✅ Generated evaluation for ${personaId}: ${evaluation.score}/100 (${evaluation.outcome})`);
			
			res.json(evaluation);
			
		} catch (parseError) {
			console.error("❌ Failed to parse evaluation JSON:", parseError, "Raw content:", jsonContent);
			
			// Fallback evaluation
			res.json({ 
				outcome: "error", 
				score: 0, 
				badge: "Evaluation Error", 
				feedback: "Unable to evaluate this session. Please try again with a longer conversation.",
				redFlags: ["Evaluation system temporarily unavailable"],
				personaId,
				timestamp: new Date().toISOString(),
				error: true
			});
		}
		
	} catch (error) {
		console.error("❌ /api/scam-eval error:", error);
		
		res.status(500).json({ 
			outcome: "error", 
			score: 0, 
			badge: "System Error", 
			feedback: "Evaluation service temporarily unavailable. Please try again later.",
			redFlags: ["System evaluation error"],
			error: error.message || "Unknown error occurred",
			timestamp: new Date().toISOString()
		});
	}
});

// Environment variable debugging endpoint for Railway deployment
app.get("/api/debug-env", (_req, res) => {
	res.json({
		status: "debug-info",
		timestamp: new Date().toISOString(),
		environment: {
			NODE_ENV: process.env.NODE_ENV || "not-set",
			OPENAI_API_KEY: process.env.OPENAI_API_KEY ? {
				present: true,
				length: process.env.OPENAI_API_KEY.length,
				prefix: process.env.OPENAI_API_KEY.substring(0, 8) + "...",
				isPlaceholder: process.env.OPENAI_API_KEY === 'your_openai_api_key_here' || 
					process.env.OPENAI_API_KEY?.startsWith('sk-your-') || 
					process.env.OPENAI_API_KEY === 'sk-your-openai-api-key-here'
			} : {
				present: false,
				error: "OPENAI_API_KEY environment variable not found"
			},
			SCAM_MODEL: process.env.SCAM_MODEL || "not-set",
			PORT: process.env.PORT || "not-set"
		},
		runtime: {
			nodeVersion: process.version,
			platform: process.platform,
			workingDirectory: process.cwd(),
			uptime: process.uptime()
		},
		openaiStatus: {
			connectionStatus: openaiConnectionStatus,
			lastError: openaiLastError,
			clientInitialized: !!openaiClient
		}
	});
});

// OpenAI API key validation endpoint for Railway deployment  
app.get("/api/test-openai", async (_req, res) => {
	try {
		const apiKey = process.env.OPENAI_API_KEY;
		
		if (!apiKey) {
			return res.status(400).json({
				status: "failed",
				error: "OPENAI_API_KEY environment variable not found",
				timestamp: new Date().toISOString(),
				troubleshooting: "Set OPENAI_API_KEY in Railway environment variables"
			});
		}
		
		// Check for placeholder API key
		if (apiKey === 'your_openai_api_key_here' || apiKey.startsWith('sk-your-') || apiKey === 'sk-your-openai-api-key-here') {
			return res.status(400).json({
				status: "failed",
				error: "OPENAI_API_KEY appears to be a placeholder value",
				timestamp: new Date().toISOString(),
				troubleshooting: "Replace with a real OpenAI API key starting with 'sk-'"
			});
		}
		
		const openai = getOpenAI();
		
		const test = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages: [{ role: "user", content: "API validation test" }],
			max_tokens: 5,
			timeout: 15000
		});
		
		res.json({ 
			status: "success", 
			message: "OpenAI API key validated successfully",
			response: test.choices[0]?.message?.content || "No response",
			model: "gpt-3.5-turbo",
			usage: test.usage,
			timestamp: new Date().toISOString()
		});
		
	} catch (error) {
		console.error("❌ OpenAI API test failed:", error.message);
		
		// Provide specific error guidance
		let troubleshooting = "Unknown error occurred";
		if (error.message?.includes('ENOTFOUND') || error.message?.includes('getaddrinfo')) {
			troubleshooting = "Network connectivity issue - check Railway network settings";
		} else if (error.status === 401) {
			troubleshooting = "Invalid API key - verify OPENAI_API_KEY is correct";
		} else if (error.status === 429) {
			troubleshooting = "Rate limit exceeded - try again later";
		} else if (error.message?.includes('timeout')) {
			troubleshooting = "Request timed out - OpenAI API may be slow";
		}
		
		res.status(500).json({ 
			status: "failed", 
			error: error.message,
			errorCode: error.status || 'unknown',
			troubleshooting: troubleshooting,
			timestamp: new Date().toISOString()
		});
	}
});

// Test endpoint for API functionality
app.get("/api/test", async (_req, res) => {
	try {
		const openai = getOpenAI();
		
		const test = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages: [{ role: "user", content: "Say 'API test successful'" }],
			max_tokens: 10,
			timeout: 10000
		});
		
		res.json({ 
			status: "success", 
			response: test.choices[0]?.message?.content || "No response",
			model: "gpt-3.5-turbo",
			timestamp: new Date().toISOString()
		});
		
	} catch (error) {
		res.status(500).json({ 
			status: "failed", 
			error: error.message,
			timestamp: new Date().toISOString()
		});
	}
});

// Diagnostic endpoint for troubleshooting
app.get("/api/diagnose", (_req, res) => {
	const apiKey = process.env.OPENAI_API_KEY;
	const hasKey = !!apiKey;
	const isPlaceholder = apiKey === 'your_openai_api_key_here' || 
		apiKey?.startsWith('sk-your-') || 
		apiKey === 'sk-your-openai-api-key-here';
	const keyFormat = apiKey?.startsWith('sk-') ? 'valid-format' : 'invalid-format';
	
	res.json({
		timestamp: new Date().toISOString(),
		openai: {
			hasApiKey: hasKey,
			isPlaceholder: isPlaceholder,
			keyFormat: hasKey ? keyFormat : 'none',
			keyLength: hasKey ? apiKey.length : 0,
			keyPrefix: hasKey ? apiKey.substring(0, 8) + '...' : 'none',
			connectionStatus: openaiConnectionStatus,
			lastError: openaiLastError,
			clientInitialized: !!openaiClient
		},
		environment: {
			nodeEnv: process.env.NODE_ENV || 'development',
			port: PORT,
			model: SCAM_MODEL
		},
		troubleshooting: {
			commonIssues: [
				hasKey ? null : "No OPENAI_API_KEY found in environment",
				isPlaceholder ? "API key appears to be a placeholder - replace with real key" : null,
				!hasKey || isPlaceholder ? null : (keyFormat === 'invalid-format' ? "API key doesn't start with 'sk-'" : null),
				openaiConnectionStatus === 'network-error' ? "Network connectivity issue - check firewall/proxy" : null,
				openaiConnectionStatus === 'invalid-key' ? "API key is invalid or expired" : null,
				openaiConnectionStatus === 'rate-limited' ? "OpenAI API rate limit exceeded" : null
			].filter(Boolean),
			nextSteps: openaiConnectionStatus === 'connected' ? 
				["OpenAI API is working correctly"] :
				[
					"1. Verify OPENAI_API_KEY is set correctly",
					"2. Check API key has sufficient credits",
					"3. Test network connectivity to api.openai.com",
					"4. Check application logs for detailed errors"
				]
		}
	});
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error('❌ Unhandled error:', err);
	res.status(500).json({ 
		error: 'Internal server error',
		timestamp: new Date().toISOString()
	});
});

// 404 handler
app.use((req, res) => {
	res.status(404).json({ 
		error: 'Endpoint not found',
		availableEndpoints: [
			'GET /',
			'GET /api/health',
			'GET /api/personas',
			'POST /api/scam-chat',
			'POST /api/scam-eval',
			'GET /api/test',
			'GET /api/test-openai',
			'GET /api/debug-env',
			'GET /api/diagnose'
		],
		timestamp: new Date().toISOString()
	});
});

// Add startup error handling
process.on('uncaughtException', (error) => {
	console.error('💥 Uncaught Exception:', error);
	process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
	console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
	process.exit(1);
});

// Start server with enhanced logging
const server = app.listen(PORT, '0.0.0.0', () => {
	console.log(`🚀 AI Scam Backend v2.0 running on http://0.0.0.0:${PORT}`);
	console.log(`📁 Working directory: ${process.cwd()}`);
	console.log(`📡 Health check: http://0.0.0.0:${PORT}/api/health`);
	console.log(`🤖 Chat endpoint: http://0.0.0.0:${PORT}/api/scam-chat`);
	console.log(`📊 Eval endpoint: http://0.0.0.0:${PORT}/api/scam-eval`);
	console.log(`👥 Personas endpoint: http://0.0.0.0:${PORT}/api/personas`);
	console.log(`🧪 Test endpoint: http://0.0.0.0:${PORT}/api/test`);
	console.log(`🎭 Available personas: ${Object.keys(personas).length}`);
	console.log(`🔑 OpenAI status: ${openaiConnectionStatus === 'connected' ? '✅ Connected' : `❌ ${openaiConnectionStatus}`}`);
	console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
	console.log(`🔧 All environment variables:`, Object.keys(process.env).filter(key => !key.includes('PATH')));
});

// Graceful shutdown
process.on('SIGTERM', () => {
	console.log('🔄 SIGTERM received, shutting down gracefully');
	server.close(() => {
		console.log('✅ Process terminated gracefully');
	});
});

process.on('SIGINT', () => {
	console.log('🔄 SIGINT received, shutting down gracefully');
	server.close(() => {
		console.log('✅ Process terminated gracefully');
	});
});