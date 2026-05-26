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
      <div className="absolute top-0 left-0 w-48 md:w-64 opacity-80 pointer-events-none -rotate-12" aria-hidden="true">
        <Image src="/images/orchid.png" alt="" width={600} height={800} className="w-full h-auto" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="font-script text-5xl md:text-6xl text-brand-purple text-center">
          Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
          {services.map((service) => (
            <div
              key={service.name}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-gray-200"
            >
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="font-script text-3xl md:text-4xl text-brand-purple leading-tight">
                  {service.name}
                </h2>
                <Link
                  href="/booking"
                  className="mt-2 inline-flex items-center gap-1 text-brand-purple font-medium text-sm hover:underline"
                >
                  Book Now <span aria-hidden="true">›</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}