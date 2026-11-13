
"use client";

import { useState } from "react";
import Link from "next/link";
import { Share2, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "How It Works", href: "/#how-it-works" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#52796F] text-white">
              <Share2 className="h-5 w-5" />
            </div>

            <span className="text-xl font-bold text-[#242B2A]">
              Share<span className="text-[#52796F]">Shelf</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#78817D] transition-colors hover:text-[#52796F]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/login"
              className="px-3 py-2 text-sm font-medium text-[#354F52] hover:text-[#52796F]"
            >
              Log in
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-[#52796F] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#354F52]"
            >
              Join Community
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#242B2A] md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="space-y-3 border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-[#242B2A] hover:text-[#52796F]"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-2 border-t border-gray-100 pt-3">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-[#52796F] py-2 text-center text-sm font-medium text-[#354F52]"
            >
              Log in
            </Link>

            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-[#52796F] py-2 text-center text-sm font-medium text-white"
            >
              Join Community
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
