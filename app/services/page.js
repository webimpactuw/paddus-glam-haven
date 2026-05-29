import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Group Performance" },
  { name: "Saree Draping" },
  { name: "Modeling" },
  { name: "Hosting/MC" },
  { name: "Solo Dance Performance" },
  { name: "Wedding" },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Flower */}
      <div
        className="absolute top-0 left-0 w-48 md:w-64 opacity-80 pointer-events-none -rotate-12"
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

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Heading */}
        <h1
          className="text-5xl md:text-6xl text-brand-purple text-center font-semibold"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
          {services.map((service) => (
            <div
              key={service.name}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F5F5F5] border border-gray-200"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                <div className="w-16 h-16 border-2 border-gray-300 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">📷</span>
                </div>

                <p className="text-sm tracking-wide uppercase mt-3">
                  Image Placeholder
                </p>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-white/40" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <h2
                  className="text-3xl md:text-4xl leading-tight font-black text-brand-purple"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {service.name}
                </h2>

                <Link
                  href="/booking"
                  className="mt-3 inline-flex items-center gap-1 text-brand-purple font-extrabold text-sm hover:underline"
                >
                  Book Now <span aria-hidden="true">›</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Images */}
        <div className="flex flex-col gap-6 mt-20">
          <Image
            src="/images/servicespricing.jpg"
            alt="Service Pricing"
            width={600}
            height={800}
            className="w-full rounded-2xl"
          />

          <Image
            src="/images/bundlepricing.jpg"
            alt="Bundle Pricing"
            width={600}
            height={800}
            className="w-full rounded-2xl"
          />
        </div>
      </div>

      {/* Contact */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="pt-14 pb-16 md:pb-24 relative"
      >
        {/* Desktop Flower */}
        <div
          className="hidden md:block absolute right-0 top-1/2 translate-y-25 opacity-80 pointer-events-none rotate-180"
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
            className="w-28 h-auto"
          />
        </div>

        {/* Heading */}
        <div className="text-center pb-20 relative z-10">
          <h2
            id="contact-heading"
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="text-4xl md:text-5xl font-semibold text-brand-purple"
          >
            Contact
          </h2>

          <p className="mt-3 text-lg md:text-xl text-brand-purple-light/60 tracking-wide">
            Reach out today!
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <form aria-label="Contact form" className="space-y-6 w-full">
            {/* Name */}
            <div>
              <p className="font-bold text-brand-purple-dark mb-8">
                Name (Required)
              </p>

              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="contact-firstname"
                    className="text-sm text-brand-purple-dark block mb-1"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="contact-firstname"
                    type="text"
                    required
                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-brand-purple transition-colors bg-transparent"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="contact-lastname"
                    className="text-sm text-brand-purple-dark block mb-1"
                  >
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

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="text-sm text-brand-purple-dark block mb-1"
              >
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
              <label
                htmlFor="contact-message"
                className="text-brand-purple-dark text-sm font-medium block mb-1"
              >
                Message
              </label>

              <p className="text-gray-400 text-xs mb-2">
                Reach out for any questions or concerns.
              </p>

              <textarea
                id="contact-message"
                rows={5}
                className="w-full bg-[#E6F4F2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-colors resize-none"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-brand-purple-dark text-white font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition-all"
              >
                Contact
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}