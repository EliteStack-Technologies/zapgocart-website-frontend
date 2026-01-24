"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    businessName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Optionally show a success message or reset form
        alert('Message sent successfully!');
        setFormData({
          lastName: '',
          firstName: '',
          businessName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('An error occurred.');
    }
  };

  return (
    <section className="xl:py-20 lg:py-16 md:py-12 py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-indigo-900  overflow-hidden" id='trial'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 grid grid-cols-6 gap-2">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col justify-center items-center">
          <h2 className="lg:text-4xl xl:text-5xl md:text-3xl text-2xl font-bold text-white mb-6 w-[50%]">
           Get in
              touch
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Reach out, and let's create a universe of possibilities together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's connect constellations
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Business Name */}
              <div>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r  bg-white text-[#333] rounded-lg font-semibold  flex items-center justify-center space-x-2"
              >
                <span>Send it </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Side - Image and Quote */}
          <div className="relative">
            <div className="relative z-10">
              <Image 
                src="/order_mockup.png" 
                alt="Contact Illustration" 
                width={500} 
                height={600}
                className="object-contain mx-auto"
                priority
              />
            </div>
            
          
            </div>
        </div>
      </div>
    </section>
  );
}