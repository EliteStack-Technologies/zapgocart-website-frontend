"use client";

import { useState } from "react";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10" />

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg">
            <span className="text-sm font-medium text-gray-700">
              Commerce Infrastructure for Modern Enterprises{" "}
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8 animate-slide-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Power Your E-Commerce Empire with ZapGoCart
            </span>
          </h1>

          <p className="text-sm md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Control bulk sales, automate operations, and grow your B2B business
            from a single powerful platform.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up delay-200">
          <button className="group px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-1 flex items-center space-x-2">
            <span>Start your free trial</span>
          </button>

  
        </div>

        {/* Video/Dashboard Preview */}
        <div className="relative   max-w-5xl mx-auto animate-slide-up delay-400">
          <div className="relative md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white p-1">
            <div className="relative rounded-xl overflow-hidden bg-white">
              {/* Grid Background Pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />

              {/* Floating Orbs */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-400/40 rounded-full blur-2xl animate-float" />
              <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-purple-400/40 rounded-full blur-2xl animate-float delay-500" />

              {/* Video Play Button Overlay */}
              <div className="relative aspect-video flex items-center justify-center">
                <button
                  className="group relative"
                  onClick={() => setIsVideoPlaying(true)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
