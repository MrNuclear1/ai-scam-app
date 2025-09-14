"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getSiteStats, incrementSiteVisit, SiteStats } from "@/utils/siteVisits";
import { getLocalFiveStarReviewsCount, getRecentReviews as getRecentUserReviews, getGlobalFiveStarReviewsCount, getGlobalFiveStarReviewsForDisplay, GlobalFiveStarReview, syncGlobalFiveStarReviews, getGlobalFiveStarReviewsCountFromAPI } from "@/utils/reviews";

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
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-6 leading-tight">
					<span className="bg-gradient-to-r from-secondary-500 via-accent-500 to-primary-500 bg-clip-text text-transparent">
						Scamproof
					</span>
				</h1>
				<p className="text-xl sm:text-2xl text-primary-300 mb-8 max-w-4xl mx-auto leading-relaxed">
					AI-Powered Scam Awareness Training Platform
				</p>
				<p className="text-lg text-primary-400 mb-12 max-w-3xl mx-auto">
					Learn to identify and resist scam attempts through interactive simulations, educational lessons, and real-world scenarios.
				</p>
				{/* Latest 5-star reviews banner */}
				{globalTestimonials.length > 0 && (
						<div className="mb-12 bg-primary-100/60 border border-accent-300/30 rounded-xl px-4 py-3">
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
							{globalTestimonials.slice(0, 3).map((t) => (
								<div key={t.id} className="flex items-center gap-2 max-w-[320px]">
									<span aria-hidden className="text-yellow-400">★★★★★</span>
										<span className="text-sm text-primary-300 italic truncate" title={t.message}>
										"{t.message}"
									</span>
										<span className="text-xs text-primary-400 whitespace-nowrap">– {t.firstName}</span>
								</div>
							))}
						</div>
					</div>
				)}
				
				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
						<Link href="/lessons" className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
						Start Learning
					</Link>
						<Link href="/simulator" className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
						Practice with AI
					</Link>
						<Link href="/reviews" className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
						Leave a Review
					</Link>
				</div>
			</div>

			{/* Features Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					<div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-primary-200 hover:border-secondary-500 transition-colors duration-300 shadow-sm">
						<div className="text-secondary-500 text-3xl mb-4">🎯</div>
						<h3 className="text-xl font-semibold text-text mb-3">Interactive Lessons</h3>
						<p className="text-primary-400">Learn to spot red flags through engaging, interactive content designed by cybersecurity experts.</p>
				</div>
				
					<div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-primary-200 hover:border-accent-500 transition-colors duration-300 shadow-sm">
						<div className="text-secondary-500 text-3xl mb-4">🤖</div>
						<h3 className="text-xl font-semibold text-text mb-3">ChatGPT-Powered Scammers</h3>
						<p className="text-primary-400">Chat with 9 realistic AI scammer personas powered by ChatGPT. Each uses authentic tactics to help you practice spotting real scams.</p>
				</div>
				
					<div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-primary-200 hover:border-accent-500 transition-colors duration-300 shadow-sm">
						<div className="text-accent-500 text-3xl mb-4">🏆</div>
						<h3 className="text-xl font-semibold text-text mb-3">Story Mode</h3>
						<p className="text-primary-400">Immersive scenarios that test your scam detection skills with scoring and badges.</p>
				</div>
			</div>

			{/* Stats Section */}
			<div className="text-center mb-16">
				<h2 className="text-3xl font-bold text-text mb-8">Platform Stats</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
					<div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-primary-200 shadow-sm">
						<div className="text-3xl font-bold text-secondary-500 mb-2">{siteStats.totalVisits.toLocaleString()}</div>
						<div className="text-primary-400">Total Visits</div>
					</div>
					<div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-primary-200 shadow-sm">
						<div className="text-3xl font-bold text-secondary-500 mb-2">{fiveStarCount}</div>
						<div className="text-primary-400">5-Star Reviews</div>
					</div>
					<div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-primary-200 shadow-sm">
						<div className="text-3xl font-bold text-accent-500 mb-2">9</div>
						<div className="text-primary-400">AI Scam Simulators</div>
					</div>
				</div>
			</div>

			{/* Global 5-Star Testimonials */}
			<div className="text-center mb-16">
				<h2 className="text-3xl font-bold text-text mb-4">⭐ 5-Star Testimonials ⭐</h2>
				<p className="text-primary-400 mb-8">Real feedback from users who found our platform valuable</p>
				
				{isLoading ? (
					<div className="text-center py-8">
						<div className="text-primary-400 mb-4">Loading testimonials...</div>
						<div className="animate-spin mx-auto w-8 h-8 border-2 border-secondary-500 border-t-transparent rounded-full"></div>
					</div>
				) : globalTestimonials.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{globalTestimonials.map((testimonial) => (
							<div key={testimonial.id} className="bg-gradient-to-br from-white/80 to-primary-50 backdrop-blur-sm p-6 rounded-xl border border-accent-300/20 hover:border-accent-400/40 transition-all duration-300 shadow-sm">
								<div className="flex justify-center mb-4">
									{[...Array(5)].map((_, i) => (
										<span key={i} className="text-xl text-accent-500">⭐</span>
									))}
								</div>
								<p className="text-primary-300 mb-4 italic text-sm leading-relaxed">"{testimonial.message}"</p>
								<div className="text-text font-semibold text-sm">
									- {testimonial.firstName} {testimonial.lastName}
								</div>
								<div className="text-primary-400 text-xs mt-1">
									{new Date(testimonial.date).toLocaleDateString()}
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="text-center py-8">
						<p className="text-primary-400 mb-4">Be the first to leave a 5-star review!</p>
						<Link href="/reviews" className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
							Share Your Experience
						</Link>
					</div>
				)}
			</div>

			{/* Navigation Links */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<Link href="/lessons" className="group bg-white/80 hover:bg-white/90 p-6 rounded-xl border border-primary-200 hover:border-secondary-500 transition-all duration-300 shadow-sm">
						<div className="text-secondary-500 text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">📚</div>
						<h3 className="text-lg font-semibold text-text mb-2">Lessons</h3>
						<p className="text-primary-400 text-sm">Interactive scam awareness training</p>
				</Link>

					<Link href="/simulator" className="group bg-white/80 hover:bg-white/90 p-6 rounded-xl border border-primary-200 hover:border-secondary-500 transition-all duration-300 shadow-sm">
						<div className="text-secondary-500 text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🎮</div>
						<h3 className="text-lg font-semibold text-text mb-2">Simulator</h3>
						<p className="text-primary-400 text-sm">Practice with AI scammers</p>
				</Link>

					<Link href="/red-flags" className="group bg-white/80 hover:bg-white/90 p-6 rounded-xl border border-primary-200 hover:border-accent-500 transition-all duration-300 shadow-sm">
						<div className="text-accent-500 text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🚩</div>
						<h3 className="text-lg font-semibold text-text mb-2">Red Flags</h3>
						<p className="text-primary-400 text-sm">Learn warning signs</p>
				</Link>

					<Link href="/story-mode" className="group bg-white/80 hover:bg-white/90 p-6 rounded-xl border border-primary-200 hover:border-accent-500 transition-all duration-300 shadow-sm">
						<div className="text-accent-500 text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">📖</div>
						<h3 className="text-lg font-semibold text-text mb-2">Story Mode</h3>
						<p className="text-primary-400 text-sm">Immersive scenarios</p>
				</Link>
			</div>
		</div>
	);
}
