"use client";

import { useState, useEffect, useRef } from "react";
import SanityImage from "@/components/SanityImage";

const placeholderCards = [
  {
    _key: "1",
    title: "1 on 1 Makeup Lessons",
    description: "Description",
    image: null,
  },
  {
    _key: "2",
    title: "Group Tutorial",
    description: "Description",
    image: null,
  },
];

export default function ServiceCards({ cards }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [peekOffset, setPeekOffset] = useState(7.5);
  const scrollRef = useRef(null);

  const data = cards?.length > 0 ? cards : placeholderCards;
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < data.length - 1;

  useEffect(() => {
    const updatePeek = () => {
      const w = window.innerWidth;
      if (w >= 1280) setPeekOffset(17.5);
      else if (w >= 1024) setPeekOffset(12.5);
      else setPeekOffset(7.5);
    };
    updatePeek();
    window.addEventListener("resize", updatePeek);
    return () => window.removeEventListener("resize", updatePeek);
  }, []);

  // Track scroll position for dots on mobile
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollWidth = el.scrollWidth - el.clientWidth;
      const progress = el.scrollLeft / scrollWidth;
      const index = Math.round(progress * (data.length - 1));
      setActiveIndex(index);
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [data.length]);

  const prev = () => setActiveIndex((i) => i - 1);
  const next = () => setActiveIndex((i) => i + 1);

  return (
    <section aria-label="Additional services" className="py-16 mt-20 relative mx-auto">

      {/* Mobile: native horizontal scroll */}
      <div
        ref={scrollRef}
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {data.map((card) => (
          <div
            key={card._key}
            className="relative flex-none w-[85vw] overflow-hidden rounded-2xl aspect-[16/9] snap-start"
          >
            <SanityImage
              image={card.image}
              alt={card.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "#C47BE4", opacity: 0.4 }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 gap-3">
              <div>
                <h3
                  className="text-brand-purple text-lg font-bold"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {card.title}
                </h3>
                <p className="mt-0.5 text-brand-purple text-xs leading-relaxed max-w-sm">
                  {card.description}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="text-xs text-brand-purple bg-white font-semibold px-4 py-2 rounded-lg hover:bg-[#249E94] hover:text-white transition-colors">
                  Book Now
                </button>
                <button className="text-xs text-brand-yellow-soft font-semibold px-4 py-2 rounded-lg border-2 border-white hover:bg-white hover:text-brand-purple transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: sliding carousel */}
      <div className="hidden md:block overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${activeIndex * 90}% + ${activeIndex > 0 ? `${peekOffset}%` : '0%'}))` }}
        >
          {data.map((card) => (
            <div
              key={card._key}
              className="relative flex-none w-[85%] mx-[2.5%] overflow-hidden rounded-2xl aspect-[16/9]"
            >
              <SanityImage
                image={card.image}
                alt={card.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "#C47BE4", opacity: 0.4 }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 gap-5">
                <div>
                  <h3
                    className="text-brand-purple text-3xl font-bold"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-1 text-brand-purple text-sm leading-relaxed max-w-sm">
                    {card.description}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="text-sm text-brand-purple bg-white font-semibold px-8 py-3 rounded-lg hover:bg-[#249E94] hover:text-white transition-colors">
                    Book Now
                  </button>
                  <button className="text-sm text-brand-yellow-soft font-semibold px-8 py-3 rounded-lg border-2 border-white hover:bg-white hover:text-brand-purple transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows — desktop only */}
      {hasPrev && (
        <button
          onClick={prev}
          aria-label="Previous"
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-brand-purple rounded-full w-12 h-12 items-center justify-center shadow-md transition-colors border-2 border-brand-purple/20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {hasNext && (
        <button
          onClick={next}
          aria-label="Next"
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-brand-purple rounded-full w-12 h-12 items-center justify-center shadow-md transition-colors border-2 border-brand-purple/20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Dots — mobile only */}
      <div className="flex md:hidden justify-center gap-2 mt-4">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-8 h-3 bg-brand-gold"
                : "w-3 h-3 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}