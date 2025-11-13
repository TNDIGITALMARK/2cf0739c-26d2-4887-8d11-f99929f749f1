export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
          <div className="prose prose-lg">
            <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using the services of JM Service Digital, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">2. Services</h2>
            <p className="text-gray-600 mb-6">
              JM Service Digital provides digital services including but not limited to website development, app development, video editing, logo design, bot creation, and community management. Services are provided as described in individual proposals and contracts.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">3. Payment Terms</h2>
            <p className="text-gray-600 mb-6">
              Payment terms will be outlined in individual project proposals. Typically, we require a deposit before commencing work and final payment upon project completion. All fees are non-refundable unless otherwise specified in writing.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              Upon full payment, clients receive ownership of the final deliverables. However, JM Service Digital retains the right to showcase completed work in our portfolio unless otherwise agreed in writing.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">5. Project Timeline</h2>
            <p className="text-gray-600 mb-6">
              Project timelines are estimates and may be adjusted based on project complexity, client feedback cycles, and unforeseen circumstances. We will communicate any timeline changes promptly.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">6. Revisions</h2>
            <p className="text-gray-600 mb-6">
              Each project includes a specified number of revision rounds as outlined in the proposal. Additional revisions beyond the agreed scope may incur additional charges.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">7. Client Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              Clients are responsible for providing necessary materials, feedback, and approvals in a timely manner. Delays in client response may affect project timelines.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              JM Service Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">9. Termination</h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate a project agreement with written notice. In the event of termination, the client is responsible for payment for work completed up to the termination date.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">10. Modifications</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website.
            </p>

            <h2 className="text-2xl font-bold text-black mb-4">11. Contact</h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms of Service, please contact us at info@jmservicedigital.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
