'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { useT } from '@/lib/translations/use-translations';

export function Footer() {
  const { t } = useT();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Contact Information */}
          <div className="flex items-center gap-2">
            <span className="font-semibold">{t.footer.companyName}</span>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-400">{t.common.contact}:</span>
            <a
              href="mailto:info@jmservicedigital.com"
              className="text-sm text-gray-400 hover:text-[#0080FF] transition-colors flex items-center gap-1"
            >
              <Mail size={16} />
              info@jmservicedigital.com
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-[#0080FF] transition-colors"
            >
              {t.footer.privacyPolicy}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-[#0080FF] transition-colors"
            >
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
