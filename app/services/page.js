import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Group Performance", image: "/images/group perfomance.JPEG" },
  { name: "Saree Draping", image: "/images/saree draping.JPEG" },
  { name: "Modeling", image: "/images/Modeling.JPEG" },
  { name: "Hosting/MC", image: "/images/Hosting MC.JPEG" },
  { name: "Solo Dance Performance", image: "/images/solo dance.JPEG" },
  { name: "Wedding", image: "/images/wedding.png" },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 md:w-64 opacity-80 pointer-events-none -rotate-12" aria-hidden="true">
        <Image src="/images/orchid.png" alt="" width={600} height={800} className="w-full h-auto" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="font-script text-5xl md:text-6xl text-brand-purple text-center"
            style = {{ fontFamily : '"Playfair Display", serif'}}
        >
          Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
          {services.map((service) => (
            <div
              key={service.name}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-white/50" />
              <div className="absolute top-1/3 left-0 p-6">
                <h2
                  className="text-3xl md:text-4xl leading-tight font-black text-brand-purple"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {service.name}
                </h2>
                <Link
                  href="/booking"
                  className="mt-2 inline-flex items-center gap-1 text-brand-purple font-extrabold text-sm hover:underline"
                >
                  Book Now <span aria-hidden="true">›</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing images */}
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
        className="py-10 md:py-4 relative overflow-hidden"
      >
        <div
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/3 opacity-80 pointer-events-none rotate-180"
          aria-hidden="true"
        >
          <Image src="/images/lily.png" alt="" width={500} height={350} className="w-[420px] h-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl  text-brand-purple text-center font-black"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Have questions? Contact us now for a consulting appointment!
        </h2>
        <p className="text-center text-gray-400 text-sm tracking-wide mt-3 uppercase mb-14" style={{ fontFamily: '"Playfair Display", serif' }}>
          Let us know your requirements and we&apos;ll get back to you.
        </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-brand-purple-light rounded-3xl p-12 md:p-16 flex items-center justify-center aspect-square max-w-sm mx-auto w-full">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <svg className="w-16 h-16 text-brand-purple" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                </svg>
              </div>
            </div>

            <form aria-label="Contact form" className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-firstname" className="sr-only">First Name</label>
                  <input
                    id="contact-firstname"
                    type="text"
                    placeholder="First Name"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-lastname" className="sr-only">Last Name</label>
                  <input
                    id="contact-lastname"
                    type="text"
                    placeholder="Last Name"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-budget" className="sr-only">Total Budget</label>
                <input
                  id="contact-budget"
                  type="text"
                  placeholder="Email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Your Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-purple text-white font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}