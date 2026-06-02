"use client";

import { useState, useRef, useEffect } from "react";

const placeholderTestimonials = [
  { _key: "1", text: "I was nervous about getting my makeup done, but the experience was amazing. It felt natural, comfortable, and I still looked like myself in the best possible way", name: "Anushcka" },
  { _key: "2", text: "Really great value for the quality. I got exactly the look I wanted and it lasted all day.", name: "Lily" },
  { _key: "3", text: "She listened to exactly what I wanted and made me feel so comfortable the whole time. Would definitely come back again.", name: "Ahalya" },
];

export default function Testimonials({ testimonials }) {
  const [activeScroll, setActiveScroll] = useState(0);
  const scrollRef = useRef(null);

  const data = testimonials?.length > 0 ? testimonials : placeholderTestimonials;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollWidth = el.scrollWidth - el.clientWidth;
      const progress = el.scrollLeft / scrollWidth;
      const index = Math.round(progress * (data.length - 1));
      setActiveScroll(index);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [data.length]);

  return (
    <>
      {/* Mobile: horizontal scroll */}
      <div
        ref={scrollRef}
        className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {data.map((t) => (
          <div
            key={t._key}
            className="flex-none w-[80vw] bg-[#C47BE466]/80 rounded-xl p-8 snap-start flex flex-col items-center justify-center text-center min-h-48"
          >
            <p className="text-sm text-brand-purple leading-relaxed font-Montserrat">
              "{t.text}"
            </p>
            <p className="mt-4 text-sm text-brand-purple font-Montserrat">
              - {t.name}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: dot indicator */}
      <div className="flex sm:hidden justify-center gap-2 mt-4">
        {data.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === activeScroll
                ? "w-8 h-3 bg-brand-gold"
                : "w-3 h-3 bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-6">
        {data.map((t) => (
          <div
            key={t._key}
            className="bg-[#C47BE466]/80 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center min-h-48"
          >
            <p className="text-sm text-brand-purple leading-relaxed font-Montserrat">
              "{t.text}"
            </p>
            <p className="mt-4 text-sm text-brand-purple font-Montserrat">
              - {t.name}
            </p>
          </div>
        ))}
      </div>

      {/* Submit Review button */}
      <div className="flex justify-center mt-12">
        <button className="bg-brand-purple-dark text-white font-semibold px-10 py-3 rounded-lg hover:brightness-110 transition-all">
          Submit Review
        </button>
      </div>
    </>
  );
}