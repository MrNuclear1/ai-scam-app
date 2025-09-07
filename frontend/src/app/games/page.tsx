"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface GameMessage {
	id: number;
	message: string;
	isScam: boolean;
	explanation: string;
}

const gameMessages: GameMessage[] = [
	{
		id: 1,
		message: "🎉 CONGRATULATIONS! You've won $10,000! Click here to claim your prize immediately! Limited time offer!",
		isScam: true,
		explanation: "Legitimate companies don't randomly contact you about winning money you never entered to win. This is a classic lottery scam."
	},
	{
		id: 2,
		message: "Your Amazon order #12345 has been shipped and will arrive tomorrow. Track your package at amazon.com/tracking",
		isScam: false,
		explanation: "This is a legitimate shipping notification from Amazon with proper order number format and official domain."
	},
	{
		id: 3,
		message: "URGENT: Your bank account will be closed in 24 hours unless you verify your identity. Click here now!",
		isScam: true,
		explanation: "Banks never threaten to close accounts via text/email. They use official mail and phone calls for serious matters."
	},
	{
		id: 4,
		message: "Your Netflix subscription will renew on 2024-01-15 for $15.99. Manage your subscription at netflix.com/account",
		isScam: false,
		explanation: "This is a standard subscription renewal notice with clear pricing and official Netflix domain."
	},
	{
		id: 5,
		message: "Bitcoin investment opportunity! Double your money in 7 days! Guaranteed returns! Sign up now!",
		isScam: true,
		explanation: "No legitimate investment guarantees specific returns, especially in such short timeframes. This is a classic investment scam."
	},
	{
		id: 6,
		message: "Your Apple ID was used to sign in on a new device. If this wasn't you, secure your account at appleid.apple.com",
		isScam: false,
		explanation: "Apple sends legitimate security notifications with official domain when account activity is detected."
	},
	{
		id: 7,
		message: "You have 3 unread messages from beautiful singles in your area! Click here to see who's interested!",
		isScam: true,
		explanation: "Dating app notifications don't work this way. This is likely a phishing attempt or subscription trap."
	},
	{
		id: 8,
		message: "Your credit card ending in 1234 was charged $29.99 at Starbucks. Call 1-800-XXX-XXXX if this wasn't you.",
		isScam: false,
		explanation: "Legitimate banks send transaction alerts with partial card numbers and official phone numbers for verification."
	},
	{
		id: 9,
		message: "FREE iPhone 15 Pro! Just pay $9.99 shipping! Limited time offer! Order now before it's too late!",
		isScam: true,
		explanation: "No one gives away expensive phones for just shipping costs. This is a common scam to steal payment information."
	},
	{
		id: 10,
		message: "Your Google account security check is due. Please verify your information to keep your account secure.",
		isScam: false,
		explanation: "Google periodically asks users to verify account information for security purposes through official channels."
	}
];

