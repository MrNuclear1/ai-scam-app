"use client";
import { useEffect, useMemo, useState } from "react";
import { addReview, getGlobalFiveStarReviewsCount, getLocalFiveStarReviewsCount, getRecentReviews, Review, getGlobalFiveStarReviewsCountFromAPI } from "@/utils/reviews";
import { useRouter } from "next/navigation";

export default function ReviewsPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [stars, setStars] = useState<number>(5);
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [recent, setRecent] = useState<Review[]>([]);
  const [globalFiveStar, setGlobalFiveStar] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setRecent(getRecentReviews(10));
    (async () => {
      setGlobalFiveStar(await getGlobalFiveStarReviewsCountFromAPI());
    })();
  }, []);

  const starsUi = useMemo(() => [1,2,3,4,5], []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!description.trim()) return;
    setSubmitting(true);
    try {
      const name = `${firstName || ""} ${lastName || ""}`.trim();
      await addReview(name, stars, description, firstName, lastName);
      setRecent(getRecentReviews(10));
      setFirstName("");
      setLastName("");
      setStars(5);
      setDescription("");
      // Refresh global count best-effort
      setGlobalFiveStar(await getGlobalFiveStarReviewsCountFromAPI());
      
      // Show success message
      setShowSuccess(true);
      
      // Redirect to home page after 2 seconds
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
		<h1 className="text-3xl font-bold text-text mb-6">Share Your Experience</h1>

      {/* Success Message */}
      {showSuccess && (
			<div className="bg-gradient-to-r from-secondary-100/80 to-secondary-200/80 border border-secondary-300/50 rounded-xl p-6 mb-6 text-center shadow-sm">
          <div className="text-4xl mb-4">🎉</div>
				<h2 className="text-2xl font-bold text-text mb-2">Thank You!</h2>
				<p className="text-primary-300 mb-4">Your review has been submitted successfully!</p>
          {stars === 5 && (
					<p className="text-primary-400 text-sm">
              ⭐ Your 5-star review will be featured as a testimonial on our home page!
            </p>
          )}
				<div className="mt-4 text-primary-400 text-sm">
            Redirecting to home page...
          </div>
        </div>
      )}

      {!showSuccess && (
			<div className="bg-primary-50/90 rounded-xl p-6 mb-10 border border-primary-200 shadow-sm">
          <form onSubmit={submit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
					<label className="block text-sm text-primary-400 mb-1">First Name (optional)</label>
					<input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-white text-text border border-primary-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent" placeholder="Jane" />
            </div>
            <div>
					<label className="block text-sm text-primary-400 mb-1">Last Name (optional)</label>
					<input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full bg-white text-text border border-primary-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent" placeholder="Doe" />
            </div>
          </div>

          <div>
				<label className="block text-sm text-primary-400 mb-2">Your Rating</label>
            <div className="flex items-center gap-2">
              {starsUi.map((i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setStars(i)}
							className={`text-2xl ${i <= stars ? 'text-accent-500' : 'text-primary-300'} hover:scale-110 transition-transform`}
                >
                  ★
                </button>
              ))}
						<span className="ml-2 text-sm text-primary-300">{stars} / 5</span>
            </div>
          </div>

          <div>
				<label className="block text-sm text-primary-400 mb-1">Your Review</label>
				<textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full bg-white text-text border border-primary-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent" placeholder="What did you like? What can we improve?" />
          </div>

          <div className="flex items-center gap-3">
					<button disabled={submitting || !description.trim()} className="bg-gradient-to-r from-secondary-500 to-accent-500 hover:from-secondary-600 hover:to-accent-600 text-white font-semibold px-5 py-2 rounded-lg disabled:opacity-60 transition-all duration-300">
              {submitting ? 'Submitting…' : 'Submit Review'}
            </button>
					<div className="text-sm text-primary-400">
              5★ Reviews (global): {globalFiveStar ?? '…'} | Local 5★: {getLocalFiveStarReviewsCount()}
            </div>
          </div>
          </form>
        </div>
      )}

      {!showSuccess && (
        <>
			<h2 className="text-2xl font-bold text-text mb-4">Recent Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recent.length === 0 && (
				<div className="text-primary-400">No reviews yet. Be the first to share your thoughts!</div>
        )}
        {recent.map((r) => (
				<div key={r.id} className="bg-primary-50/80 p-5 rounded-xl border border-primary-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
						<div className="font-semibold text-text">{r.name}</div>
              <div className="text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
								<span key={i} className={`text-lg ${i < r.stars ? 'text-accent-500' : 'text-primary-300'}`}>★</span>
                ))}
              </div>
            </div>
					<div className="text-sm text-primary-400 mb-2">{new Date(r.date).toLocaleDateString()}</div>
					<div className="text-primary-300">{r.description}</div>
          </div>
          ))}
          </div>
        </>
      )}
    </div>
  );
}


