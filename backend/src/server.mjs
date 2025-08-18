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
			'https://your-netlify-site.netlify.app',
			'https://your-custom-domain.com'
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

// OpenAI client initialization
function getOpenAI() {
	const apiKey = process.env.OPENAI_API_KEY;
	if (!apiKey) {
		throw new Error("OPENAI_API_KEY is required but missing");
	}
	return new OpenAI({ apiKey });
}

// Health check endpoint
app.get("/", (req, res) => {
	res.json({ 
		status: "AI Scam Backend is running", 
		timestamp: new Date().toISOString(),
		version: "1.0.0"
	});
});

app.get("/api/health", (_req, res) => {
	res.json({ 
		status: "ok", 
		timestamp: new Date().toISOString(),
		uptime: process.uptime(),
		memory: process.memoryUsage()
	});
});

// Scam chat endpoint
app.post("/api/scam-chat", async (req, res) => {
	try {
		const { personaId, messages } = req.body || {};
		if (!personaId || !Array.isArray(messages) || messages.length === 0) {
			return res.status(400).json({ error: "Invalid payload: personaId and messages array required" });
		}
		
		const persona = personas[personaId];
		if (!persona) {
			return res.status(400).json({ error: "Invalid persona ID" });
		}

		const openai = getOpenAI();
		const chat = await openai.chat.completions.create({
			model: SCAM_MODEL,
			temperature: 0.8,
			max_tokens: 80,
			messages: [
				{ role: "system", content: persona.system },
				...messages.map(m => ({ role: m.role, content: m.content }))
			]
		});
		
		const content = chat.choices?.[0]?.message?.content ?? "";
		if (!content) {
			return res.status(500).json({ error: "No response generated" });
		}
		
		res.json({ content });
	} catch (e) {
		console.error("/api/scam-chat error", e);
		res.status(500).json({ error: `Error: ${e?.message || "Unknown error occurred"}` });
	}
});

// Scam evaluation endpoint
app.post("/api/scam-eval", async (req, res) => {
	try {
		const { personaId, transcript } = req.body || {};
		if (!Array.isArray(transcript) || transcript.length === 0) {
			return res.status(400).json({ error: "Transcript is required" });
		}
		
		const schema = {
			name: "ScamEval",
			schema: {
				type: "object",
				properties: {
					outcome: { type: "string", enum: ["safe", "risky", "compromised"] },
					score: { type: "integer", minimum: 0, maximum: 100 },
					badge: { type: "string" },
					feedback: { type: "string" }
				},
				additionalProperties: false,
				required: ["outcome", "score", "badge", "feedback"]
			},
			strict: true
		};

		const system = `You are an expert evaluator for a scam-awareness training simulator. Analyze the user's performance in a chat with a scammer persona. Return strict JSON.

Scoring Guidelines:
- 90-100: Excellent - Immediately identified as scam, no sensitive info shared
- 70-89: Good - Identified as scam with some hesitation
- 50-69: Risky - Showed some suspicious behavior but didn't fall completely
- 0-49: Compromised - Fell for the scam or shared sensitive information

Badge Guidelines:
- Perfect (90-100): "Scam Detector", "Cyber Savvy", "Digital Guardian"
- Good (70-89): "Cautious User", "Alert Citizen", "Scam Aware"
- Risky (50-69): "Needs Practice", "Learning Mode", "Getting There"
- Poor (0-49): "Scam Victim", "High Risk", "Needs Training"`;

		const openai = getOpenAI();
		const completion = await openai.chat.completions.create({
			model: SCAM_MODEL,
			temperature: 0,
			response_format: { type: "json_schema", json_schema: schema },
			max_tokens: 200,
			messages: [
				{ role: "system", content: system },
				{ role: "user", content: `Persona: ${personaId}\n\nTranscript:\n${transcript.map(m => `${m.role}: ${m.content}`).join("\n")}\n\nEvaluate this user's performance and return JSON.` }
			]
		});
		
		const jsonContent = completion.choices?.[0]?.message?.content || "{}";
		try {
			const parsed = JSON.parse(jsonContent);
			if (!parsed.outcome || parsed.score === undefined || !parsed.badge || !parsed.feedback) {
				throw new Error("Incomplete evaluation result");
			}
			res.json(parsed);
		} catch (err) {
			console.error("/api/scam-eval parse error", err);
			res.json({ 
				outcome: "error", 
				score: 0, 
				badge: "Evaluation Error", 
				feedback: "Failed to evaluate performance. Please try again." 
			});
		}
	} catch (e) {
		console.error("/api/scam-eval error", e);
		res.status(500).json({ error: `Error: ${e?.message || "Unknown error occurred"}` });
	}
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error('Unhandled error:', err);
	res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
	res.status(404).json({ error: 'Endpoint not found' });
});

const server = app.listen(PORT, '0.0.0.0', () => {
	console.log(`🚀 Backend running on http://0.0.0.0:${PORT}`);
	console.log(`📡 Health check: http://0.0.0.0:${PORT}/api/health`);
	console.log(`🤖 Chat endpoint: http://0.0.0.0:${PORT}/api/scam-chat`);
	console.log(`📊 Eval endpoint: http://0.0.0.0:${PORT}/api/scam-eval`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
	console.log('SIGTERM received, shutting down gracefully');
	server.close(() => {
		console.log('Process terminated');
	});
});