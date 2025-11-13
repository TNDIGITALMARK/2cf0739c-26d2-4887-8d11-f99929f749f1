'use client';

import Link from 'next/link';
import { Monitor, Palette, Video, Smartphone, Bot, Users } from 'lucide-react';
import { ServiceCard } from '@/components/service-card';
import { useT } from '@/lib/translations/use-translations';

export default function HomePage() {
  const { t } = useT();

  const services = [
    {
      icon: Monitor,
      title: t.services.websiteCreation.title,
      description: t.services.websiteCreation.description
    },
    {
      icon: Palette,
      title: t.services.logoDesign.title,
      description: t.services.logoDesign.description
    },
    {
      icon: Video,
      title: t.services.videoEditing.title,
      description: t.services.videoEditing.description
    },
    {
      icon: Smartphone,
      title: t.services.appDevelopment.title,
      description: t.services.appDevelopment.description
    },
    {
      icon: Bot,
      title: t.services.botCreation.title,
      description: t.services.botCreation.description
    },
    {
      icon: Users,
      title: t.services.communityManagement.title,
      description: t.services.communityManagement.description
    },
    {
      icon: Palette,
      title: t.services.flyerDesign.title,
      description: t.services.flyerDesign.description
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4">
              {t.home.hero.title}
            </h1>

            {/* Tagline */}
            <p className="text-lg lg:text-xl font-normal tracking-widest uppercase text-black mb-4">
              {t.home.hero.tagline}
            </p>

            {/* Subheading */}
            <p className="text-base lg:text-lg text-gray-600 mb-12">
              {t.home.hero.subtitle}
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/portfolio"
                className="inline-block px-8 py-3 bg-[#0080FF] text-white text-sm font-semibold rounded-lg hover:bg-[#0066CC] transition-colors"
              >
                {t.common.viewOurWork}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              {t.home.valueProposition.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t.home.valueProposition.subtitle}
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              {t.home.valueProposition.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
            {t.home.servicesSection.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0080FF] transition-colors">
              <Monitor className="w-12 h-12 text-[#0080FF] mb-4" strokeWidth={2} />
              <h3 className="text-xl font-semibold text-black mb-3">{t.services.websiteCreation.title}</h3>
              <p className="text-gray-600">
                {t.services.websiteCreation.description}
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0080FF] transition-colors">
              <Palette className="w-12 h-12 text-[#0080FF] mb-4" strokeWidth={2} />
              <h3 className="text-xl font-semibold text-black mb-3">{t.services.logoDesign.title}</h3>
              <p className="text-gray-600">
                {t.services.logoDesign.description}
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0080FF] transition-colors">
              <Video className="w-12 h-12 text-[#0080FF] mb-4" strokeWidth={2} />
              <h3 className="text-xl font-semibold text-black mb-3">{t.services.videoEditing.title}</h3>
              <p className="text-gray-600">
                {t.services.videoEditing.description}
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0080FF] transition-colors">
              <Smartphone className="w-12 h-12 text-[#0080FF] mb-4" strokeWidth={2} />
              <h3 className="text-xl font-semibold text-black mb-3">{t.services.appDevelopment.title}</h3>
              <p className="text-gray-600">
                {t.services.appDevelopment.description}
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0080FF] transition-colors">
              <Bot className="w-12 h-12 text-[#0080FF] mb-4" strokeWidth={2} />
              <h3 className="text-xl font-semibold text-black mb-3">{t.services.botCreation.title}</h3>
              <p className="text-gray-600">
                {t.services.botCreation.description}
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0080FF] transition-colors">
              <Users className="w-12 h-12 text-[#0080FF] mb-4" strokeWidth={2} />
              <h3 className="text-xl font-semibold text-black mb-3">{t.services.communityManagement.title}</h3>
              <p className="text-gray-600">
                {t.services.communityManagement.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0080FF] py-20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t.home.cta.title}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t.home.cta.subtitle}
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-[#0080FF] text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t.home.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}
