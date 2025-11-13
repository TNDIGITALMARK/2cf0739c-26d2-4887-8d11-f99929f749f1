"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

export function NavigationFrancaise() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/a-propos" },
    {
      name: "Services",
      href: "#",
      hasDropdown: true,
      items: [
        { name: "Développement Web", href: "/services/web" },
        { name: "Applications Mobiles", href: "/services/mobile" },
        { name: "Consulting", href: "/services/consulting" },
        { name: "Support & Maintenance", href: "/services/support" },
      ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container-fr">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VotreMarque
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-bleu-principal transition-colors py-2">
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 animate-fade-in">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-bleu-clair hover:text-bleu-fonce transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-base font-medium text-gray-700 hover:text-bleu-principal transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-base font-semibold hover:text-bleu-principal"
            >
              Se Connecter
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-base font-semibold px-6 shadow-lg hover:shadow-xl transition-all">
              Commencer
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white animate-fade-in">
          <div className="container-fr py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-bleu-clair hover:text-bleu-fonce rounded-lg transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-bleu-clair hover:text-bleu-fonce rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-bleu-clair hover:text-bleu-fonce rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full text-base font-semibold"
              >
                Se Connecter
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold">
                Commencer
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
