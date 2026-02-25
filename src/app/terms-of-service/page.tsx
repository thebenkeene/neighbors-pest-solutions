import { generateSEO } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Terms of Service",
  description: `Terms of service for ${BUSINESS.name}. Read our terms and conditions.`,
  path: "/terms-of-service",
});

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-dark-800 mb-2">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: February 2025</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <p>
          By accessing or using the services of {BUSINESS.name}, you agree to be bound by the following Terms of Service. Please read them carefully before engaging our pest control services.
        </p>

        <h2 className="text-xl font-bold text-dark-800 mt-8">Services</h2>
        <p>{BUSINESS.name} provides professional pest control services for residential and commercial properties throughout San Diego County, CA. All services are performed by licensed and insured technicians.</p>

        <h2 className="text-xl font-bold text-dark-800 mt-8">Appointments & Cancellations</h2>
        <p>We ask that you provide at least 24 hours&apos; notice if you need to reschedule or cancel a service appointment. Late cancellations may be subject to a cancellation fee.</p>

        <h2 className="text-xl font-bold text-dark-800 mt-8">Satisfaction Guarantee</h2>
        <p>We stand behind our work. If pests return after we have treated your property, we will re-treat the affected areas at no additional cost within the specified guarantee period. Contact us within the guarantee window to schedule a re-treatment.</p>

        <h2 className="text-xl font-bold text-dark-800 mt-8">Liability</h2>
        <p>{BUSINESS.name} carries full liability insurance. We are not responsible for pre-existing property damage or pest infestations beyond the scope of the agreed-upon treatment plan.</p>

        <h2 className="text-xl font-bold text-dark-800 mt-8">Payment</h2>
        <p>Payment is due at the time of service unless a billing arrangement has been agreed upon in advance. We accept major credit cards and other approved payment methods.</p>

        <h2 className="text-xl font-bold text-dark-800 mt-8">Contact Us</h2>
        <p>
          <strong>{BUSINESS.name}</strong><br />
          {BUSINESS.address.full}<br />
          <a href={BUSINESS.emailHref} className="text-primary-600 hover:underline">{BUSINESS.email}</a><br />
          <a href={BUSINESS.phoneHref} className="text-primary-600 hover:underline">{BUSINESS.phone}</a>
        </p>
      </div>
    </div>
  );
}
