"use client";

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ is open by default

  const faqs = [
    {
      question: "How do I set up my ZapGoCart storefront on WhatsApp?",
      answer: "Getting started is easy! Just sign up, connect your WhatsApp number, and add your products. Your customers will instantly receive a product page when they message you on WhatsApp."
    },
    {
      question: "What does it cost to use ZapGoCart?",
      answer: "ZapGoCart offers simple, transparent pricing with no hidden fees. Choose a plan that fits your business, whether you’re just starting out or scaling up. Contact us for details!"
    },
    {
      question: "Can I use ZapGoCart for both retail and wholesale orders?",
      answer: "Absolutely! ZapGoCart is designed for both B2C and B2B workflows, so you can handle retail and wholesale inquiries with ease."
    },
    {
      question: "How do customers place orders through WhatsApp?",
      answer: "Customers simply message you on WhatsApp and receive a product page instantly. They can browse and submit orders without needing to go through a traditional checkout."
    },
    {
      question: "How are orders confirmed and fulfilled?",
      answer: "Every order is confirmed by you or your team via WhatsApp. You can chat with customers, confirm availability and pricing, and then fulfill the order."
    },
    {
      question: "What integrations does ZapGoCart support?",
      answer: "ZapGoCart can connect with your existing tools and workflows. Reach out to our team to learn more about available integrations and custom options."
    },
    {
      question: "What kind of support is available?",
      answer: "We offer friendly onboarding, helpful guides, and responsive support. If you ever need help, our team is just a message away!"
    },
    {
      question: "How do I get automated order updates?",
      answer: "ZapGoCart sends automated order acknowledgements and status notifications, so you and your customers always know what’s happening."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="xl:py-20 lg:py-16 md:py-12 py-10 px-4 sm:px-6 lg:px-8 bg-white" id='faq'>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Info */}
          <div className="lg:sticky lg:top-20">
            {/* FAQ Badge */}
    

            {/* Heading */}
            <h2 className="lg:text-4xl xl:text-5xl md:text-3xl text-2xl font-bold text-gray-900 mb-6 leading-tight">
              Frequently asked questions
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our frequently asked questions to learn more about ZapGoCart’s setup, pricing, features, and more.
            </p>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-4">
                    {/* Blue Left Border Indicator */}
                    <div className={`w-1 h-6 rounded-full ${openFAQ === index ? 'bg-blue-600' : 'bg-gray-300'} flex-shrink-0 mt-1`}></div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 pr-8">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Chevron Icon */}
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div className={`transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <div className="pl-5"> {/* Align with question text */}
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}