export interface SiteStats {
	totalVisits: number;
	uniqueVisits: number;
	lastVisit: string;
}

const SITE_STATS_KEY = 'scamguard-site-stats';
const VISITOR_KEY = 'scamguard-visitor-id';
const COUNT_API_BASES = [
	'https://api.countapi.xyz',
	'https://api.countapi.dev',
];
const GLOBAL_NAMESPACE = 'scamproof';
const GLOBAL_TOTAL_VISITS_KEY = 'total_visits';

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

	// Best-effort: increment global total visits counter
	try {
		for (const base of COUNT_API_BASES) {
			fetch(`${base}/hit/${encodeURIComponent(GLOBAL_NAMESPACE)}/${encodeURIComponent(GLOBAL_TOTAL_VISITS_KEY)}`).catch(() => {});
		}
	} catch (_) {}

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

export async function getGlobalTotalVisits(): Promise<number | null> {
	for (const base of COUNT_API_BASES) {
		try {
			const res = await fetch(`${base}/get/${encodeURIComponent(GLOBAL_NAMESPACE)}/${encodeURIComponent(GLOBAL_TOTAL_VISITS_KEY)}`);
			if (!res.ok) continue;
			const data = await res.json();
			if (typeof data.value === 'number') return data.value;
		} catch (_) { /* try next */ }
	}
	return null;
}

// The reviews utilities now live in '@/utils/reviews'
