"use client";
import { useEffect, useMemo, useState } from "react";
import { addReview, getGlobalFiveStarReviewsCount, getLocalFiveStarReviewsCount, getRecentReviews, Review } from "@/utils/reviews";

export default function ReviewsPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [stars, setStars] = useState<number>(5);
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [recent, setRecent] = useState<Review[]>([]);
  const [globalFiveStar, setGlobalFiveStar] = useState<number | null>(null);

  useEffect(() => {
    setRecent(getRecentReviews(10));
    (async () => {
      setGlobalFiveStar(await getGlobalFiveStarReviewsCount());
    })();
  }, []);

  const starsUi = useMemo(() => [1,2,3,4,5], []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!description.trim()) return;
    setSubmitting(true);
    try {
      const name = `${firstName || ""} ${lastName || ""}`.trim();
      await addReview(name, stars, description);
      setRecent(getRecentReviews(10));
      setFirstName("");
      setLastName("");
      setStars(5);
      setDescription("");
      // Refresh global count best-effort
      setGlobalFiveStar(await getGlobalFiveStarReviewsCount());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-[#E8EEF6] mb-6">Share Your Experience</h1>

      <div className="bg-[#1E293B] rounded-xl p-6 mb-10">
        <form onSubmit={submit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#94A3B8] mb-1">First Name (optional)</label>
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-[#0F172A] text-[#E8EEF6] border border-[#334155] rounded-lg px-3 py-2" placeholder="Jane" />
            </div>
            <div>
              <label className="block text-sm text-[#94A3B8] mb-1">Last Name (optional)</label>
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full bg-[#0F172A] text-[#E8EEF6] border border-[#334155] rounded-lg px-3 py-2" placeholder="Doe" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#94A3B8] mb-2">Your Rating</label>
            <div className="flex items-center gap-2">
              {starsUi.map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setStars(i)}
                  className={`text-2xl ${i <= stars ? 'text-yellow-400' : 'text-gray-600'} hover:scale-110 transition-transform`}
                >
                  ★
                </button>
              ))}
              <span className="ml-2 text-sm text-[#CBD5E1]">{stars} / 5</span>
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#94A3B8] mb-1">Your Review</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full bg-[#0F172A] text-[#E8EEF6] border border-[#334155] rounded-lg px-3 py-2" placeholder="What did you like? What can we improve?" />
          </div>

          <div className="flex items-center gap-3">
            <button disabled={submitting || !description.trim()} className="bg-gradient-to-r from-[#20C997] to-[#3BA4F7] hover:from-[#1BA085] hover:to-[#2A8EE6] text-white font-semibold px-5 py-2 rounded-lg disabled:opacity-60">
              {submitting ? 'Submitting…' : 'Submit Review'}
            </button>
            <div className="text-sm text-[#94A3B8]">
              5★ Reviews (global): {globalFiveStar ?? '…'} | Local 5★: {getLocalFiveStarReviewsCount()}
            </div>
          </div>
        </form>
      </div>

      <h2 className="text-2xl font-bold text-[#E8EEF6] mb-4">Recent Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recent.length === 0 && (
          <div className="text-[#94A3B8]">No reviews yet. Be the first to share your thoughts!</div>
        )}
        {recent.map((r) => (
          <div key={r.id} className="bg-[#1E293B]/50 p-5 rounded-xl border border-[#334155]">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold text-[#E8EEF6]">{r.name}</div>
              <div className="text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-lg ${i < r.stars ? 'text-yellow-400' : 'text-gray-600'}`}>★</span>
                ))}
              </div>
            </div>
            <div className="text-sm text-[#94A3B8] mb-2">{new Date(r.date).toLocaleDateString()}</div>
            <div className="text-[#CBD5E1]">{r.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


