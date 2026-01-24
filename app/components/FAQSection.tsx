"use client";

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ is open by default

  const faqs = [
    {
      question: "What is Neuros and how does it differ from other analytics platforms?",
      answer: "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes."
    },
    {
      question: "How does the AI-driven predictive analytics feature work?",
      answer: "Our AI-driven predictive analytics uses machine learning algorithms to analyze historical data patterns and predict future trends. It continuously learns from your data to provide increasingly accurate forecasts for revenue, customer behavior, and market opportunities."
    },
    {
      question: "Is my data secure with Neuros?",
      answer: "Yes, data security is our top priority. We use enterprise-grade encryption, secure data centers, and comply with industry standards including SOC 2 and GDPR to ensure your data remains protected at all times."
    },
    {
      question: "Can I integrate Neuros with other tools and platforms I currently use?",
      answer: "Absolutely! Neuros offers seamless integrations with over 100+ popular tools including CRMs, ERPs, marketing platforms, and databases. Our API also allows for custom integrations to fit your specific workflow needs."
    },
    {
      question: "How is the pricing structured for Neuros? Are there any hidden fees?",
      answer: "Our pricing is transparent with no hidden fees. We offer flexible plans based on your business size and needs, with options for monthly or annual billing. All features are clearly outlined in each plan with no surprise charges."
    },
    {
      question: "I'm new to business analytics. Does Neuros offer any support or tutorials?",
      answer: "Yes! We provide comprehensive onboarding, detailed documentation, video tutorials, and 24/7 customer support. Our team also offers personalized training sessions to help you get the most out of Neuros analytics platform."
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
              Explore our frequently asked questions to learn more about Neuros's features, security, integration capabilities, and more
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