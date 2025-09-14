"use client";
import { useState } from "react";
import Link from "next/link";

interface LinkExample {
	id: number;
	url: string;
	isLegitimate: boolean;
	explanation: string;
	domain: string;
	subdomain: string;
	path: string;
}

const linkExamples: LinkExample[] = [
	{
		id: 1,
		url: "https://www.amazon.com/your-orders",
		isLegitimate: true,
		explanation: "This is legitimate - the domain is 'amazon.com' which is the official Amazon website.",
		domain: "amazon.com",
		subdomain: "www",
		path: "/your-orders"
	},
	{
		id: 2,
		url: "https://amazon-security-alert.com/login",
		isLegitimate: false,
		explanation: "This is a scam! The domain is 'amazon-security-alert.com', not 'amazon.com'. Scammers use similar-looking domains to trick you.",
		domain: "amazon-security-alert.com",
		subdomain: "",
		path: "/login"
	},
	{
		id: 3,
		url: "https://secure.paypal.com/account",
		isLegitimate: true,
		explanation: "This is legitimate - 'secure.paypal.com' is a valid subdomain of the official PayPal domain 'paypal.com'.",
		domain: "paypal.com",
		subdomain: "secure",
		path: "/account"
	},
	{
		id: 4,
		url: "https://paypal-security.net/verify",
		isLegitimate: false,
		explanation: "This is a scam! The domain ends with '.net' instead of '.com', and 'paypal-security.net' is not the official PayPal domain.",
		domain: "paypal-security.net",
		subdomain: "",
		path: "/verify"
	},
	{
		id: 5,
		url: "https://myaccount.google.com/settings",
		isLegitimate: true,
		explanation: "This is legitimate - 'myaccount.google.com' is a valid subdomain of the official Google domain 'google.com'.",
		domain: "google.com",
		subdomain: "myaccount",
		path: "/settings"
	},
	{
		id: 6,
		url: "https://google-account-security.com/update",
		isLegitimate: false,
		explanation: "This is a scam! The domain is 'google-account-security.com', not 'google.com'. The scammers added extra words to make it look official.",
		domain: "google-account-security.com",
		subdomain: "",
		path: "/update"
	},
	{
		id: 7,
		url: "https://www.netflix.com/YourAccount",
		isLegitimate: true,
		explanation: "This is legitimate - the domain is 'netflix.com' which is the official Netflix website.",
		domain: "netflix.com",
		subdomain: "www",
		path: "/YourAccount"
	},
	{
		id: 8,
		url: "https://netflix-billing.org/payment",
		isLegitimate: false,
		explanation: "This is a scam! The domain ends with '.org' instead of '.com', and 'netflix-billing.org' is not the official Netflix domain.",
		domain: "netflix-billing.org",
		subdomain: "",
		path: "/payment"
	},
	{
		id: 9,
		url: "https://support.apple.com/iphone",
		isLegitimate: true,
		explanation: "This is legitimate - 'support.apple.com' is a valid subdomain of the official Apple domain 'apple.com'.",
		domain: "apple.com",
		subdomain: "support",
		path: "/iphone"
	},
	{
		id: 10,
		url: "https://apple-security-alert.com/verify",
		isLegitimate: false,
		explanation: "This is a scam! The domain is 'apple-security-alert.com', not 'apple.com'. Scammers add words like 'security' or 'alert' to make fake domains look official.",
		domain: "apple-security-alert.com",
		subdomain: "",
		path: "/verify"
	}
];

