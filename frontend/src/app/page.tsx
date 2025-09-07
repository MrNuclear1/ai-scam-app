"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSiteStats, incrementSiteVisit, SiteStats } from "@/utils/siteVisits";
import { getLocalFiveStarReviewsCount, getRecentReviews as getRecentUserReviews, getGlobalFiveStarReviewsCount, getGlobalFiveStarReviewsForDisplay, GlobalFiveStarReview, syncGlobalFiveStarReviews, getGlobalFiveStarReviewsCountFromAPI } from "@/utils/reviews";
import ChatGPTBox from "@/components/ChatGPTBox";

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
	const [globalTestimonials, setGlobalTestimonials] = useState<GlobalFiveStarReview[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	// Function to sync and update testimonials
	const syncAndUpdateTestimonials = async () => {
		try {
			// Sync 5-star reviews from global storage
			const hasNewData = await syncGlobalFiveStarReviews();
			
			if (hasNewData) {
				// Update state with fresh synced data
				const refreshedTestimonials = getGlobalFiveStarReviewsForDisplay(3);
				setGlobalTestimonials(refreshedTestimonials);
				console.log('Updated testimonials with new data');
			}
			
			// Update global count from API
			const globalFive = await getGlobalFiveStarReviewsCountFromAPI();
			if (globalFive !== null) {
				setFiveStarCount(globalFive);
			} else {
				// Fallback to local count if API fails
				setFiveStarCount(getLocalFiveStarReviewsCount());
			}
		} catch (error) {
			console.error('Error syncing global data:', error);
			// Keep local data if sync fails
			setGlobalTestimonials(getGlobalFiveStarReviewsForDisplay(3));
			setFiveStarCount(getLocalFiveStarReviewsCount());
		}
	};

	useEffect(() => {
		const stats = incrementSiteVisit();
		setSiteStats(stats);
		
		// Load initial local data immediately
		setGlobalTestimonials(getGlobalFiveStarReviewsForDisplay(3));
		setFiveStarCount(getLocalFiveStarReviewsCount());
		
		// Initial sync and setup periodic syncing
		(async () => {
			await syncAndUpdateTestimonials();
			setIsLoading(false);
		})();

		// Set up periodic syncing every 30 seconds to catch new reviews from other users
		const syncInterval = setInterval(async () => {
			await syncAndUpdateTestimonials();
		}, 30000); // 30 seconds

		// Cleanup interval on unmount
		return () => {
			clearInterval(syncInterval);
		};
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
				{/* Latest 5-star reviews banner */}
				{globalTestimonials.length > 0 && (
					<div className="mb-12 bg-[#1E293B]/60 border border-yellow-400/30 rounded-xl px-4 py-3">
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
							{globalTestimonials.slice(0, 3).map((t) => (
								<div key={t.id} className="flex items-center gap-2 max-w-[320px]">
									<span aria-hidden className="text-yellow-400">★★★★★</span>
									<span className="text-sm text-[#CBD5E1] italic truncate" title={t.message}>
										"{t.message}"
									</span>
									<span className="text-xs text-[#94A3B8] whitespace-nowrap">– {t.firstName}</span>
								</div>
							))}
						</div>
					</div>
				)}
				
				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
					<Link href="/lessons" className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
						Start Learning
					</Link>
					<Link href="/simulator" className="bg-gradient-to-r from-[#7C5CFC] to-[#FF6B6B] hover:from-[#6D4CFC] hover:to-[#FF5A5A] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
						Practice with AI
					</Link>
					<Link href="/reviews" className="bg-gradient-to-r from-[#FFA500] to-[#FF6B6B] hover:from-[#FF8C00] hover:to-[#FF5A5A] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
						Leave a Review
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

			{/* Global 5-Star Testimonials */}
			<div className="text-center mb-16">
				<h2 className="text-3xl font-bold text-[#E8EEF6] mb-4">⭐ 5-Star Testimonials ⭐</h2>
				<p className="text-[#94A3B8] mb-8">Real feedback from users who found our platform valuable</p>
				
				{isLoading ? (
					<div className="text-center py-8">
						<div className="text-[#94A3B8] mb-4">Loading testimonials...</div>
						<div className="animate-spin mx-auto w-8 h-8 border-2 border-[#3BA4F7] border-t-transparent rounded-full"></div>
					</div>
				) : globalTestimonials.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{globalTestimonials.map((testimonial) => (
							<div key={testimonial.id} className="bg-gradient-to-br from-[#1E293B]/50 to-[#0F172A]/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
								<div className="flex justify-center mb-4">
									{[...Array(5)].map((_, i) => (
										<span key={i} className="text-xl text-yellow-400">⭐</span>
									))}
								</div>
								<p className="text-[#CBD5E1] mb-4 italic text-sm leading-relaxed">"{testimonial.message}"</p>
								<div className="text-[#E8EEF6] font-semibold text-sm">
									- {testimonial.firstName} {testimonial.lastName}
								</div>
								<div className="text-[#94A3B8] text-xs mt-1">
									{new Date(testimonial.date).toLocaleDateString()}
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="text-center py-8">
						<p className="text-[#94A3B8] mb-4">Be the first to leave a 5-star review!</p>
						<Link href="/reviews" className="bg-gradient-to-r from-[#FFA500] to-[#FF6B6B] hover:from-[#FF8C00] hover:to-[#FF5A5A] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
							Share Your Experience
						</Link>
					</div>
				)}
			</div>

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

				<Link href="/ai-test" className="group bg-[#1E293B]/50 hover:bg-[#1E293B]/70 p-6 rounded-xl border border-[#334155] hover:border-[#FFA500] transition-all duration-300">
					<div className="text-[#FFA500] text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🧪</div>
					<h3 className="text-lg font-semibold text-[#E8EEF6] mb-2">AI Test</h3>
					<p className="text-[#94A3B8] text-sm">Test OpenAI integration</p>
				</Link>
			</div>

			{/* ChatGPT Test Section */}
			<div className="mt-16">
				<div className="text-center mb-8">
					<h2 className="text-3xl font-bold text-[#E8EEF6] mb-4">🤖 ChatGPT API Test</h2>
					<p className="text-[#94A3B8] max-w-2xl mx-auto">
						Test our OpenAI integration with this interactive chatbox. The backend API key is already configured and ready to use.
					</p>
				</div>
				<ChatGPTBox />
			</div>
		</div>
	);
}
