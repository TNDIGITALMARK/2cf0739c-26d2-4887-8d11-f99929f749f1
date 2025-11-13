'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useT } from '@/lib/translations/use-translations';

export function Header() {
  const { t } = useT();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black">
            {t.header.companyName}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-black hover:text-[#0080FF] transition-colors"
            >
              {t.common.home}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-black hover:text-[#0080FF] transition-colors"
            >
              {t.common.services}
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-black hover:text-[#0080FF] transition-colors"
            >
              {t.common.portfolio}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#0080FF] text-white text-sm font-semibold rounded-lg hover:bg-[#0066CC] transition-colors"
            >
              {t.common.getStarted}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black hover:text-[#0080FF]"
            aria-label={t.header.menuToggle}
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
                {t.common.home}
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-black hover:text-[#0080FF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.common.services}
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-medium text-black hover:text-[#0080FF] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.common.portfolio}
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[#0080FF] text-white text-sm font-semibold rounded-lg hover:bg-[#0066CC] transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.common.getStarted}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