export default function GamesPage() {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);
	const [gameComplete, setGameComplete] = useState(false);
	const [shuffledMessages, setShuffledMessages] = useState<GameMessage[]>([]);

	useEffect(() => {
		// Shuffle messages for random order
		const shuffled = [...gameMessages].sort(() => Math.random() - 0.5);
		setShuffledMessages(shuffled);
	}, []);

	const handleAnswer = (isScam: boolean) => {
		setSelectedAnswer(isScam);
		setShowResult(true);
		
		if (isScam === shuffledMessages[currentMessageIndex].isScam) {
			setScore(score + 1);
		}
	};

	const handleNext = () => {
		if (currentMessageIndex < shuffledMessages.length - 1) {
			setCurrentMessageIndex(currentMessageIndex + 1);
			setSelectedAnswer(null);
			setShowResult(false);
		} else {
			setGameComplete(true);
		}
	};

	const resetGame = () => {
		const shuffled = [...gameMessages].sort(() => Math.random() - 0.5);
		setShuffledMessages(shuffled);
		setCurrentMessageIndex(0);
		setSelectedAnswer(null);
		setShowResult(false);
		setScore(0);
		setGameComplete(false);
	};

	if (shuffledMessages.length === 0) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-[#0B0F14] via-[#1A1F2E] to-[#0B0F14] flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#20C997] mx-auto"></div>
					<p className="mt-4 text-[#CBD5E1]">Loading game...</p>
				</div>
			</div>
		);
	}

	if (gameComplete) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-[#0B0F14] via-[#1A1F2E] to-[#0B0F14] flex items-center justify-center p-4">
				<div className="max-w-2xl w-full">
					<div className="bg-[#1E293B]/80 backdrop-blur-sm border border-[#334155] rounded-2xl p-8 text-center">
						<div className="mb-6">
							<h1 className="text-4xl font-bold bg-gradient-to-r from-[#20C997] to-[#3BA4F7] bg-clip-text text-transparent mb-2">
								Game Complete! 🎉
							</h1>
							<p className="text-[#CBD5E1] text-lg">Your Red Flag Green Flag Score</p>
						</div>
						
						<div className="mb-8">
							<div className="text-6xl font-bold text-[#20C997] mb-2">
								{score}/10
							</div>
							<div className="text-[#CBD5E1]">
								{score >= 8 ? "Excellent! You're a scam detection expert! 🏆" :
								 score >= 6 ? "Good job! You're getting better at spotting scams! 👍" :
								 score >= 4 ? "Not bad! Keep practicing to improve! 📚" :
								 "Keep learning! Scam awareness takes practice! 💪"}
							</div>
						</div>

						<div className="space-y-4">
							<button
								onClick={resetGame}
								className="w-full bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8FDB] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
							>
								Play Again
							</button>
							<Link
								href="/lessons"
								className="block w-full bg-[#334155] hover:bg-[#475569] text-[#E8EEF6] font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-center"
							>
								Learn More About Scams
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

	const currentMessage = shuffledMessages[currentMessageIndex];

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#0B0F14] via-[#1A1F2E] to-[#0B0F14] p-4">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent mb-2">
						🚩 Red Flag Green Flag 🟢
					</h1>
					<p className="text-[#CBD5E1] text-lg">Can you spot the scams? Choose wisely!</p>
					<div className="mt-4 flex justify-center items-center space-x-4">
						<div className="text-[#CBD5E1]">
							Question {currentMessageIndex + 1} of {shuffledMessages.length}
						</div>
						<div className="text-[#20C997] font-semibold">
							Score: {score}
						</div>
					</div>
				</div>

				{/* Progress Bar */}
				<div className="mb-8">
					<div className="w-full bg-[#334155] rounded-full h-3">
						<div 
							className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] h-3 rounded-full transition-all duration-500"
							style={{ width: `${((currentMessageIndex + 1) / shuffledMessages.length) * 100}%` }}
						></div>
					</div>
				</div>

				{/* Game Card */}
				<div className="bg-[#1E293B]/80 backdrop-blur-sm border border-[#334155] rounded-2xl p-8 mb-8">
					{/* Message */}
					<div className="mb-8">
						<div className="bg-[#0F172A] border border-[#334155] rounded-xl p-6">
							<p className="text-[#E8EEF6] text-lg leading-relaxed">
								{currentMessage.message}
							</p>
						</div>
					</div>

					{/* Answer Buttons */}
					{!showResult && (
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button
								onClick={() => handleAnswer(true)}
								className="flex-1 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] hover:from-[#FF5252] hover:to-[#FF7979] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
							>
								<span className="text-2xl">🚩</span>
								<span>RED FLAG - This is a SCAM</span>
							</button>
							<button
								onClick={() => handleAnswer(false)}
								className="flex-1 bg-gradient-to-r from-[#4ECDC4] to-[#6EDDD6] hover:from-[#26A69A] hover:to-[#4ECDC4] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
							>
								<span className="text-2xl">🟢</span>
								<span>GREEN FLAG - This is LEGITIMATE</span>
							</button>
						</div>
					)}

					{/* Result */}
					{showResult && (
						<div className="space-y-6">
							<div className={`p-6 rounded-xl border-2 ${
								selectedAnswer === currentMessage.isScam 
									? 'bg-[#065F46]/20 border-[#10B981]' 
									: 'bg-[#7F1D1D]/20 border-[#EF4444]'
							}`}>
								<div className="flex items-center justify-center space-x-3 mb-4">
									<span className="text-4xl">
										{selectedAnswer === currentMessage.isScam ? '✅' : '❌'}
									</span>
									<span className={`text-2xl font-bold ${
										selectedAnswer === currentMessage.isScam ? 'text-[#10B981]' : 'text-[#EF4444]'
									}`}>
										{selectedAnswer === currentMessage.isScam ? 'Correct!' : 'Incorrect!'}
									</span>
								</div>
								<div className="text-center">
									<p className="text-[#CBD5E1] mb-2">
										This message is: <span className={`font-bold ${
											currentMessage.isScam ? 'text-[#FF6B6B]' : 'text-[#4ECDC4]'
										}`}>
											{currentMessage.isScam ? 'A SCAM 🚩' : 'LEGITIMATE 🟢'}
										</span>
									</p>
									<p className="text-[#94A3B8] text-sm">
										{currentMessage.explanation}
									</p>
								</div>
							</div>

							<button
								onClick={handleNext}
								className="w-full bg-gradient-to-r from-[#3BA4F7] to-[#7C5CFC] hover:from-[#2A8FDB] hover:to-[#6B46C1] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
							>
								{currentMessageIndex < shuffledMessages.length - 1 ? 'Next Question' : 'Finish Game'}
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
