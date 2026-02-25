import { generateSEO } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: `Privacy policy for ${BUSINESS.name}. Learn how we collect, use, and protect your information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-dark-800 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: February 2025</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <p>
          {BUSINESS.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>

        <h2 className="text-xl font-bold text-dark-800 mt-8">Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name, email address, phone number, and property address when you submit a contact form or request a quote</li>
          <li>Usage data and analytics through cookies and similar tracking technologies</li>
          <li>Communications between you and our team</li>
        </ul>

        <h2 className="text-xl font-bold text-dark-800 mt-8">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To provide and schedule pest control services</li>
          <li>To respond to your inquiries and customer service requests</li>
          <li>To send you service reminders or promotional communications (with your consent)</li>
          <li>To improve our website and services</li>
        </ul>

        <h2 className="text-xl font-bold text-dark-800 mt-8">Information Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.</p>

        <h2 className="text-xl font-bold text-dark-800 mt-8">Cookies</h2>
        <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.</p>

        <h2 className="text-xl font-bold text-dark-800 mt-8">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
