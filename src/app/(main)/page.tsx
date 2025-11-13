import Link from 'next/link';
import { Monitor, Palette, Video, Smartphone, Bot, Users, MessageSquare, Sparkles } from 'lucide-react';
import { ServiceCard } from '@/components/service-card';

export default function HomePage() {
  const services = [
    {
      icon: Monitor,
      title: 'Website Creation',
      description: 'Custom responsive websites that convert visitors into customers - from professional landing pages to complex e-commerce platforms'
    },
    {
      icon: Palette,
      title: 'Logo Design',
      description: 'Brand identity that makes lasting impressions - complete visual identity packages including logos, business cards, and marketing materials'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video content that engages your audience - from social media clips to full promotional campaigns'
    },
    {
      icon: Sparkles,
      title: 'Video Editing',
      description: 'Professional video content that engages your audience - from social media clips to full promotional campaigns'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Mobile and web applications built for your specific business needs - user-friendly interfaces with powerful functionality'
    },
    {
      icon: Bot,
      title: 'Bot Creation',
      description: 'Automated customer service and lead generation bots - 24/7 support that scales with your business'
    },
    {
      icon: Bot,
      title: 'Bot Creation',
      description: 'Automated customer service and lead generation bots - 24/7 support that scales with your business'
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Strategic social media presence that builds loyal audiences - content creation, engagement, and growth strategies'
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
              JM Service Digital
            </h1>

            {/* Tagline */}
            <p className="text-lg lg:text-xl font-normal tracking-widest uppercase text-black mb-4">
              INNOVATE. CREATE. DIGITIZE.
            </p>

            {/* Subheading */}
            <p className="text-base lg:text-lg text-gray-600 mb-12">
              Your Partner in Digital Transformation
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
                VIEW OUR WORK
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
              Transform Your Digital Presence
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              From stunning websites to powerful apps - we deliver complete digital solutions that drive real results.
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              We partner with small to medium businesses, entrepreneurs, and established companies to deliver professional results across multiple digital disciplines - all without requiring you to manage multiple vendors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0080FF] transition-colors">
              <Monitor className="w-12 h-12 text-[#0080FF] mb-4" strokeWidth={2} />
              <h3 className="text-xl font-semibold text-black mb-3">Website Creation</h3>
              <p className="text-gray-600">
                Custom responsive websites that convert visitors into customers - starting from professional landing pages to complex e-commerce platforms
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0080FF] transition-colors">
              <Palette className="w-12 h-12 text-[#0080FF] mb-4" strokeWidth={2} />
              <h3 className="text-xl font-semibold text-black mb-3">Logo and Flyer Design</h3>
              <p className="text-gray-600">
                Brand identity that makes lasting impressions - complete visual identity packages including logos, business cards, and marketing materials
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0080FF] transition-colors">
              <Video className="w-12 h-12 text-[#0080FF] mb-4" strokeWidth={2} />
              <h3 className="text-xl font-semibold text-black mb-3">Video Editing</h3>
              <p className="text-gray-600">
                Professional video content that engages your audience - from social media clips to full promotional campaigns
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0080FF] transition-colors">
              <Smartphone className="w-12 h-12 text-[#0080FF] mb-4" strokeWidth={2} />
              <h3 className="text-xl font-semibold text-black mb-3">App Development</h3>
              <p className="text-gray-600">
                Mobile and web applications built for your specific business needs - user-friendly interfaces with powerful functionality
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0080FF] transition-colors">
              <Bot className="w-12 h-12 text-[#0080FF] mb-4" strokeWidth={2} />
              <h3 className="text-xl font-semibold text-black mb-3">Bot Creation</h3>
              <p className="text-gray-600">
                Automated customer service and lead generation bots - 24/7 support that scales with your business
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0080FF] transition-colors">
              <Users className="w-12 h-12 text-[#0080FF] mb-4" strokeWidth={2} />
              <h3 className="text-xl font-semibold text-black mb-3">Community Management</h3>
              <p className="text-gray-600">
                Strategic social media presence that builds loyal audiences - content creation, engagement, and growth strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0080FF] py-20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals. Get started with a free consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-[#0080FF] text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            GET STARTED
          </Link>
        </div>
      </section>
    </div>
  );
}
