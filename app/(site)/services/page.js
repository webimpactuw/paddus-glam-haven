import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';

const services = [
  { name: "Group Performance" },
  { name: "Saree Draping" },
  { name: "Modeling" },
  { name: "Hosting/MC" },
  { name: "Solo Dance Performance" },
  { name: "Wedding" },
];

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

async function getServices() {
  const query = `*[_type == "service"] {
    name,
    image
  }`

  const services = await client.fetch(query);
  return services
}

async function getPricing() {
    const query = `*[_type == "serviceImages"] {
      pricing,
      bundle
    }`
  
    const prices = await client.fetch(query)
    return prices
}

export default async function ServicesPage() {
  const test = await getServices()
  const prices = await getPricing()
  return (
    <main className="relative overflow-hidden">
      {/* Background Flower */}
      <div
        className="absolute top-0 left-0 w-40 sm:w-48 md:w-64 opacity-80 pointer-events-none -rotate-12"
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20">
        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl text-brand-purple text-center font-semibold"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14 md:mt-16">
          {test.map((service) => (
            <div
              key={service.name}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] border-gray-200"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                <Image
                src={urlFor(service.image).auto("format").size(1920, 1080).url()}
                width={1000}
                height={1}
                className=""
                ></Image>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-white/40" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-5 md:p-6 z-10">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl leading-tight font-black text-brand-purple"
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

        {/* Pricing Placeholders */}
        <div className="flex flex-col gap-6 mt-16 md:mt-20">
          
          {/* Service Pricing */}
          <div className="w-full aspect-[3/4] rounded-2x flex flex-col items-center justify-center text-gray-400">
            <Image
              src={urlFor(prices[0].pricing).auto("format").size(1920, 1080).url()}
              width={1000}
              height={1}
              className=""></Image>
          </div>

          {/* Bundle Pricing */}
          <div className="w-full aspect-[3/4] rounded-2xl flex flex-col items-center justify-center text-gray-400">
            <Image
              src={urlFor(prices[0].bundle).auto("format").size(1920, 1080).url()}
              width={1000}
              height={1}
              className=""></Image>
          </div>
        </div>
      </div>

      {/* Contact */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="pt-10 md:pt-1 pb-14 md:pb-24 relative"
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
            className="w-20 sm:w-24 h-auto"
          />
        </div>

        {/* Heading */}
        <div className="text-center pb-14 md:pb-20 relative z-10">
          <h2
            id="contact-heading"
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="text-4xl md:text-5xl font-semibold text-brand-purple"
          >
            Have questions? Contact us now!
          </h2>

          <p 
           style={{ fontFamily: '"Playfair Display", serif' }}
          className="mt-3 text-base md:text-xl text-brand-purple-light/60 tracking-wide">
            Reach out today for a consulting appointment!
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
          <form aria-label="Contact form" className="space-y-6 w-full">
            {/* Name */}
            <div>
              <p className="font-bold text-brand-purple-dark mb-6 md:mb-8">
                Name (Required)
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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