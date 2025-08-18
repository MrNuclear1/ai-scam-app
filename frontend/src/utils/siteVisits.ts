export interface SiteStats {
	totalVisits: number;
	uniqueVisits: number;
	lastVisit: string;
}

const SITE_STATS_KEY = 'scamguard-site-stats';
const VISITOR_KEY = 'scamguard-visitor-id';

export function incrementSiteVisit(): SiteStats {
	if (typeof window === 'undefined') {
		return { totalVisits: 0, uniqueVisits: 0, lastVisit: new Date().toISOString() };
	}

	let stats: SiteStats = {
		totalVisits: 0,
		uniqueVisits: 0,
		lastVisit: new Date().toISOString()
	};

	// Get existing stats
	const existingStats = localStorage.getItem(SITE_STATS_KEY);
	if (existingStats) {
		try {
			stats = JSON.parse(existingStats);
		} catch (e) {
			console.warn('Failed to parse site stats:', e);
		}
	}

	// Check if this is a unique visitor
	const existingVisitorId = localStorage.getItem(VISITOR_KEY);
	if (!existingVisitorId) {
		// New visitor
		const visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
		localStorage.setItem(VISITOR_KEY, visitorId);
		stats.uniqueVisits += 1;
	}

	// Increment total visits
	stats.totalVisits += 1;
	stats.lastVisit = new Date().toISOString();

	// Save updated stats
	localStorage.setItem(SITE_STATS_KEY, JSON.stringify(stats));

	return stats;
}

export function getSiteStats(): SiteStats {
	if (typeof window === 'undefined') {
		return { totalVisits: 0, uniqueVisits: 0, lastVisit: new Date().toISOString() };
	}

	const existingStats = localStorage.getItem(SITE_STATS_KEY);
	if (existingStats) {
		try {
			return JSON.parse(existingStats);
		} catch (e) {
			console.warn('Failed to parse site stats:', e);
		}
	}

	return { totalVisits: 0, uniqueVisits: 0, lastVisit: new Date().toISOString() };
}

// Mock review data
const mockReviews = [
	{ id: '1', name: 'Sarah M.', stars: 5, description: 'Amazing platform! Helped me spot a crypto scam attempt.', date: '2024-01-15' },
	{ id: '2', name: 'Mike K.', stars: 5, description: 'The AI simulations are incredibly realistic and educational.', date: '2024-01-14' },
	{ id: '3', name: 'Jessica L.', stars: 4, description: 'Great lessons, very interactive and engaging.', date: '2024-01-13' },
	{ id: '4', name: 'David R.', stars: 5, description: 'Saved me from falling for a tech support scam!', date: '2024-01-12' },
	{ id: '5', name: 'Emma T.', stars: 5, description: 'Story mode is addictive and really teaches you red flags.', date: '2024-01-11' }
];

export function getFiveStarReviewsCount(): number {
	return mockReviews.filter(review => review.stars === 5).length;
}

export function getRecentReviews(count: number = 3) {
	return mockReviews.slice(0, count);
}
