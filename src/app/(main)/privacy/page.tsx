export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
          <div className="prose prose-lg">
            <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us when you contact us through our forms or communication channels. This may include your name, email address, phone number, and project details.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you project proposals and quotes</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-black mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business, conducting business activities, or serving our users.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-6">
              You have the right to access, update, or delete your personal information at any time. Please contact us if you wish to exercise these rights.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">6. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us at info@jmservicedigital.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
