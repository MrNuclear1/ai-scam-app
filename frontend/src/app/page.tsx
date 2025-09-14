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
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
					Scamproof
				</h1>
				<p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
					AI-Powered Scam Awareness Training Platform
				</p>
				<p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
					Learn to identify and resist scam attempts through interactive simulations, educational lessons, and real-world scenarios.
				</p>
				{/* Latest 5-star reviews banner */}
				{globalTestimonials.length > 0 && (
						<div className="mb-12 bg-primary-100/60 border border-accent-300/30 rounded-xl px-4 py-3">
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
							{globalTestimonials.slice(0, 3).map((t) => (
								<div key={t.id} className="flex items-center gap-2 max-w-[320px]">
									<span aria-hidden className="text-yellow-400">★★★★★</span>
										<span className="text-sm text-gray-600 italic truncate" title={t.message}>
											"{t.message}"
										</span>
										<span className="text-xs text-gray-500 whitespace-nowrap">– {t.firstName}</span>
								</div>
							))}
						</div>
					</div>
				)}
				
				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
						<Link href="/lessons" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
						Start Learning
					</Link>
						<Link href="/simulator" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
						Practice with AI
					</Link>
						<Link href="/reviews" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
						Leave a Review
					</Link>
				</div>
			</div>

			{/* Features Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					<Link href="/lessons" className="block bg-sage-100/80 backdrop-blur-sm p-6 rounded-xl border border-sage-300 hover:border-primary-500 transition-colors duration-300 shadow-sm hover:shadow-md">
						<div className="text-secondary-500 text-3xl mb-4">🎯</div>
							<h3 className="text-xl font-semibold text-text mb-3 hover:text-blue-600 transition-colors duration-300">Interactive Lessons</h3>
							<p className="text-gray-600">Learn to spot red flags through engaging, interactive content designed by cybersecurity experts.</p>
					</Link>
				
					<Link href="/simulator" className="block bg-sage-100/80 backdrop-blur-sm p-6 rounded-xl border border-sage-300 hover:border-primary-500 transition-colors duration-300 shadow-sm hover:shadow-md">
						<div className="text-secondary-500 text-3xl mb-4">🤖</div>
							<h3 className="text-xl font-semibold text-text mb-3 hover:text-blue-600 transition-colors duration-300">ChatGPT-Powered Scammers</h3>
							<p className="text-gray-600">Chat with 9 realistic AI scammer personas powered by ChatGPT. Each uses authentic tactics to help you practice spotting real scams.</p>
					</Link>
				
					<Link href="/games" className="block bg-sage-100/80 backdrop-blur-sm p-6 rounded-xl border border-sage-300 hover:border-primary-500 transition-colors duration-300 shadow-sm hover:shadow-md">
						<div className="text-accent-500 text-3xl mb-4">🏆</div>
							<h3 className="text-xl font-semibold text-text mb-3 hover:text-blue-600 transition-colors duration-300">Games</h3>
							<p className="text-gray-600">Interactive games that test your scam detection skills with scoring and badges.</p>
					</Link>
			</div>

			{/* Stats Section */}
			<div className="text-center mb-16">
				<h2 className="text-3xl font-bold text-text mb-8">Platform Stats</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
					<div className="bg-sage-100/60 backdrop-blur-sm p-6 rounded-xl border border-sage-300 shadow-sm">
							<div className="text-3xl font-bold text-blue-600 mb-2">{siteStats.totalVisits.toLocaleString()}</div>
							<div className="text-gray-700">Total Visits</div>
					</div>
					<div className="bg-sage-100/60 backdrop-blur-sm p-6 rounded-xl border border-sage-300 shadow-sm">
							<div className="text-3xl font-bold text-blue-600 mb-2">{fiveStarCount}</div>
							<div className="text-gray-700">5-Star Reviews</div>
					</div>
					<div className="bg-sage-100/60 backdrop-blur-sm p-6 rounded-xl border border-sage-300 shadow-sm">
							<div className="text-3xl font-bold text-blue-600 mb-2">9</div>
							<div className="text-gray-700">AI Scam Simulators</div>
					</div>
				</div>
			</div>

			{/* Global 5-Star Testimonials */}
			<div className="text-center mb-16">
				<h2 className="text-3xl font-bold text-text mb-4">⭐ 5-Star Testimonials ⭐</h2>
				<p className="text-gray-500 mb-8">Real feedback from users who found our platform valuable</p>
				
				{isLoading ? (
					<div className="text-center py-8">
							<div className="text-gray-500 mb-4">Loading testimonials...</div>
						<div className="animate-spin mx-auto w-8 h-8 border-2 border-secondary-500 border-t-transparent rounded-full"></div>
					</div>
				) : globalTestimonials.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{globalTestimonials.map((testimonial) => (
							<div key={testimonial.id} className="bg-gradient-to-br from-sage-100/90 to-sage-200/50 backdrop-blur-sm p-6 rounded-xl border border-primary-400/20 hover:border-primary-500/40 transition-all duration-300 shadow-sm">
								<div className="flex justify-center mb-4">
									{[...Array(5)].map((_, i) => (
												<span key={i} className="text-xl text-yellow-500">⭐</span>
									))}
								</div>
										<p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{testimonial.message}"</p>
								<div className="text-text font-semibold text-sm">
									- {testimonial.firstName} {testimonial.lastName}
								</div>
										<div className="text-gray-500 text-xs mt-1">
									{new Date(testimonial.date).toLocaleDateString()}
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="text-center py-8">
							<p className="text-gray-500 mb-4">Be the first to leave a 5-star review!</p>
						<Link href="/reviews" className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
							Share Your Experience
						</Link>
					</div>
				)}
			</div>

			{/* Navigation Links */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<Link href="/lessons" className="group bg-sage-100/80 hover:bg-sage-100/90 p-6 rounded-xl border border-sage-300 hover:border-primary-500 transition-all duration-300 shadow-sm">
							<div className="text-blue-600 text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">📚</div>
							<h3 className="text-lg font-semibold text-text mb-2">Lessons</h3>
							<p className="text-gray-700 text-sm">Interactive scam awareness training</p>
				</Link>

					<Link href="/simulator" className="group bg-sage-100/80 hover:bg-sage-100/90 p-6 rounded-xl border border-sage-300 hover:border-primary-500 transition-all duration-300 shadow-sm">
							<div className="text-blue-600 text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🎮</div>
							<h3 className="text-lg font-semibold text-text mb-2">Simulator</h3>
							<p className="text-gray-700 text-sm">Practice with AI scammers</p>
				</Link>

					<Link href="/link-recognition" className="group bg-sage-100/80 hover:bg-sage-100/90 p-6 rounded-xl border border-sage-300 hover:border-primary-500 transition-all duration-300 shadow-sm">
							<div className="text-blue-600 text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🚩</div>
							<h3 className="text-lg font-semibold text-text mb-2">Link Recognition</h3>
							<p className="text-gray-700 text-sm">Identify suspicious links</p>
				</Link>

					<Link href="/games" className="group bg-sage-100/80 hover:bg-sage-100/90 p-6 rounded-xl border border-sage-300 hover:border-primary-500 transition-all duration-300 shadow-sm">
							<div className="text-blue-600 text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">🏆</div>
							<h3 className="text-lg font-semibold text-text mb-2">Games</h3>
							<p className="text-gray-700 text-sm">Interactive games</p>
				</Link>
			</div>
		</div>
	);
}
