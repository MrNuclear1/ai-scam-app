"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSiteStats, incrementSiteVisit, getFiveStarReviewsCount, getRecentReviews, SiteStats } from "@/utils/siteVisits";

interface Review {
	id: string;
	name: string;
	stars: number;
	description: string;
	date: string;
}

export default function HomePage() {
	const [siteStats, setSiteStats] = useState<SiteStats>({
		totalVisits: 0,
		uniqueVisits: 0,
		lastVisit: new Date().toISOString()
	});
	const [fiveStarCount, setFiveStarCount] = useState(0);
	const [recentReviews, setRecentReviews] = useState<Review[]>([]);

	useEffect(() => {
		const stats = incrementSiteVisit();
		setSiteStats(stats);
		setFiveStarCount(getFiveStarReviewsCount());
		setRecentReviews(getRecentReviews(2));
	}, []);

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
			{/* Hero Section */}
			<div className="text-center mb-16">
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E8EEF6] mb-6 leading-tight">
					<span className="bg-gradient-to-r from-[#20C997] via-[#3BA4F7] to-[#7C5CFC] bg-clip-text text-transparent">
						Scamproof
					</span>
				</h1>
				<p className="text-xl sm:text-2xl text-[#CBD5E1] mb-8 max-w-4xl mx-auto leading-relaxed">
					AI-Powered Scam Awareness Training Platform
				</p>
				<p className="text-lg text-[#94A3B8] mb-12 max-w-3xl mx-auto">
					Learn to identify and resist scam attempts through interactive simulations, educational lessons, and real-world scenarios.
				</p>
				
				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
					<Link href="/lessons" className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
						Start Learning
					</Link>
					<Link href="/simulator" className="bg-gradient-to-r from-[#7C5CFC] to-[#FF6B6B] hover:from-[#6D4CFC] hover:to-[#FF5A5A] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
						Practice with AI
					</Link>
				</div>
			</div>

			{/* Features Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
				<div className="bg-[#1E293B]/50 backdrop-blur-sm p-6 rounded-xl border border-[#334155] hover:border-[#3BA4F7] transition-colors duration-300">
					<div className="text-[#20C997] text-3xl mb-4">🎯</div>
					<h3 className="text-xl font-semibold text-[#E8EEF6] mb-3">Interactive Lessons</h3>
					<p className="text-[#94A3B8]">Learn to spot red flags through engaging, interactive content designed by cybersecurity experts.</p>
				</div>
				
				<div className="bg-[#1E293B]/50 backdrop-blur-sm p-6 rounded-xl border border-[#334155] hover:border-[#7C5CFC] transition-colors duration-300">
					<div className="text-[#3BA4F7] text-3xl mb-4">🤖</div>
					<h3 className="text-xl font-semibold text-[#E8EEF6] mb-3">ChatGPT-Powered Scammers</h3>
					<p className="text-[#94A3B8]">Chat with 9 realistic AI scammer personas powered by ChatGPT. Each uses authentic tactics to help you practice spotting real scams.</p>
				</div>
				
				<div className="bg-[#1E293B]/50 backdrop-blur-sm p-6 rounded-xl border border-[#334155] hover:border-[#FF6B6B] transition-colors duration-300">
					<div className="text-[#7C5CFC] text-3xl mb-4">🏆</div>
					<h3 className="text-xl font-semibold text-[#E8EEF6] mb-3">Story Mode</h3>
					<p className="text-[#94A3B8]">Immersive scenarios that test your scam detection skills with scoring and badges.</p>
				</div>
			</div>

			{/* Stats Section */}
			<div className="text-center mb-16">
				<h2 className="text-3xl font-bold text-[#E8EEF6] mb-8">Platform Stats</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
					<div className="bg-[#1E293B]/30 backdrop-blur-sm p-6 rounded-xl">
						<div className="text-3xl font-bold text-[#20C997] mb-2">{siteStats.totalVisits.toLocaleString()}</div>
						<div className="text-[#94A3B8]">Total Visits</div>
					</div>
					<div className="bg-[#1E293B]/30 backdrop-blur-sm p-6 rounded-xl">
						<div className="text-3xl font-bold text-[#3BA4F7] mb-2">{fiveStarCount}</div>
						<div className="text-[#94A3B8]">5-Star Reviews</div>
					</div>
					<div className="bg-[#1E293B]/30 backdrop-blur-sm p-6 rounded-xl">
						<div className="text-3xl font-bold text-[#7C5CFC] mb-2">9</div>
						<div className="text-[#94A3B8]">AI Scam Simulators</div>
					</div>
				</div>
			</div>

			{/* Recent Reviews */}
			{recentReviews.length > 0 && (
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-[#E8EEF6] mb-8">What Users Say</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{recentReviews.map((review) => (
							<div key={review.id} className="bg-[#1E293B]/30 backdrop-blur-sm p-6 rounded-xl">
								<div className="flex justify-center mb-4">
									{[...Array(5)].map((_, i) => (
										<span key={i} className={`text-xl ${i < review.stars ? 'text-yellow-400' : 'text-gray-600'}`}>⭐</span>
									))}
								</div>
								<p className="text-[#94A3B8] mb-4 italic">"{review.description}"</p>
								<div className="text-[#E8EEF6] font-semibold">- {review.name}</div>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Navigation Links */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<Link href="/lessons" className="group bg-[#1E293B]/50 hover:bg-[#1E293B]/70 p-6 rounded-xl border border-[#334155] hover:border-[#20C997] transition-all duration-300">
					<div className="text-[#20C997] text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">📚</div>
					<h3 className="text-lg font-semibold text-[#E8EEF6] mb-2">Lessons</h3>
					<p className="text-[#94A3B8] text-sm">Interactive scam awareness training</p>
				</Link>

				<Link href="/simulator" className="group bg-[#1E293B]/50 hover:bg-[#1E293B]/70 p-6 rounded-xl border border-[#334155] hover:border-[#3BA4F7] transition-all duration-300">
					<div className="text-[#3BA4F7] text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🎮</div>
					<h3 className="text-lg font-semibold text-[#E8EEF6] mb-2">Simulator</h3>
					<p className="text-[#94A3B8] text-sm">Practice with AI scammers</p>
				</Link>

				<Link href="/red-flags" className="group bg-[#1E293B]/50 hover:bg-[#1E293B]/70 p-6 rounded-xl border border-[#334155] hover:border-[#7C5CFC] transition-all duration-300">
					<div className="text-[#7C5CFC] text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🚩</div>
					<h3 className="text-lg font-semibold text-[#E8EEF6] mb-2">Red Flags</h3>
					<p className="text-[#94A3B8] text-sm">Learn warning signs</p>
				</Link>

				<Link href="/story-mode" className="group bg-[#1E293B]/50 hover:bg-[#1E293B]/70 p-6 rounded-xl border border-[#334155] hover:border-[#FF6B6B] transition-all duration-300">
					<div className="text-[#FF6B6B] text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">📖</div>
					<h3 className="text-lg font-semibold text-[#E8EEF6] mb-2">Story Mode</h3>
					<p className="text-[#94A3B8] text-sm">Immersive scenarios</p>
				</Link>
			</div>
		</div>
	);
}
