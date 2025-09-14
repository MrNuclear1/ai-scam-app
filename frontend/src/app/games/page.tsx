"use client";
import Link from "next/link";

interface Game {
	id: string;
	title: string;
	description: string;
	difficulty: 'easy' | 'medium' | 'hard';
	duration: string;
	icon: string;
	href: string;
	features: string[];
}

const games: Game[] = [
	{
		id: "red-flag-green-flag",
		title: "Red Flag Green Flag",
		description: "Test your scam detection skills by identifying which messages are scams (red flags) and which are legitimate (green flags).",
		difficulty: 'easy',
		duration: "5-10 minutes",
		icon: "🚩",
		href: "/games/red-flag-green-flag",
		features: ["Real-world examples", "Instant feedback", "Score tracking", "Educational explanations"]
	},
	// Future games can be added here
	// {
	// 	id: "phishing-simulator",
	// 	title: "Phishing Email Detective",
	// 	description: "Analyze suspicious emails to identify phishing attempts and learn to spot common red flags.",
	// 	difficulty: 'medium',
	// 	duration: "10-15 minutes",
	// 	icon: "📧",
	// 	href: "/games/phishing-simulator",
	// 	features: ["Email analysis", "Link inspection", "Sender verification", "Pattern recognition"]
	// }
];

export default function GamesPage() {
	return (
		<div className="min-h-screen w-full">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
				<div className="text-center mb-8 sm:mb-12 lg:mb-16">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
						<span className="text-gray-800">
							Interactive Games
						</span>
					</h1>
					<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Test your scam detection skills through fun, interactive games designed to improve your awareness and protect you from fraud.
					</p>
				</div>

				{/* Games Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
					{games.map((game) => (
						<Link
							key={game.id}
							href={game.href}
							className="group bg-sage-100/80 backdrop-blur-sm hover:bg-sage-100/90 border border-sage-300 hover:border-primary-500 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
						>
							<div className="mb-4">
								<div className="flex items-center justify-between mb-3">
									<span className={`px-3 py-1 rounded-full text-xs font-medium ${
										game.difficulty === 'easy' ? 'bg-secondary-100 text-secondary-700 border border-secondary-300' :
										game.difficulty === 'medium' ? 'bg-primary-100 text-primary-700 border border-primary-300' :
										'bg-accent-100 text-accent-700 border border-accent-300'
									}`}>
										{game.difficulty}
									</span>
									<span className="text-gray-600 text-sm">{game.duration}</span>
								</div>
								<div className="text-4xl mb-3">{game.icon}</div>
								<h3 className="text-xl font-bold text-text mb-3 group-hover:text-blue-600 transition-colors duration-300">
									{game.title}
								</h3>
								<p className="text-gray-700 mb-4 leading-relaxed">
									{game.description}
								</p>
							</div>

							<div className="space-y-2">
								<h4 className="text-sm font-semibold text-blue-600 mb-2">Features:</h4>
								<ul className="space-y-1">
									{game.features.map((feature, index) => (
										<li key={index} className="text-xs text-gray-600 flex items-start">
											<span className="text-blue-500 mr-2">•</span>
											{feature}
										</li>
									))}
								</ul>
							</div>

							<div className="mt-4 pt-4 border-t border-sage-300">
								<div className="text-sm text-blue-600 font-medium group-hover:text-blue-500 transition-colors duration-300">
									Play Game →
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* Coming Soon Section */}
				<div className="text-center">
					<h2 className="text-2xl font-bold text-text mb-4">More Games Coming Soon!</h2>
					<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
						We're working on more interactive games to help you learn about different types of scams and fraud. 
						Stay tuned for phishing email detection, phone call scams, and more!
					</p>
					<div className="bg-sage-100/60 backdrop-blur-sm border border-sage-300 rounded-xl p-6 max-w-md mx-auto">
						<div className="text-2xl mb-2">🚧</div>
						<p className="text-gray-700 text-sm">
							Have ideas for new games? We'd love to hear your suggestions!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}