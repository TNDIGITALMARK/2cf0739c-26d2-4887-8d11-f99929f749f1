import Link from 'next/link';
import { Monitor, Palette, Video, Smartphone, Bot, Users, Check } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: 'Website Creation',
      tagline: 'Professional Web Solutions',
      description: 'Custom responsive websites that convert visitors into customers - starting from professional landing pages to complex e-commerce platforms',
      features: [
        'Responsive design for all devices',
        'SEO optimization',
        'Content management systems',
        'E-commerce integration',
        'Fast loading speeds',
        'Security best practices'
      ],
      priceRange: 'From $1,500'
    },
    {
      icon: Palette,
      title: 'Logo and Flyer Design',
      tagline: 'Brand Identity Excellence',
      description: 'Brand identity that makes lasting impressions - complete visual identity packages including logos, business cards, and marketing materials',
      features: [
        'Custom logo design',
        'Multiple revision rounds',
        'Brand style guide',
        'Business card design',
        'Flyer and poster design',
        'Print-ready files'
      ],
      priceRange: 'From $500'
    },
    {
      icon: Video,
      title: 'Video Editing',
      tagline: 'Professional Video Production',
      description: 'Professional video content that engages your audience - from social media clips to full promotional campaigns',
      features: [
        'Professional editing',
        'Color grading',
        'Motion graphics',
        'Audio enhancement',
        'Multi-platform optimization',
        'Fast turnaround'
      ],
      priceRange: 'From $300'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      tagline: 'Custom Application Solutions',
      description: 'Mobile and web applications built for your specific business needs - user-friendly interfaces with powerful functionality',
      features: [
        'iOS and Android apps',
        'Progressive web apps',
        'Custom functionality',
        'API integrations',
        'User authentication',
        'Cloud backend'
      ],
      priceRange: 'From $5,000'
    },
    {
      icon: Bot,
      title: 'Bot Creation',
      tagline: 'Intelligent Automation',
      description: 'Automated customer service and lead generation bots - 24/7 support that scales with your business',
      features: [
        'AI-powered responses',
        'Multi-platform integration',
        'Custom workflows',
        'Lead capture',
        'Analytics dashboard',
        'Continuous learning'
      ],
      priceRange: 'From $1,000'
    },
    {
      icon: Users,
      title: 'Community Management',
      tagline: 'Social Media Growth',
      description: 'Strategic social media presence that builds loyal audiences - content creation, engagement, and growth strategies',
      features: [
        'Content strategy',
        'Daily posting',
        'Community engagement',
        'Analytics reporting',
        'Growth optimization',
        'Brand voice development'
      ],
      priceRange: 'From $800/month'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. From concept to execution, we deliver excellence across all digital disciplines.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon and Title Side */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-[#0080FF]/10 rounded-lg">
                        <IconComponent className="w-12 h-12 text-[#0080FF]" strokeWidth={2} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-black">
                          {service.title}
                        </h2>
                        <p className="text-[#0080FF] font-medium">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-2xl font-bold text-black mb-2">
                        {service.priceRange}
                      </p>
                      <p className="text-sm text-gray-500">
                        Custom quotes available
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-3 bg-[#0080FF] text-white text-sm font-semibold rounded-lg hover:bg-[#0066CC] transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>

                  {/* Features Side */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="bg-white border border-gray-200 rounded-lg p-8">
                      <h3 className="text-xl font-semibold text-black mb-6">
                        What's Included
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="mt-0.5">
                              <Check className="w-5 h-5 text-[#0080FF]" strokeWidth={2.5} />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven workflow that ensures quality results and clear communication every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0080FF] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Discovery
              </h3>
              <p className="text-gray-600 text-sm">
                We learn about your goals, requirements, and vision for the project
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0080FF] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Planning
              </h3>
              <p className="text-gray-600 text-sm">
                Detailed proposal with timeline, deliverables, and transparent pricing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0080FF] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Execution
              </h3>
              <p className="text-gray-600 text-sm">
                Professional delivery with regular updates and revision opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0080FF] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Support
              </h3>
              <p className="text-gray-600 text-sm">
                Ongoing maintenance and support to ensure continued success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0080FF] py-20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote for your project.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-[#0080FF] text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            GET YOUR QUOTE
          </Link>
        </div>
      </section>
    </div>
  );
}
