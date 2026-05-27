"use client";


import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const mainLinks = [
 { href: "/", label: "Home" },
 { href: "/about", label: "About Us" },
 { href: "/contact", label: "Contact" },
 { href: "/services", label: "Services" },
 { href: "/booking", label: "Book an Appointment" },
];


export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const pathname = usePathname();


 const isActive = (href) => pathname === href;


 const linkClasses = (href) =>
   `text-sm font-medium transition-colors hover:text-amber-200 ${
     isActive(href) ? "text-amber-300" : ""
   }`;


 return (
   <nav
     aria-label="Main navigation"
     className="bg-[#AE75DA] text-white sticky top-0 z-50"
   >
     <div className="max-w-7xl mx-auto px-6 lg:px-8">
       <div className="flex items-center justify-between h-16">


         {/* Mobile Hamburger */}
         {!isOpen && (
           <button
             className="md:hidden flex items-center justify-center w-8 h-8 z-50"
             onClick={() => setIsOpen(true)}
             aria-label="Open navigation menu"
           >
             <div className="flex flex-col justify-center gap-1.5">
               <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
               <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
               <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
             </div>
           </button>
         )}


         {/* Logo */}
         <Link
           href="/"
           aria-label="Paddu's Glam Haven — Home"
           className="flex flex-col text-[#FFF19B] md:items-start items-center"
         >
           <span className="font-script text-2xl leading-tight">
             Paddu&apos;s
           </span>


           <span className="text-[8px] tracking-[0.25em] uppercase -mt-1 opacity-80">
             Glam Haven
           </span>
         </Link>


         {/* Desktop Navigation */}
         <div className="hidden md:flex items-center gap-8">


           <Link href="/" className={linkClasses("/")}>
             Home
           </Link>


           <Link href="/contact" className={linkClasses("/contact")}>
             Contact
           </Link>


           <Link href="/services" className={linkClasses("/services")}>
             Services
           </Link>


           <Link href="/booking" className={linkClasses("/booking")}>
             Book an Appointment
           </Link>


           <span className="text-white/30">|</span>


           <Link href="/about" className={linkClasses("/about")}>
             About Us
           </Link>


         </div>


         {/* Spacer for mobile */}
         <div className="md:hidden w-8" />


       </div>
     </div>


     {/* Mobile Fullscreen Menu */}
     <div
       className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
         isOpen
           ? "opacity-100 pointer-events-auto"
           : "opacity-0 pointer-events-none"
       }`}
     >


       {/* Purple Top Bar */}
       <div className="bg-[#AE75DA] h-16 flex items-center justify-center relative">


         {/* Close Button */}
         <button
           onClick={() => setIsOpen(false)}
           className="absolute left-6 text-[#FFF19B] text-2xl font-light"
           aria-label="Close navigation menu"
         >
           x
         </button>


         {/* Center Logo */}
         <Link
           href="/"
           className="flex flex-col items-center text-[#FFF19B]"
           onClick={() => setIsOpen(false)}
         >
           <span className="font-script text-2xl leading-tight">
             Paddu&apos;s
           </span>


           <span className="text-[8px] tracking-[0.25em] uppercase -mt-1 opacity-80">
             Glam Haven
           </span>
         </Link>


       </div>


       {/* Mobile Links */}
       <div className="flex flex-col items-center text-center">


         {mainLinks.map((link, i) => (
           <Link
             key={i}
             href={link.href}
             onClick={() => setIsOpen(false)}
             className={`w-full py-7 text-[20px] font-medium transition-colors duration-200 text-brand-purple-dark hover:bg-[#E6F4F2] ${
               pathname === link.href
                 ? "bg-[#E6F4F2]"
                 : "bg-white"
             }`}
           >
             {link.label}
           </Link>
         ))}


       </div>


     </div>
   </nav>
 );
}

