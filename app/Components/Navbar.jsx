


"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home",     href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs",    href: "/Blog" },

];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-poppins mt-5 mb-5 lg:mt-15 relative z-0 flex justify-center">
      <div className="flex flex-col items-center gap-5 w-full">

        {/* Desktop Brand */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.50, ease: "easeOut" }}
          className="text-[#E1FF01] text-2xl sm:text-4xl font-medium tracking-tight hidden sm:block"
        >
          .Porty
        </motion.h1>

        {/* Mobile Bar */}
        <div className={`sm:hidden w-full bg-[#171717] ${menuOpen ? "rounded-4xl" : "rounded-none"} overflow-hidden`}>
          <div className="flex items-center justify-between px-5 py-3">
            <span className="text-[#E1FF01] text-xl font-medium tracking-tight">.Porty</span>

            {menuOpen ? (
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl"
                aria-label="Close menu"
              >
                ✕
              </button>
            ) : (
              <button
                onClick={() => setMenuOpen(true)}
                className="text-white"
                aria-label="Open menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="px-5 pb-6 flex flex-col gap-6 overflow-hidden"
              >
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#c5c5c5] text-xl font-medium hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 bg-[#c8f400] text-[#0e0e0e] text-sm font-light px-5 py-2.5  rounded-full hover:bg-white hover:scale-105 transition-all duration-200 w-fit"
                >
                  Contact
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Nav Pill */}
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.69, ease: "easeOut" }}
          className="hidden sm:flex items-center mt-10 gap-6 sm:gap-2 bg-[#161616] border border-[#2c2c2c] rounded-full px-2 sm:px-6 lg:px-10 py-2 sm:py-3"
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[#c5c5c5] text-xs sm:text-sm font-medium px-2 sm:px-5 py-2 sm:py-2.5 rounded-full hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="#contact"
            className="flex items-center gap-1 sm:gap-2 bg-[#E1FF01] text-[#0e0e0e]  text-xs sm:text-sm font-light px-3 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-white hover:scale-105 transition-all duration-200"
          >
            Contact
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[15px] sm:h-[15px]">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.nav>

      </div>
    </div>
  );
};

export default Navbar;