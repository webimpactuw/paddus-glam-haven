"use client";

import { useState, useRef, useEffect } from "react";
import SanityImage from "@/components/SanityImage";

const categories = [
  {
    id: "featured",
    title: "Featured",
    images: [
      { id: 1, alt: "Featured 1" },
      { id: 2, alt: "Featured 2" },
      { id: 3, alt: "Featured 3" },
      { id: 4, alt: "Featured 4" },
    ],
  },
  {
    id: "performance",
    title: "Performance",
    images: [
      { id: 1, alt: "Performance 1" },
      { id: 2, alt: "Performance 2" },
      { id: 3, alt: "Performance 3" },
      { id: 4, alt: "Performance 4" },
    ],
  },
  {
    id: "prom",
    title: "Prom",
    images: [
      { id: 1, alt: "Prom 1" },
      { id: 2, alt: "Prom 2" },
      { id: 3, alt: "Prom 3" },
      { id: 4, alt: "Prom 4" },
    ],
  },
  {
    id: "photo-shoots",
    title: "Photo Shoots",
    images: [
      { id: 1, alt: "Photo Shoots 1" },
      { id: 2, alt: "Photo Shoots 2" },
      { id: 3, alt: "Photo Shoots 3" },
      { id: 4, alt: "Photo Shoots 4" },
    ],
  },
];

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeScroll, setActiveScroll] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const activeCategory = categories[activeTab];
  const tabRefs = useRef([]);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  // Desktop underline indicator
  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = tabRefs.current[activeTab];
      const container = containerRef.current;
      if (activeButton && container) {
        const buttonRect = activeButton.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const extend = containerRect.width * 0.08;
        const rawLeft = buttonRect.left - containerRect.left - extend;
        const rawRight = rawLeft + buttonRect.width + extend * 2;
        const clampedLeft = Math.max(0, rawLeft);
        const clampedRight = Math.min(containerRect.width, rawRight);
        setIndicatorStyle({
          left: clampedLeft,
          width: clampedRight - clampedLeft,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  // Track scroll position for dot indicator
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollWidth = el.scrollWidth - el.clientWidth;
      const progress = el.scrollLeft / scrollWidth;
      const index = Math.round(progress * (activeCategory.images.length - 1));
      setActiveScroll(index);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [activeCategory.images.length]);

  // Reset scroll when tab changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      setActiveScroll(0);
    }
  }, [activeTab]);

  return (
    <>
      {/* ── Mobile ── */}
      <div className="md:hidden mt-8 mb-6 px-4">
        {/* Dropdown */}
        <div className="inline-block">
          <div className="flex items-center gap-2 border-2 border-brand-gold rounded-full px-4 py-2">
            <span className="text-sm text-brand-purple/60">Sort by:</span>
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(Number(e.target.value))}
              className="text-sm font-semibold text-brand-purple bg-transparent border-none outline-none cursor-pointer appearance-none pr-4"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237B00D4' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0px center",
              }}
            >
              {categories.map((category, i) => (
                <option key={category.id} value={i}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto mt-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {activeCategory.images.map((image) => (
            <div
              key={image.id}
              className="relative flex-none w-[67vw] aspect-[336/234] overflow-hidden rounded-lg snap-start"
            >
              <SanityImage
                alt={image.alt}
                width={336}
                height={234}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "#C47BE4", opacity: 0.4 }}
              />
            </div>
          ))}
        </div>

        {/* Dot indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {activeCategory.images.map((_, i) => (
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
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:block">
        <div className="w-full max-w-6xl mx-auto mt-10 mb-12">
          <div
            ref={containerRef}
            role="tablist"
            aria-label="Service categories"
            className="flex justify-around"
          >
            {categories.map((category, i) => (
              <button
                key={category.id}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                aria-selected={i === activeTab}
                onClick={() => setActiveTab(i)}
                className={`text-sm font-medium pb-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple ${
                  i === activeTab
                    ? "text-brand-purple"
                    : "text-brand-purple/50 hover:text-brand-purple"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="relative w-full h-px bg-brand-gold-soft/70">
            <div
              className="absolute top-0 h-0.5 bg-brand-purple transition-all duration-300"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 w-full max-w-6xl mx-auto aspect-[672/469]">
          {activeCategory.images.map((image) => (
            <div key={image.id} className="relative overflow-hidden">
              <SanityImage
                alt={image.alt}
                width={336}
                height={234}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "#C47BE4", opacity: 0.4 }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}