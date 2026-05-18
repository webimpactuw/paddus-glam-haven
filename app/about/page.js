import Link from "next/link";
import Image from "next/image";
import SanityImage from "@/components/SanityImage";
import { getAboutContent } from "@/lib/content";

export default async function About() {
  const content = await getAboutContent();

  return (
    <main>
      {/* ── Page Header ── */}
      <section aria-labelledby="about-heading" className="pt-14 pb-8 text-center">
        <h1
          id="about-heading"
          className="text-4xl md:text-5xl font-bold text-brand-purple-dark"
        >
          {content.heading}
        </h1>

        <p className="text-brand-purple-light mt-3 text-sm">
          {content.subtitle}
        </p>
      </section>

      {/* ── Meet Prerna ── */}
      <section
        aria-labelledby="meet-heading"
        className="max-w-7xl mx-auto px-6 lg:px-8 pb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="border-[3px] border-brand-purple-dark rounded-md p-2 max-w-sm mx-auto md:mx-0 w-full">
            <SanityImage
              image={content.portrait}
              alt="Portrait of Prerna, makeup artist"
              width={400}
              height={400}
              className="w-full"
            />
          </div>

          <div>
            <h2
              id="meet-heading"
              className="text-3xl md:text-4xl font-bold text-brand-purple-dark"
            >
              Meet Prerna
            </h2>

            {content.bio.map((paragraph, i) => (
              <p
                key={i}
                className={`${i === 0 ? "mt-5" : "mt-4"} text-gray-500 leading-relaxed`}
              >
                {paragraph}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-8 py-6 border-t border-b border-brand-purple-light/25">
              {content.stats.map((stat) => (
                <div key={stat.label}>
                  {/* GOLD numbers */}
                  <p className="text-3xl font- text-brand-gold-soft">
                    {stat.value}
                  </p>

                  {/* LIGHT PURPLE labels */}
                  <p className="text-xs text-brand-purple uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Our Philosophy */}
            <div className="mt-10">
              <h3 className="text-3xl text-brand-purple-dark font-semibold font-sans">
                {content.philosophy.heading}
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                {content.philosophy.text}
              </p>

              <Link
                href="/booking"
                className="inline-block mt-6 px-8 py-3 bg-brand-purple text-white font-semibold rounded-md hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
              >
                {content.philosophy.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Decorative orchid ── */}
      <div aria-hidden="true" className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <Image
          src="/images/orchid.png"
          alt=""
          width={600}
          height={800}
          className="w-44 md:w-56 h-auto"
        />
      </div>
    </main>
  );
}