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

// GitHub Gist integration for syncing with review data
const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';
const GIST_ID = process.env.NEXT_PUBLIC_STORAGE_GIST_ID || '';

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
		// Sync with GitHub Gist
		getGlobalTotalVisits().then(globalTotal => {
			if (typeof globalTotal === 'number') {
				updateGlobalSiteVisits(globalTotal + 1).catch(console.error);
			} else {
				updateGlobalSiteVisits(stats.totalVisits).catch(console.error);
			}
		}).catch(console.error);

		// Also hit countapi as backup
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
	// First try to get from GitHub Gist (more reliable)
	if (GIST_ID) {
		try {
			const response = await fetch(`${GITHUB_API_BASE}/gists/${GIST_ID}`);
			if (response.ok) {
				const gist = await response.json();
				const content = gist.files?.['global-data.json']?.content;
				if (content) {
					const data = JSON.parse(content);
					if (typeof data.totalSiteVisits === 'number') {
						return data.totalSiteVisits;
					}
				}
			}
		} catch (error) {
			console.error('Error fetching global visits from Gist:', error);
		}
	}

	// Fallback to countapi
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

// Update global site visits in GitHub Gist
async function updateGlobalSiteVisits(newTotal: number): Promise<void> {
	if (!GIST_ID || !GITHUB_TOKEN) return;

	try {
		// Get current data
		const response = await fetch(`${GITHUB_API_BASE}/gists/${GIST_ID}`);
		let globalData: any = {
			fiveStarReviews: [],
			totalSiteVisits: 0,
			lastUpdated: new Date().toISOString()
		};

		if (response.ok) {
			const gist = await response.json();
			const content = gist.files?.['global-data.json']?.content;
			if (content) {
				globalData = JSON.parse(content);
			}
		}

		// Update site visits
		globalData.totalSiteVisits = newTotal;
		globalData.lastUpdated = new Date().toISOString();

		// Save back to Gist
		await fetch(`${GITHUB_API_BASE}/gists/${GIST_ID}`, {
			method: 'PATCH',
			headers: {
				'Authorization': `token ${GITHUB_TOKEN}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				files: {
					'global-data.json': {
						content: JSON.stringify(globalData, null, 2)
					}
				}
			})
		});
	} catch (error) {
		console.error('Error updating global site visits:', error);
	}
}

// The reviews utilities now live in '@/utils/reviews'
