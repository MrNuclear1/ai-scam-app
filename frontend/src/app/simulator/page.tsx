"use client";
import Link from "next/link";
import { personas, type PersonaId } from "@/data/personas";

export default function SimulatorPage() {
	return (
		<div className="min-h-screen w-full">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
				<div className="text-center mb-12">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-4 bg-gradient-to-r from-secondary-500 via-accent-500 to-primary-500 bg-clip-text text-transparent">
						Scam Simulator
					</h1>
					<p className="text-xl text-primary-300 max-w-2xl mx-auto leading-relaxed">
						Practice identifying and resisting common scam tactics in a safe environment. Choose a scam type and chat with an AI to test your awareness.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{Object.entries(personas).map(([personaId, persona]) => (
						<Link
							key={personaId}
							href={`/sim/${personaId}`}
							className="group bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-primary-200 hover:border-secondary-500 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 shadow-sm"
						>
							<div className="mb-4">
								<div className="flex items-center justify-between mb-3">
									<span className={`px-3 py-1 rounded-full text-xs font-medium ${
										persona.difficulty === 'easy' ? 'bg-green-900 text-green-300' :
										persona.difficulty === 'medium' ? 'bg-yellow-900 text-yellow-300' :
										'bg-red-900 text-red-300'
									}`}>
										{persona.difficulty}
									</span>
										<span className="text-primary-400 text-sm">{persona.category}</span>
								</div>
								<h3 className="text-xl font-bold text-text mb-3 group-hover:text-secondary-500 transition-colors duration-300">
									{persona.title}
								</h3>
								<p className="text-primary-400 mb-4">
									{persona.description}
								</p>
							</div>

							<div className="space-y-3">
								<h4 className="text-sm font-semibold text-primary-300">Red Flags to Watch:</h4>
								<ul className="space-y-1">
									{persona.tips.slice(0, 2).map((tip, index) => (
										<li key={index} className="text-xs text-primary-400 flex items-start">
											<span className="text-secondary-500 mr-2">•</span>
											{tip}
										</li>
									))}
									{persona.tips.length > 2 && (
										<li className="text-xs text-[#94A3B8]">
											<span className="text-secondary-500 mr-2">•</span>
											+{persona.tips.length - 2} more tips inside
										</li>
									)}
								</ul>
							</div>

							<div className="mt-6 pt-4 border-t border-[#374151]">
								<span className="text-sm text-[#3BA4F7] font-medium group-hover:text-[#20C997] transition-colors duration-300">
									Start Simulation →
								</span>
							</div>
						</Link>
					))}
				</div>

				{/* Instructions */}
				<div className="bg-[#1E293B]/30 backdrop-blur-sm rounded-xl p-6 mb-8">
					<h2 className="text-2xl font-bold text-[#E8EEF6] mb-4">How It Works</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="text-center">
							<div className="text-3xl mb-3">🎯</div>
							<h3 className="text-lg font-semibold text-[#E8EEF6] mb-2">Choose a Scenario</h3>
							<p className="text-[#94A3B8]">Select a scam type you want to practice with</p>
						</div>
						<div className="text-center">
							<div className="text-3xl mb-3">💬</div>
							<h3 className="text-lg font-semibold text-[#E8EEF6] mb-2">Chat with AI</h3>
							<p className="text-[#94A3B8]">Engage with an AI scammer in a safe environment</p>
						</div>
						<div className="text-center">
							<div className="text-3xl mb-3">📊</div>
							<h3 className="text-lg font-semibold text-[#E8EEF6] mb-2">Get Scored</h3>
							<p className="text-[#94A3B8]">Receive feedback on your scam resistance skills</p>
						</div>
					</div>
				</div>

				{/* Back to Home */}
				<div className="text-center">
					<Link
						href="/"
						className="inline-flex items-center text-[#3BA4F7] hover:text-[#20C997] font-medium transition-colors duration-200"
					>
						← Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
