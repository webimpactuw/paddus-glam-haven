import Link from "next/link";

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-6 h-6 rounded-full bg-white text-brand-purple-dark flex items-center justify-center text-xs hover:brightness-95 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple-dark"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="bg-brand-card border-t border-brand-purple-light text-brand-purple-dark"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-[3fr_1fr_1fr_1fr] gap-8 mb-10">
          
          {/* Logo & Socials */}
          <div>
            <Link href="/" className="inline-flex flex-col">
             <span className="font-script text-4xl tracking-[0.1em] leading-tight">
                Prerna
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase -mt-0.5">
                MakeUp Studio
              </span>
            </Link>

            <div className="flex gap-4.5 mt-4">
              <SocialIcon label="Facebook">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </SocialIcon>

              <SocialIcon label="Twitter">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </SocialIcon>

              <SocialIcon label="Instagram">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/#services" className="hover:text-brand-purple">Service</Link></li>
              <li><Link href="#" className="hover:text-brand-purple">Course</Link></li>
              <li><Link href="#" className="hover:text-brand-purple">Appointment</Link></li>
              <li><Link href="#" className="hover:text-brand-purple">Business Relation</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-brand-purple">Events</Link></li>
              <li><Link href="#" className="hover:text-brand-purple">Invite a friend</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold mb-4">Socials</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-brand-purple">Instagram</Link></li>
              <li><Link href="#" className="hover:text-brand-purple">Twitter</Link></li>
              <li><Link href="#" className="hover:text-brand-purple">Facebook</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
       <div className="border-t border-[#E5E7EB] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>&copy;2022 Paddu&apos;s Glam Haven. All rights reserved</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-purple">Privacy &amp; Policy</Link>
            <Link href="#" className="hover:text-brand-purple">Terms &amp; Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}