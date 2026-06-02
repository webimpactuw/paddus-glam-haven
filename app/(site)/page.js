import Link from "next/link";
import Image from "next/image";
import SanityImage from "@/components/SanityImage";
import { getHomeContent } from "@/lib/content";
import OurWork from "@/components/OurWork";
import Testimonials from "@/components/Testimonials";
import ServiceCards from "@/components/ServiceCards";
import ContactForm from "@/components/ContactForm";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

async function getHomeImageObj() {
  const query = `*[_type == "portrait"] {
    homePortrait,
    aboutPortrait
  }`;

  const images = await client.fetch(query);
  return images
}

export default async function Home() {
  const content = await getHomeContent();
  const homeImage = await getHomeImageObj();

  return (
    <main>
      {/* ── Hero ── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-visible md:overflow-hidden md:bg-gradient-to-b md:from-brand-purple-light/50 md:to-white"
      >
        {/* Mobile: full-bleed background image */}
        <div className="md:hidden absolute inset-0 z-0">
          <SanityImage
            image={content.hero.image}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover object-top"
            priority
          />
          {/* Subtle fade at very bottom only */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-brand-purple-light/40" />
        </div>

        {/* min-h so background image has room to show on mobile */}
        <div className="min-h-[85vh] md:min-h-0 max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 md:py-24 relative z-10 flex flex-col md:block">

          {/* Mobile: title + subheading together at top */}
          <div className="md:hidden pt-3">
            <h1
              style={{ fontFamily: '"Playfair Display", serif' }}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white"
            >
              {content.hero.heading.split("PERFECTED")[0]}
              <span className="block">PERFECTED</span>
            </h1>
            <p className="mt-3 text-[#FFF19B] text-base leading-relaxed font-serif">
              Expert Makeup & Styling for Weddings,{" "}
              <br className="md:hidden" />
              Performances, and Photo-shoots.
            </p>
          </div>

          {/* Spacer pushes button down on mobile */}
          <div className="flex-1 md:hidden" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Desktop title */}
              <h1
                id="hero-heading"
                style={{ fontFamily: '"Playfair Display", serif' }}
                className="hidden md:block text-5xl lg:text-5.5xl font-medium leading-[1.1] tracking-tight text-brand-purple"
              >
                {content.hero.heading.split("PERFECTED")[0]}
                <span>PERFECTED</span>
              </h1>
              <div className="hidden md:block w-90 h-px bg-brand-purple-dark/30 my-6" />
              <p className="hidden md:block mt-6 text-gray-500 text-lg leading-relaxed max-w-lg font-serif">
                {content.hero.subheading}
              </p>
              <Link
                href="/booking"
                className="inline-block mt-6 md:mt-20 px-15 py-4 border-2 bg-brand-gold-soft border-brand-gold-soft text-brand-purple tracking-wide hover:bg-[#249E94] hover:border-[#249E94] hover:text-white transition-colors font-Montserrat rounded"
              >
                {content.hero.ctaText}
              </Link>
            </div>
            <Image
              src={urlFor(homeImage[0].homePortrait).auto("format").size(1920, 1080).url()}
              width={400}
              height={400}
              alt="Home Portrait"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="pt-26 pb-16 md:py-12"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            id="services-heading"
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="text-4xl md:text-5xl text-brand-purple font-semibold text-center"
          >
            Our Work
          </h2>
          <p className="text-center text-brand-purple text-sm tracking-wide mt-5">
            A look at recent bridal, performance, and editorial work.
          </p>
          <OurWork />
        </div>
      </section>

      {/* ── Book Your Look ── */}
      <section
        aria-labelledby="book-heading"
        className="py-16 md:py-20 bg-white mt-3"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative flex items-center justify-center">
          {/* Orchid — absolute so it doesn't push content */}
          <div
            className="md:block absolute left-12 md:left-8 w-32 md:w-72 rotate-345 opacity-70 -translate-x-10 translate-y-40"
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
          <div className="text-center flex flex-col items-center">
            <h2
              id="book-heading"
              style={{ fontFamily: '"Playfair Display", serif' }}
              className="text-4xl md:text-5xl font-serif font-semibold text-brand-purple"
            >
              Book Your Look
            </h2>
            <p className="mt-4 text-brand-purple text-sm font-Montserrat tracking-wide max-w-xl">
              Schedule a consultation to get your personalized look that feels like you
            </p>
            <Link
              href="/booking"
              className="inline-block mt-14 px-17 py-1.5 md:px-25 md:py-4 border-2 border-brand-gold-soft text-brand-purple tracking-wide hover:bg-[#249E94] hover:border-[#249E94] hover:text-white transition-colors font-Montserrat rounded"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features (purple bg) ── */}
      <ServiceCards cards={content.serviceCards} />

      {/* ── Contact ── */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-16 md:py-20 relative pb-0 md:pb-24"
      >
        <div
          className="block absolute right-0 top-0 md:top-1/2 md:translate-y-80 opacity-80 pointer-events-none rotate-180"
          aria-hidden="true"
        >
          <Image
            src="/images/lily.png"
            alt=""
            width={500}
            height={350}
            className="w-[200px] md:w-[420px] h-auto"
          />
        </div>

        <h2
          id="contact-heading"
          style={{ fontFamily: '"Playfair Display", serif' }}
          className="text-4xl md:text-5xl font-semibold text-brand-purple text-center pb-12 mt-15 md:mt-2"
        >
          Contact
        </h2>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <ContactForm />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        aria-labelledby="testimonials-heading"
        className="py-16 md:py-24 mt-20 md:mt-40 mb-5"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            id="testimonials-heading"
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="text-2xl md:text-4xl text-brand-purple text-center font-semibold"
          >
            Trusted By Many Satisfied Customers
          </h2>
          <p className="text-center text-brand-purple text-sm mt-3 mb-13">
            Real experiences. Great value.
          </p>

          <Testimonials testimonials={content.testimonials} />
        </div>
      </section>
    </main>
  );
}
