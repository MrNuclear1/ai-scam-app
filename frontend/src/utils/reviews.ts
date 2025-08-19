export interface Review {
  id: string;
  name: string;
  stars: number; // 1-5
  description: string;
  date: string; // ISO
}

export interface GlobalFiveStarReview {
  id: string;
  firstName: string;
  lastName: string;
  message: string;
  stars: 5; // Always 5
  date: string; // ISO
}

const REVIEWS_KEY = 'scamproof-reviews';
const LEGACY_REVIEWS_KEY = 'scamguard-reviews';
const MY_REVIEWS_KEY = 'scamproof-myreviews';
const HELPFUL_COUNTS_KEY = 'scamproof-helpful-counts';
const HELPFUL_VOTED_KEY = 'scamproof-helpful-voted';
const GLOBAL_FIVE_STAR_REVIEWS_KEY = 'scamproof-global-five-star-reviews';

const COUNT_API_BASES = [
  'https://api.countapi.xyz',
  'https://api.countapi.dev',
];

async function countApiHit(namespace: string, key: string): Promise<number | null> {
  for (const base of COUNT_API_BASES) {
    try {
      const res = await fetch(`${base}/hit/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`);
      if (!res.ok) continue;
      const data = await res.json();
      if (typeof data.value === 'number') return data.value;
    } catch (_) {
      // try next base
    }
  }
  return null;
}

async function countApiGet(namespace: string, key: string): Promise<number | null> {
  for (const base of COUNT_API_BASES) {
    try {
      const res = await fetch(`${base}/get/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`);
      if (!res.ok) continue;
      const data = await res.json();
      if (typeof data.value === 'number') return data.value;
    } catch (_) {
      // try next base
    }
  }
  return null;
}

export function getReviews(): Review[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(REVIEWS_KEY) || localStorage.getItem(LEGACY_REVIEWS_KEY);
  if (!raw) return [];
  try {
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) return arr as Review[];
  } catch (_) {}
  return [];
}

export async function addReview(name: string, stars: number, description: string, firstName?: string, lastName?: string): Promise<Review> {
  const review: Review = {
    id: `rev_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    name: name?.trim() || 'Anonymous',
    stars: Math.min(5, Math.max(1, Math.round(stars))),
    description: description?.trim() || '',
    date: new Date().toISOString(),
  };

  if (typeof window !== 'undefined') {
    const existing = getReviews();
    const updated = [review, ...existing].slice(0, 200); // simple cap
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(updated));

    // Track ownership for edit/delete controls
    try {
      const mineRaw = localStorage.getItem(MY_REVIEWS_KEY);
      const mine: string[] = mineRaw ? JSON.parse(mineRaw) : [];
      mine.unshift(review.id);
      localStorage.setItem(MY_REVIEWS_KEY, JSON.stringify(mine.slice(0, 100)));
    } catch (_) {}

    // If 5-star review, save to global testimonials
    if (review.stars === 5 && firstName && lastName) {
      const globalReview: GlobalFiveStarReview = {
        id: `global_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        message: description?.trim() || '',
        stars: 5,
        date: new Date().toISOString(),
      };
      
      try {
        const existingGlobal = getGlobalFiveStarReviews();
        const updatedGlobal = [globalReview, ...existingGlobal].slice(0, 100); // Cap at 100 testimonials
        localStorage.setItem(GLOBAL_FIVE_STAR_REVIEWS_KEY, JSON.stringify(updatedGlobal));
      } catch (_) {}
    }
  }

  // If 5-star, hit global counter (best-effort)
  try {
    if (review.stars === 5) {
      await countApiHit('scamproof', 'five_star_reviews');
    }
  } catch (_) {}

  return review;
}

export function getRecentReviews(count: number = 3): Review[] {
  const all = getReviews();
  return all.sort((a, b) => (b.date > a.date ? 1 : -1)).slice(0, count);
}

export function getLocalFiveStarReviewsCount(): number {
  return getReviews().filter(r => r.stars === 5).length;
}

export async function getGlobalFiveStarReviewsCount(): Promise<number | null> {
  try {
    return await countApiGet('scamproof', 'five_star_reviews');
  } catch (_) {
    return null;
  }
}

export function getMyReviewIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(MY_REVIEWS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (_) { return []; }
}

export function editMyReview(id: string, updates: Partial<Pick<Review,'name'|'stars'|'description'>>): Review | null {
  if (typeof window === 'undefined') return null;
  const mine = new Set(getMyReviewIds());
  if (!mine.has(id)) return null;
  const all = getReviews();
  const idx = all.findIndex(r => r.id === id);
  if (idx === -1) return null;
  all[idx] = { ...all[idx], ...updates } as Review;
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(all));
  return all[idx];
}

export function removeMyReview(id: string): boolean {
  if (typeof window === 'undefined') return false;
  const mine = new Set(getMyReviewIds());
  if (!mine.has(id)) return false;
  const remaining = getReviews().filter(r => r.id !== id);
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(remaining));
  localStorage.setItem(MY_REVIEWS_KEY, JSON.stringify(Array.from(mine).filter(x => x !== id)));
  return true;
}

export function getHelpfulCountMap(): Record<string, number> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(HELPFUL_COUNTS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (_) { return {}; }
}

export function getHelpfulCount(id: string): number {
  return getHelpfulCountMap()[id] || 0;
}

export function hasVotedHelpful(id: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem(HELPFUL_VOTED_KEY);
    const arr: string[] = raw ? JSON.parse(raw) : [];
    return new Set(arr).has(id);
  } catch (_) { return false; }
}

export function voteHelpful(id: string): number {
  if (typeof window === 'undefined') return 0;
  if (hasVotedHelpful(id)) return getHelpfulCount(id);
  const counts = getHelpfulCountMap();
  counts[id] = (counts[id] || 0) + 1;
  localStorage.setItem(HELPFUL_COUNTS_KEY, JSON.stringify(counts));
  try {
    const raw = localStorage.getItem(HELPFUL_VOTED_KEY);
    const arr: string[] = raw ? JSON.parse(raw) : [];
    arr.push(id);
    localStorage.setItem(HELPFUL_VOTED_KEY, JSON.stringify(arr.slice(0, 500)));
  } catch (_) {}
  return counts[id];
}

export function getAverageRating(): number {
  const reviews = getReviews();
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.stars, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

export function getRatingDistribution(): Record<number, number> {
  const dist: Record<number, number> = {1:0,2:0,3:0,4:0,5:0};
  for (const r of getReviews()) dist[r.stars] = (dist[r.stars] || 0) + 1;
  return dist;
}

// Global 5-star review functions
export function getGlobalFiveStarReviews(): GlobalFiveStarReview[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(GLOBAL_FIVE_STAR_REVIEWS_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) return arr as GlobalFiveStarReview[];
  } catch (_) {}
  return [];
}

export function getGlobalFiveStarReviewsForDisplay(count: number = 6): GlobalFiveStarReview[] {
  const all = getGlobalFiveStarReviews();
  return all.sort((a, b) => (b.date > a.date ? 1 : -1)).slice(0, count);
}

export function getGlobalFiveStarReviewsCount(): number {
  return getGlobalFiveStarReviews().length;
}


