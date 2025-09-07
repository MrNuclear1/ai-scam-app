"use client";
import { useState } from "react";
import { personas, type PersonaId } from "@/data/personas";

interface Message {
	role: "user" | "assistant";
	content: string;
}

interface ScamChatProps {
	personaId: PersonaId;
}

export default function ScamChat({ personaId }: ScamChatProps) {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	const [evaluation, setEvaluation] = useState<any>(null);

	const persona = personas[personaId];

	async function sendMessage(e: React.FormEvent) {
		e.preventDefault();
		if (!input.trim() || isLoading) return;

		const userMessage: Message = { role: "user", content: input.trim() };
		const newMessages = [...messages, userMessage];
		setMessages(newMessages);
		setInput("");
		setIsLoading(true);

		try {
			const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "";
			// Send message to AI scammer
			const res = await fetch(`${baseUrl}/api/scam-chat`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ personaId, messages: newMessages }),
			});

			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}

			const data = await res.json();
			if (data.content) {
				const assistantMessage: Message = { role: "assistant", content: data.content };
				setMessages([...newMessages, assistantMessage]);
			}
		} catch (error) {
			console.error("Error sending message:", error);
			const errorMessage: Message = { 
				role: "assistant", 
				content: "Sorry, I'm having trouble connecting right now. Please try again later." 
			};
			setMessages([...newMessages, errorMessage]);
		} finally {
			setIsLoading(false);
		}
	}

	async function finishAndScore() {
		if (messages.length === 0) return;

		setIsLoading(true);
		try {
			const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "";
			// Send transcript for evaluation
			const res = await fetch(`${baseUrl}/api/scam-eval`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ personaId, transcript: messages }),
			});

			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}

			const evalData = await res.json();
			setEvaluation(evalData);
			setIsFinished(true);
		} catch (error) {
			console.error("Error getting evaluation:", error);
			setEvaluation({
				outcome: "error",
				score: 0,
				badge: "Evaluation Error",
				feedback: "Unable to evaluate your performance. Please try again."
			});
			setIsFinished(true);
		} finally {
			setIsLoading(false);
		}
	}

	if (isFinished && evaluation) {
		return (
			<div className="max-w-4xl mx-auto p-6 bg-[#1E293B] rounded-xl">
				<div className="text-center mb-6">
					<h2 className="text-2xl font-bold text-[#E8EEF6] mb-4">Simulation Complete!</h2>
					<div className={`text-6xl mb-4 ${
						evaluation.outcome === 'safe' ? 'text-green-400' :
						evaluation.outcome === 'risky' ? 'text-yellow-400' : 'text-red-400'
					}`}>
						{evaluation.outcome === 'safe' ? '✅' : 
						 evaluation.outcome === 'risky' ? '⚠️' : '❌'}
					</div>
					<div className="text-4xl font-bold text-[#E8EEF6] mb-2">
						{evaluation.score}/100
					</div>
					<div className="text-xl text-[#CBD5E1] mb-4">
						{evaluation.badge}
					</div>
				</div>

				<div className="bg-[#0F172A] p-4 rounded-lg mb-6">
					<h3 className="text-lg font-semibold text-[#E8EEF6] mb-2">Feedback:</h3>
					<p className="text-[#CBD5E1]">{evaluation.feedback}</p>
				</div>

				<div className="text-center">
					<button
						onClick={() => window.location.reload()}
						className="bg-gradient-to-r from-[#3BA4F7] to-[#7C5CFC] hover:from-[#2A8EE6] hover:to-[#6D4CFC] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
					>
						Try Again
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="max-w-4xl mx-auto">
			{/* Persona Info */}
			<div className="bg-[#1E293B] p-6 rounded-xl mb-6">
				<h2 className="text-2xl font-bold text-[#E8EEF6] mb-2">{persona.title}</h2>
				<p className="text-[#CBD5E1] mb-4">{persona.description}</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<h3 className="text-lg font-semibold text-[#E8EEF6] mb-2">Tips to Remember:</h3>
						<ul className="text-[#94A3B8] space-y-1">
							{persona.tips.map((tip, index) => (
								<li key={index} className="flex items-start">
									<span className="text-[#20C997] mr-2">•</span>
									{tip}
								</li>
							))}
						</ul>
					</div>
					<div className="flex items-center justify-center">
						<div className={`px-4 py-2 rounded-lg ${
							persona.difficulty === 'easy' ? 'bg-green-900 text-green-300' :
							persona.difficulty === 'medium' ? 'bg-yellow-900 text-yellow-300' :
							'bg-red-900 text-red-300'
						}`}>
							Difficulty: {persona.difficulty.toUpperCase()}
						</div>
					</div>
				</div>
			</div>

			{/* Chat Interface */}
			<div className="bg-[#1E293B] rounded-xl overflow-hidden">
				{/* Messages */}
				<div className="h-96 overflow-y-auto p-6 space-y-4">
					{messages.length === 0 ? (
						<div className="text-center text-[#94A3B8] py-12">
							<p className="text-lg mb-4">🎯 Simulation Ready</p>
							<p>Start the conversation below. Remember the tips and try to avoid falling for the scam!</p>
						</div>
					) : (
						messages.map((message, index) => (
							<div
								key={index}
								className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
							>
								<div
									className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
										message.role === 'user'
											? 'bg-[#3BA4F7] text-white'
											: 'bg-[#374151] text-[#E8EEF6]'
									} chat-message`}
								>
									<p className="text-sm">{message.content}</p>
								</div>
							</div>
						))
					)}
					{isLoading && (
						<div className="flex justify-start">
							<div className="bg-[#374151] text-[#E8EEF6] px-4 py-3 rounded-lg">
								<div className="flex items-center space-x-2">
									<div className="w-2 h-2 bg-[#94A3B8] rounded-full animate-pulse"></div>
									<div className="w-2 h-2 bg-[#94A3B8] rounded-full animate-pulse delay-75"></div>
									<div className="w-2 h-2 bg-[#94A3B8] rounded-full animate-pulse delay-150"></div>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Input Form */}
				<div className="border-t border-[#374151] p-6">
					<form onSubmit={sendMessage} className="flex space-x-4">
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Type your response..."
							className="flex-1 bg-[#374151] text-[#E8EEF6] border border-[#4B5563] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3BA4F7] focus:border-transparent"
							disabled={isLoading}
						/>
						<button
							type="submit"
							disabled={isLoading || !input.trim()}
							className="bg-[#3BA4F7] hover:bg-[#2A8EE6] disabled:bg-[#4B5563] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
						>
							Send
						</button>
					</form>
					
					{messages.length > 0 && (
						<div className="mt-4 flex justify-center">
							<button
								onClick={finishAndScore}
								disabled={isLoading}
								className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] disabled:from-[#4B5563] disabled:to-[#4B5563] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
							>
								{isLoading ? 'Evaluating...' : 'Finish & Get Score'}
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
