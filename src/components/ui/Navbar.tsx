"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 w-full max-w-7xl mx-auto px-4">
      <div className="bg-neworange rounded-[20px] shadow-lg p-4 md:p-6 flex items-center justify-between border-2 border-black">
        <Link href="/" className="flex items-center">
          <h2 className="font-Monotage text-beige text-2xl md:text-4xl tracking-wide transition-colors duration-200 font-medium">
            JWRAPPED
          </h2>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 md:space-x-8">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`font-Monotage text-lg md:text-2xl tracking-wide transition-colors duration-200 font-medium ${
                pathname === path ? "text-green underline" : "text-beige hover:text-green"
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-beige focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
      <div className="md:hidden fixed top-16 left-0 right-0 bg-neworange rounded-lg shadow-lg py-3 px-6 z-50">
        {navItems.map(({ name, path }) => (
          <Link
            key={path}
            href={path}
            className={`block py-2 text-lg tracking-wide transition-colors duration-200 font-medium ${
              pathname === path ? "text-green underline" : "text-beige hover:text-green"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
      )}
  </div>
  );
};

export default Navbar;
