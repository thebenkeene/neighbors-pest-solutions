'use client';

import { useState } from 'react';

const SERVICES_LIST = [
  'Ant Control', 'Bed Bug Control', 'Spider Control', 'Rodent Control',
  'Cockroach Control', 'Mosquito Control', 'Flea Control', 'Tick Control',
  'Beetle Control', 'Earwig Control', 'Carpenter Ant Control', 'Cricket Control',
  'Fly Control', 'Moth Control', 'Silverfish Control', 'Stinging Pest Control',
  'Stink Bug Control', 'Centipede & Millipede Control', 'Mite Control',
  'General Pest Inspection', 'Other',
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  pestType: string;
  address: string;
  message: string;
}

interface FieldErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: 'Residential',
    pestType: '',
    address: '',
    message: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FieldErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.pestType) newErrors.pestType = 'Please select a pest type';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', serviceType: 'Residential', pestType: '', address: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-dark-800 bg-white text-sm transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
    }`;

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">Thank you for reaching out. We&apos;ll get back to you within 1 business day, or call us at <a href="tel:+18588782847" className="font-bold underline">(858) 878-2847</a> for immediate assistance.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-sm">
          Something went wrong. Please try again or call us at <a href="tel:+18588782847" className="font-bold underline">(858) 878-2847</a>.
        </div>
      )}

      {/* Name Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-1" htmlFor="firstName">First Name *</label>
          <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} className={inputClass('firstName')} placeholder="Josh" />
          {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-1" htmlFor="lastName">Last Name *</label>
          <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} className={inputClass('lastName')} placeholder="Smith" />
          {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-1" htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={inputClass('email')} placeholder="josh@example.com" />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-1" htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass('phone')} placeholder="(619) 555-1234" />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      {/* Service Type & Pest Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-1" htmlFor="serviceType">Service Type</label>
          <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} className={inputClass('serviceType')}>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-1" htmlFor="pestType">Pest Type *</label>
          <select id="pestType" name="pestType" value={formData.pestType} onChange={handleChange} className={inputClass('pestType')}>
            <option value="">Select a pest...</option>
            {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.pestType && <p className="mt-1 text-xs text-red-600">{errors.pestType}</p>}
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-dark-700 mb-1" htmlFor="address">Property Address</label>
        <input id="address" name="address" type="text" value={formData.address} onChange={handleChange} className={inputClass('address')} placeholder="123 Main St, San Diego, CA" />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-dark-700 mb-1" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={inputClass('message')} placeholder="Tell us about your pest situation..." />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-base"
      >
        {status === 'loading' ? 'Sending...' : 'Get My Free Quote →'}
      </button>

      <p className="text-xs text-center text-gray-500">
        No spam, ever. Or call us directly at{' '}
        <a href="tel:+18588782847" className="text-primary-600 font-semibold hover:underline">(858) 878-2847</a>
      </p>
    </form>
  );
}
