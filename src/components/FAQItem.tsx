'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left hover:bg-gray-50 px-4 -mx-4 rounded-lg transition-colors duration-200 group"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-dark-800 group-hover:text-primary-700 transition-colors pr-4 text-sm sm:text-base">
          {question}
        </span>
        <svg
          className={`h-5 w-5 text-primary-500 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Smooth height transition */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <p className="pb-5 px-0 text-gray-600 leading-relaxed text-sm sm:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}