export default function LinkRecognitionPage() {
	const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
	const [showAnswer, setShowAnswer] = useState(false);
	const [score, setScore] = useState(0);
	const [quizComplete, setQuizComplete] = useState(false);
	const [userAnswers, setUserAnswers] = useState<(boolean | null)[]>(new Array(linkExamples.length).fill(null));

	const currentExample = linkExamples[currentExampleIndex];

	const handleAnswer = (isLegitimate: boolean) => {
		const newAnswers = [...userAnswers];
		newAnswers[currentExampleIndex] = isLegitimate;
		setUserAnswers(newAnswers);
		setShowAnswer(true);

		if (isLegitimate === currentExample.isLegitimate) {
			setScore(score + 1);
		}
	};

	const handleNext = () => {
		if (currentExampleIndex < linkExamples.length - 1) {
			setCurrentExampleIndex(currentExampleIndex + 1);
			setShowAnswer(false);
		} else {
			setQuizComplete(true);
		}
	};

	const resetQuiz = () => {
		setCurrentExampleIndex(0);
		setShowAnswer(false);
		setScore(0);
		setQuizComplete(false);
		setUserAnswers(new Array(linkExamples.length).fill(null));
	};

	const parseUrl = (url: string) => {
		try {
			const urlObj = new URL(url);
			const hostname = urlObj.hostname;
			const parts = hostname.split('.');
			
			if (parts.length >= 2) {
				const domain = parts.slice(-2).join('.');
				const subdomain = parts.length > 2 ? parts.slice(0, -2).join('.') : '';
				return {
					domain,
					subdomain,
					path: urlObj.pathname
				};
			}
			return { domain: hostname, subdomain: '', path: urlObj.pathname };
		} catch {
			return { domain: 'Invalid URL', subdomain: '', path: '' };
		}
	};

	if (quizComplete) {
		return (
			<div className="min-h-screen flex items-center justify-center p-4">
				<div className="max-w-2xl w-full">
					<div className="bg-sage-100/80 backdrop-blur-sm border border-sage-300 rounded-2xl p-8 text-center shadow-sm">
						<div className="mb-6">
							<h1 className="text-4xl font-bold text-gray-800 mb-2">
								Quiz Complete! 🎉
							</h1>
							<p className="text-gray-600 text-lg">Your Link Recognition Score</p>
						</div>
						
						<div className="mb-8">
							<div className="text-6xl font-bold text-[#20C997] mb-2">
								{score}/{linkExamples.length}
							</div>
							<div className="text-gray-600">
								{score >= 8 ? "Excellent! You're a link recognition expert! 🏆" :
								 score >= 6 ? "Good job! You're getting better at spotting fake links! 👍" :
								 score >= 4 ? "Not bad! Keep practicing to improve! 📚" :
								 "Keep learning! Link recognition takes practice! 💪"}
							</div>
						</div>

						<div className="space-y-4">
							<button
								onClick={resetQuiz}
								className="w-full bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
							>
								Take Quiz Again
							</button>
							<Link
								href="/games"
								className="block w-full bg-[#3BA4F7] hover:bg-[#2A8EE6] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-center"
							>
								Play More Games
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen p-4">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-800 mb-2">
						🔗 Link Recognition Training
					</h1>
					<p className="text-gray-600 text-lg">Learn to identify legitimate vs fake links</p>
					<div className="mt-4 flex justify-center items-center space-x-4">
						<div className="text-gray-600">
							Question {currentExampleIndex + 1} of {linkExamples.length}
						</div>
						<div className="text-[#20C997] font-semibold">
							Score: {score}
						</div>
					</div>
				</div>

				{/* Progress Bar */}
				<div className="mb-8">
					<div className="w-full bg-sage-300 rounded-full h-3">
						<div 
							className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] h-3 rounded-full transition-all duration-500"
							style={{ width: `${((currentExampleIndex + 1) / linkExamples.length) * 100}%` }}
						></div>
					</div>
				</div>

				{/* Educational Content */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					{/* URL Breakdown */}
					<div className="bg-sage-100/80 backdrop-blur-sm border border-sage-300 rounded-2xl p-6">
						<h3 className="text-xl font-bold text-gray-800 mb-4">🔍 URL Components</h3>
						<div className="space-y-3">
							<div className="bg-sage-100/90 border border-sage-300 rounded-lg p-4 shadow-sm">
								<div className="text-sm text-gray-600 mb-2">Example URL:</div>
								<div className="text-gray-800 font-mono text-sm break-all">
									https://www.amazon.com/your-orders
								</div>
							</div>
							<div className="grid grid-cols-1 gap-3">
								<div className="flex items-center space-x-3">
									<span className="bg-accent-500 text-white text-xs px-2 py-1 rounded">Protocol</span>
									<span className="text-gray-700 text-sm">https://</span>
								</div>
								<div className="flex items-center space-x-3">
									<span className="bg-secondary-500 text-white text-xs px-2 py-1 rounded">Subdomain</span>
									<span className="text-gray-700 text-sm">www</span>
								</div>
								<div className="flex items-center space-x-3">
									<span className="bg-secondary-600 text-white text-xs px-2 py-1 rounded">Domain</span>
									<span className="text-gray-700 text-sm">amazon.com</span>
								</div>
								<div className="flex items-center space-x-3">
									<span className="bg-accent-500 text-white text-xs px-2 py-1 rounded">Path</span>
									<span className="text-gray-700 text-sm">/your-orders</span>
								</div>
							</div>
						</div>
					</div>

					{/* Key Rules */}
					<div className="bg-sage-100/80 backdrop-blur-sm border border-sage-300 rounded-2xl p-6">
						<h3 className="text-xl font-bold text-gray-800 mb-4">📋 Key Rules</h3>
						<div className="space-y-4">
							<div className="flex items-start space-x-3">
								<span className="text-[#20C997] text-xl">✅</span>
								<div>
									<div className="text-gray-800 font-semibold">Focus on the Domain</div>
									<div className="text-gray-600 text-sm">The main part before the first slash is what matters</div>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<span className="text-[#FF6B6B] text-xl">❌</span>
								<div>
									<div className="text-gray-800 font-semibold">Ignore Subdomains</div>
									<div className="text-gray-600 text-sm">www, secure, myaccount are just subdomains</div>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<span className="text-[#FF6B6B] text-xl">❌</span>
								<div>
									<div className="text-gray-800 font-semibold">Watch for Extra Words</div>
									<div className="text-gray-600 text-sm">amazon-security.com is NOT amazon.com</div>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<span className="text-[#FF6B6B] text-xl">❌</span>
								<div>
									<div className="text-gray-800 font-semibold">Check Extensions</div>
									<div className="text-gray-600 text-sm">amazon.net is NOT amazon.com</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Quiz Card */}
				<div className="bg-sage-100/80 backdrop-blur-sm border border-sage-300 rounded-2xl p-8">
					{/* Current URL */}
					<div className="mb-8">
						<h3 className="text-xl font-bold text-gray-800 mb-4">Is this link legitimate?</h3>
						<div className="bg-white border border-sage-300 rounded-xl p-6">
							<div className="text-gray-800 font-mono text-lg break-all">
								{currentExample.url}
							</div>
						</div>
					</div>

					{/* URL Breakdown */}
					<div className="mb-8">
						<h4 className="text-lg font-semibold text-gray-800 mb-4">URL Breakdown:</h4>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div className="bg-sage-100/90 border border-sage-300 rounded-lg p-4 shadow-sm">
								<div className="text-[#3BA4F7] text-sm font-semibold mb-2">Subdomain</div>
								<div className="text-gray-800 font-mono">
									{currentExample.subdomain || '(none)'}
								</div>
							</div>
							<div className="bg-sage-100/90 border border-sage-300 rounded-lg p-4 shadow-sm">
								<div className="text-[#20C997] text-sm font-semibold mb-2">Domain</div>
								<div className="text-gray-800 font-mono">
									{currentExample.domain}
								</div>
							</div>
							<div className="bg-sage-100/90 border border-sage-300 rounded-lg p-4 shadow-sm">
								<div className="text-[#FF6B6B] text-sm font-semibold mb-2">Path</div>
								<div className="text-gray-800 font-mono">
									{currentExample.path}
								</div>
							</div>
						</div>
					</div>

					{/* Answer Buttons */}
					{!showAnswer && (
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button
								onClick={() => handleAnswer(true)}
								className="flex-1 bg-gradient-to-r from-[#4ECDC4] to-[#6EDDD6] hover:from-[#26A69A] hover:to-[#4ECDC4] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
							>
								<span className="text-2xl">✅</span>
								<span>LEGITIMATE</span>
							</button>
							<button
								onClick={() => handleAnswer(false)}
								className="flex-1 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] hover:from-[#FF5252] hover:to-[#FF7979] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
							>
								<span className="text-2xl">❌</span>
								<span>FAKE/SCAM</span>
							</button>
						</div>
					)}

					{/* Result */}
					{showAnswer && (
						<div className="space-y-6">
							<div className={`p-6 rounded-xl border-2 ${
								userAnswers[currentExampleIndex] === currentExample.isLegitimate 
									? 'bg-[#065F46]/20 border-[#10B981]' 
									: 'bg-[#7F1D1D]/20 border-[#EF4444]'
							}`}>
								<div className="flex items-center justify-center space-x-3 mb-4">
									<span className="text-4xl">
										{userAnswers[currentExampleIndex] === currentExample.isLegitimate ? '✅' : '❌'}
									</span>
									<span className={`text-2xl font-bold ${
										userAnswers[currentExampleIndex] === currentExample.isLegitimate ? 'text-[#10B981]' : 'text-[#EF4444]'
									}`}>
										{userAnswers[currentExampleIndex] === currentExample.isLegitimate ? 'Correct!' : 'Incorrect!'}
									</span>
								</div>
															<div className="text-center">
																<p className="text-gray-600 mb-2">
																	This link is: <span className={`font-bold ${
																		currentExample.isLegitimate ? 'text-[#4ECDC4]' : 'text-[#FF6B6B]'
																	}`}>
																		{currentExample.isLegitimate ? 'LEGITIMATE ✅' : 'FAKE/SCAM ❌'}
																	</span>
																</p>
																<p className="text-gray-600 text-sm">
																	{currentExample.explanation}
																</p>
															</div>
							</div>

							<button
								onClick={handleNext}
								className="w-full bg-gradient-to-r from-[#3BA4F7] to-[#7C5CFC] hover:from-[#2A8FDB] hover:to-[#6B46C1] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
							>
								{currentExampleIndex < linkExamples.length - 1 ? 'Next Question' : 'Finish Quiz'}
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

