import Link from "next/link";
import Image from "next/image";
import SanityImage from "@/components/SanityImage";
import { getHomeContent } from "@/lib/content";

export default async function Home() {
  const content = await getHomeContent();

  return (
    <main>
      {/* ── Hero ── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-gradient-to-b from-brand-purple-light/50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                id="hero-heading"
                style={{ fontFamily: '"Playfair Display", serif' }}
                className="text-4xl md:text-5xl lg:text-5.5xl font-medium leading-[1.1] tracking-tight text-brand-purple"
              >
                {content.hero.heading.split("PERFECTED")[0]}
                <span>PERFECTED</span>
              </h1>
              <div className="w-90 h-px bg-brand-purple-dark/30 my-15"></div>
              <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-lg font-serif">
                {content.hero.subheading}
              </p>
              <Link
                href="/booking"
                className="inline-block mt-12 px-15 py-4 border-2 border-brand-gold-soft text-brand-purple tracking-wide hover:bg-[#249E94] hover:border-[#249E94] hover:text-white transition-colors font-Montserrat rounded"
              >
                {content.hero.ctaText}
              </Link>
            </div>
            <SanityImage
              image={content.hero.image}
              alt="Prerna applying makeup to a client"
              width={480}
              height={600}
              className="w-full max-w-md mx-auto md:mx-0 md:ml-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            id="services-heading"
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="text-4xl md:text-5xl text-brand-purple font-semibold text-center"
          >
            Services
          </h2>
          <p className="text-center text-brand-purple text-sm tracking-wide mt-3">
            Expert services for every stunning look you desire.
          </p>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Service categories"
            className="flex justify-center gap-15 mt-10 mb-12"
          >
            {content.serviceCategories.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                aria-selected={i === 0}
                className={`text-sm font-medium pb-2 border-b-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple ${i === 0
                  ? "border-b-2 border-brand-purple text-brand-purple"
                  : "border-b border-brand-gold-soft/70 text-brand-purple/50 hover:text-brand-purple"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.services.map((service) => (
              <div
                key={service._key}
                className="bg-[#C47BE466]/80 rounded-xl p-5 flex flex-col"
              >
                <h3 className="mb-4 font-semibold text-brand-purple">
                  {service.name}
                </h3>

                <SanityImage
                  image={service.image}
                  alt={`${service.name} service`}
                  width={400}
                  height={400}
                  className="w-full rounded-xl"
                />

                <div className="flex justify-between items-center mt-4">
                  <p className="text-brand-purple font-bold">
                    {service.price}
                  </p>
                  <button className="text-xs text-brand-purple bg-white font-semibold rounded px-5 py-2 hover:bg-brand-purple hover:text-white transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book Your Look ── */}
      <section
        aria-labelledby="book-heading"
        className="py-16 md:py-20 bg-white mt-15"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative flex items-center justify-center">
          {/* Orchid — absolute so it doesn't push content */}
          <div
            className="hidden md:block absolute left-0 w-56 md:w-72 rotate-345 opacity-70 -translate-x-10 translate-y-30"
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
              className="inline-block mt-14 px-30 py-4 border-2 border-brand-gold-soft text-brand-purple tracking-wide hover:bg-[#249E94] hover:border-[#249E94] hover:text-white transition-colors font-Montserrat rounded"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features (purple bg) ── */}
      <section aria-label="Additional services" className="py-16 mt-25">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-purple-dark rounded-xl p-8 text-white">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">1 on 1 Makeup Lessons</h3>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Learn professional techniques with personalized one-on-one
              sessions tailored to your skill level and style goals.
            </p>
            <button className="text-xs text-brand-purple bg-white rounded font-semibold px-5 py-2 hover:bg-[#249E94] hover:text-white transition-colors mt-7 mr-3">
              Book Now
            </button>
            <button className="text-xs text-brand-purple bg-white rounded font-semibold px-5 py-2 hover:bg-[#249E94] hover:text-white transition-colors mt-7">
              Learn More
            </button>
          </div>

          <div className="bg-brand-purple-dark rounded-2xl p-8 text-white">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Event</h3>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Group bookings and event makeup services for weddings, parties,
              and corporate events. We bring the studio to you.
            </p>
            <button className="text-xs text-brand-purple bg-white rounded font-semibold px-5 py-2 hover:bg-[#249E94] hover:text-white transition-colors mt-7 mr-3">
              Book Now
            </button>
            <button className="text-xs text-brand-purple bg-white rounded font-semibold px-5 py-2 hover:bg-[#249E94] hover:text-white transition-colors mt-7">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-16 md:py-24 relative"
      >
        <div
          className="hidden md:block absolute right-0 top-1/2 translate-y-60 opacity-80 pointer-events-none rotate-180"
          aria-hidden="true"
        >
          <Image
            src="/images/lily.png"
            alt=""
            width={500}
            height={350}
            className="w-[420px] h-auto"
          />
        </div>

        <h2
          id="contact-heading"
          style={{ fontFamily: '"Playfair Display", serif' }}
          className="text-4xl md:text-5xl font-semibold text-brand-purple text-center pb-25 mt-20"
        >
          Contact
        </h2>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <form aria-label="Contact form" className="space-y-6">
              {/* Name */}
              <div>
                <p className="font-bold text-brand-purple-dark mb-8">Name (Required)</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-firstname" className="text-sm text-brand-purple-dark block mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-firstname"
                      type="text"
                      required
                      className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-brand-purple transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-lastname" className="text-sm text-brand-purple-dark block mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-lastname"
                      type="text"
                      required
                      className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-brand-purple transition-colors bg-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="contact-service" className="text-sm text-brand-purple-dark block mb-1">
                  Service <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-service"
                  type="text"
                  required
                  className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-brand-purple transition-colors bg-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="text-sm text-brand-purple-dark block mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-brand-purple transition-colors bg-transparent"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="text-brand-purple-dark text-sm font-medium block mb-1">
                  Message <span className="text-brand-purple-dark font-normal">(Optional)</span>
                </label>
                <p className="text-gray-400 text-xs mb-2">Feel free to attach inspiration images or share any additional look!</p>
                <textarea
                  id="contact-message"
                  rows={5}
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-brand-purple-dark text-white font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition-all"
              >
                Book a Consultation
              </button>
            </form>

            <div className="bg-brand-purple-light rounded-3xl p-12 md:p-16 flex items-center justify-center aspect-square max-w-sm mx-auto w-full">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <svg
                  className="w-20 h-16 text-brand-purple"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        aria-labelledby="testimonials-heading"
        className="py-16 md:py-24 mt-20 mb-30"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            id="testimonials-heading"
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="text-4xl md:text-3xl text-brand-purple text-center font-semibold mb-20"
          >
            Trusted By Many Satisfied Customers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {content.testimonials.map((t) => (
              <div
                key={t._key}
                className="bg-[#C47BE466]/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <SanityImage
                    image={t.avatar}
                    alt={`${t.name} avatar`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full shrink-0"
                  />
                  <span
                    className="font-semibold text-brand-purple font-Montserrat"
                    style={{ fontFamily: '"Playfair Display", serif' }}>
                    {t.name}
                  </span>
                </div>
                <p className="text-sm text-brand-purple leading-relaxed font-Montserrat">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
