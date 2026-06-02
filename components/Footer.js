import Link from "next/link";

function SocialIcon({ children, label }) {
  return (
    <a
      href="https://www.instagram.com/paddusglamhaven/"
      aria-label={label}
      className="w-8 h-8 rounded-full bg-white text-brand-purple-dark flex items-center justify-center shadow-md hover:brightness-95 transition-all"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="bg-[#DCC6E6] text-brand-purple"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-10 pb-12">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row md:gap-40 items-start">

          {/* Left Side */}
          <div className="flex flex-col items-start md:items-center w-full md:w-auto relative">

            <Link
              href="/"
              className="inline-flex flex-col text-left md:text-center"
            >
              <span className="font-script text-5xl text-brand-purple leading-none">
                Paddu&apos;s
              </span>

              <span className="text-[12px] tracking-[0.30em] uppercase text-brand-purple">
                Glam Haven
              </span>
            </Link>

            {/* Instagram */}
            <div className="flex items-center gap-3 mt-5 md:justify-center md:w-full absolute right-0 top-0 md:static">

              <SocialIcon label="Instagram">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </SocialIcon>

              <p className="text-sm text-brand-purple md:block hidden">
                @paddusglamhaven
              </p>

            </div>
          </div>

          {/* Right Side Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 text-brand-purple font-semibold mt-20 md:mt-0 md:gap-x-50 md:ml-150">

            <Link
              href="/about"
              className="order-1 hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              About Us
            </Link>

            <Link
              href="/services"
              className="order-2 md:order-3 hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              Services
            </Link>

            <Link
              href="/"
              className="order-3 md:order-2 hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              Home
            </Link>

            <Link
              href="/contact"
              className="order-4 hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              Contact
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6">

        {/* Mobile Policy Links */}
        <div className="flex md:hidden gap-10 flex-wrap justify-start px-4 text-sm text-brand-purple mb-3">
          <Link
            href="#"
            className="hover:opacity-70 transition-opacity font-bold"
          >
            Privacy &amp; Policy
          </Link>

          <Link
            href="#"
            className="hover:opacity-70 transition-opacity font-bold"
          >
            Terms &amp; Condition
          </Link>
        </div>

        {/* Gray Line + Content */}
        <div className="border-t border-brand-purple/10 pt-4">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-brand-purple">

            <p className="font-bold text-left md:text-left">
              ©2022 Paddu&apos;s Glam Haven. All rights reserved
            </p>

            {/* Desktop Policy Links */}
            <div className="hidden md:flex gap-10 relative md:left-30">
              <Link
                href="#"
                className="hover:opacity-70 transition-opacity font-bold"
              >
                Privacy &amp; Policy
              </Link>

              <Link
                href="#"
                className="hover:opacity-70 transition-opacity font-bold"
              >
                Terms &amp; Condition
              </Link>
            </div>

          </div>
        </div>

      </div>

    </footer>
  );
}