import Link from "next/link";
import Image from "next/image";
import SanityImage from "@/components/SanityImage";
import { getAboutContent } from "@/lib/content";

export default async function About() {
  const content = await getAboutContent();

  return (
    <main className="relative overflow-hidden">

      {/* Desktop Orchid */}
      <div
        className="hidden md:block absolute -top-8 -right-8 w-48 md:w-64 opacity-80 pointer-events-none rotate-[-30deg]"
        aria-hidden="true"
      >
        <Image
          src="/images/orchid.png"
          alt=""
          width={600}
          height={800}
          className="w-full h-auto"
        />
      </div>

      {/* Mobile Flower */}
      <div
        className="md:hidden absolute right-2 top-6 opacity-70 pointer-events-none rotate-180"
        aria-hidden="true"
      >
        <Image
          src="/images/lily.png"
          alt=""
          width={180}
          height={180}
          className="w-26 h-auto"
        />
      </div>

      {/* ── Page Header (Desktop Only) ── */}
      <section
        aria-labelledby="about-heading"
        className="hidden md:block pt-14 pb-8 text-center"
      >
        <h1
          id="about-heading"
          className="text-3xl md:text-4xl font-bold text-brand-purple leading-none"
        >
          {content.heading}
        </h1>

        <p className="text-brand-purple-light/50 mt-3 text-xl md:text-2xl">
          {content.subtitle}
        </p>
      </section>

      {/* ── Meet Prerna ── */}
      <section
        aria-labelledby="meet-heading"
        className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 md:pt-0 pb-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Desktop Image */}
          <div className="hidden md:block border-[3px] border-brand-purple-dark rounded-md p-2 max-w-sm mx-auto md:mx-0 w-full">
            <SanityImage
              image={content.portrait}
              alt="Portrait of Prerna, makeup artist"
              width={400}
              height={400}
              className="w-full"
            />
          </div>

          {/* Text Content */}
          <div className="px-8 md:px-0">
            <h2
              id="meet-heading"
              className="text-3xl md:text-4xl font-bold text-brand-purple text-center md:text-left"
            >
              Meet Prerna
            </h2>

            {/* Mobile Image */}
            <div className="md:hidden mt-6 border-[3px] border-brand-purple-dark rounded-md p-2 w-[220px] h-[250px] mx-auto overflow-hidden">
              <SanityImage
                image={content.portrait}
                alt="Portrait of Prerna, makeup artist"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {content.bio.map((paragraph, i) => (
              <p
                key={i}
                className={`${
                  i === 0 ? "mt-12 md:mt-5" : "mt-4"
                } text-gray-500 leading-relaxed`}
              >
                {paragraph}
              </p>
            ))}

            {/* Her Philosophy */}
            <div className="mt-10">
              <h3 className="text-3xl text-brand-purple font-bold font-sans text-center md:text-left">
                {content.philosophy.heading}
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                {content.philosophy.text}
              </p>

              {/* Centered on mobile, left on desktop */}
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/booking"
                  className="inline-block mt-6 px-8 py-3 bg-brand-purple-dark text-white font-semibold rounded-md hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  {content.philosophy.ctaText}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Desktop Orchid */}
      <div
        className="hidden md:block absolute bottom-0 left-0 w-48 md:w-64 opacity-80 pointer-events-none rotate-[-30deg]"
        aria-hidden="true"
      >
        <Image
          src="/images/orchid.png"
          alt=""
          width={600}
          height={800}
          className="w-full h-auto"
        />
      </div>

    </main>
  );
}