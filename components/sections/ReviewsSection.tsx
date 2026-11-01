import { BUSINESS } from "@/lib/config";

// Customer reviews from Google Business profile
export const REVIEWS = [
  {
    name: "Sathish Kumar",
    initials: "SK",
    date: "29 Jan 2026",
    rating: 5,
    comment:
      "Very good service by JK Packers & Movers. The team arrived on time, packed all household items and furniture very carefully with proper wrapping. Shifting was completed smoothly without any damage. Highly recommended!",
  },
  {
    name: "Priya Sundaram",
    initials: "PS",
    date: "22 Jan 2026",
    rating: 5,
    comment:
      "Polite staff and transparent quotation. They handled delicate kitchenware and electronics with extra care. Loading and unloading were done quickly and safely. Great experience!",
  },
  {
    name: "Venkatesh R",
    initials: "VR",
    date: "15 Jan 2026",
    rating: 5,
    comment:
      "Shifted our 2 BHK apartment. Dedicated labour team who carried everything through stairs without any complaints. Very punctual, humble, and cooperative throughout the shifting process.",
  },
  {
    name: "Anand Natarajan",
    initials: "AN",
    date: "08 Jan 2026",
    rating: 5,
    comment:
      "Excellent packing quality and fast delivery. Explained all details upfront on WhatsApp with no hidden surprises. Truly reliable packers and movers in Chennai area.",
  },
  {
    name: "Karthik Raja",
    initials: "KR",
    date: "02 Jan 2026",
    rating: 5,
    comment:
      "Best service at reasonable price. The boys packed our cots, washing machine, fridge, and carton boxes securely. Everything reached the new house in pristine condition. Thank you JK team!",
  },
];

export default function ReviewsSection() {
  // Duplicate for smooth seamless loop marquee
  const loopedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="section-pad bg-gray-50 overflow-hidden">
      <div className="container-xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold text-xs mb-3 border border-orange-200">
            <GoogleIcon className="w-4 h-4" />
            <span>Verified Google Reviews</span>
          </div>
          <h2 className="section-title">
            What Our Customers <span className="text-orange-500">Say</span>
          </h2>
          <span className="orange-line mx-auto" />
          <p className="section-subtitle mx-auto">
            Real feedback from families and businesses who trusted JK Packers &amp; Movers for their relocation.
          </p>
        </div>
      </div>

      {/* ── Marquee Continuous Left-to-Right Carousel Track ── */}
      <div className="relative w-full py-4 overflow-hidden">
        {/* Soft edge blur overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <div className="animate-marquee-track flex gap-6">
          {loopedReviews.map((review, idx) => (
            <div
              key={`${review.name}-${idx}`}
              className="w-[300px] sm:w-[360px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-card hover:border-orange-200 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars + Google Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, s) => (
                      <StarIcon key={s} className="w-4 h-4 text-orange-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gray-50 border border-gray-100 text-[11px] text-gray-500 font-medium">
                    <GoogleIcon className="w-3.5 h-3.5" />
                    <span>Google Review</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-600 leading-relaxed italic mb-5 line-clamp-4">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-sm">
                    {review.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate">{review.name}</p>
                    <p className="text-[11px] text-gray-400 font-medium">{review.date}</p>
                  </div>
                </div>
                <span className="text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Actions ── */}
      <div className="container-xl mt-8">
        <div className="text-center flex flex-wrap gap-4 justify-center items-center">
          <a
            href={BUSINESS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <GoogleIcon className="w-4 h-4 text-white" />
            <span>Read More Google Reviews</span>
            <ExternalIcon className="w-3.5 h-3.5 ml-0.5" />
          </a>
          <a
            href={BUSINESS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <StarIcon className="w-4 h-4 text-orange-500" />
            <span>Write a Google Review</span>
          </a>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">
          Hover over any card to pause scrolling
        </p>
      </div>
    </section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}
