'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black">
            JM Service Digital
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-black hover:text-[#0080FF] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-black hover:text-[#0080FF] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-black hover:text-[#0080FF] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#0080FF] text-white text-sm font-semibold rounded-lg hover:bg-[#0066CC] transition-colors"
            >
              GET STARTED
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black hover:text-[#0080FF]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-black hover:text-[#0080FF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-black hover:text-[#0080FF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-medium text-black hover:text-[#0080FF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[#0080FF] text-white text-sm font-semibold rounded-lg hover:bg-[#0066CC] transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                GET STARTED
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
