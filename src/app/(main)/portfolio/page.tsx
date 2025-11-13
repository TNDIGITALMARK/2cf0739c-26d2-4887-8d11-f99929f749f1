import { Monitor, Palette, Video, Smartphone, Bot, Users } from 'lucide-react';
import Image from 'next/image';

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Local Restaurant Website',
      category: 'Website Creation',
      description: 'Custom responsive website with online ordering system and table reservations',
      icon: Monitor,
      image: '/placeholder-restaurant.jpg'
    },
    {
      id: 2,
      title: 'Tech Startup Brand Identity',
      category: 'Logo Design',
      description: 'Complete visual identity package including logo, business cards, and brand guidelines',
      icon: Palette,
      image: '/placeholder-logo.jpg'
    },
    {
      id: 3,
      title: 'Fitness Brand Promotional Video',
      category: 'Video Editing',
      description: 'High-energy promotional campaign video featuring testimonials and training footage',
      icon: Video,
      image: '/placeholder-video.jpg'
    },
    {
      id: 4,
      title: 'Retail Inventory App',
      category: 'App Development',
      description: 'Mobile application for real-time inventory tracking and sales management',
      icon: Smartphone,
      image: '/placeholder-app.jpg'
    },
    {
      id: 5,
      title: 'Healthcare Customer Service Bot',
      category: 'Bot Creation',
      description: 'AI-powered chatbot for appointment scheduling and patient inquiries',
      icon: Bot,
      image: '/placeholder-bot.jpg'
    },
    {
      id: 6,
      title: 'Beauty Brand Social Media Campaign',
      category: 'Community Management',
      description: '90-day social media growth campaign with content creation and engagement strategy',
      icon: Users,
      image: '/placeholder-social.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our recent work across all service categories. Each project demonstrates our commitment to delivering exceptional digital solutions that drive real results.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#0080FF] transition-all duration-300 hover:shadow-lg"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
                    <IconComponent className="w-24 h-24 text-[#0080FF] opacity-20 relative z-10" strokeWidth={1.5} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <IconComponent className="w-5 h-5 text-[#0080FF]" strokeWidth={2} />
                      <span className="text-sm font-medium text-[#0080FF]">{item.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-[#0080FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Services Showcase
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our portfolio spans across all our service offerings, demonstrating versatility and expertise in every digital discipline.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <Monitor className="w-10 h-10 text-[#0080FF] mx-auto mb-3" strokeWidth={2} />
              <p className="text-sm font-medium text-black">Websites</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <Palette className="w-10 h-10 text-[#0080FF] mx-auto mb-3" strokeWidth={2} />
              <p className="text-sm font-medium text-black">Design</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <Video className="w-10 h-10 text-[#0080FF] mx-auto mb-3" strokeWidth={2} />
              <p className="text-sm font-medium text-black">Video</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <Smartphone className="w-10 h-10 text-[#0080FF] mx-auto mb-3" strokeWidth={2} />
              <p className="text-sm font-medium text-black">Apps</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <Bot className="w-10 h-10 text-[#0080FF] mx-auto mb-3" strokeWidth={2} />
              <p className="text-sm font-medium text-black">Bots</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <Users className="w-10 h-10 text-[#0080FF] mx-auto mb-3" strokeWidth={2} />
              <p className="text-sm font-medium text-black">Social</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0080FF] py-20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us today to discuss your vision.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-[#0080FF] text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>
    </div>
  );
}
