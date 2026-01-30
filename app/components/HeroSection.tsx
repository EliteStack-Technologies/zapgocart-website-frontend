"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {

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
          <div className=" h-[200px] md:h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white p-1">
            <div className="relative rounded-xl overflow-hidden bg-white">
              {/* Grid Background Pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />

              {/* Floating Orbs */}
             
              {/* Video Play Button Overlay */}
              <div className="relative aspect-video flex items-center justify-center">
                  {/* <video
                    src="/intor-video.mp4"
                    controls
                    autoPlay
                    muted
                    className="w-full h-full object-cover rounded-xl"
                  /> */}
                  <Image src={'/step-5.png'} alt="zapgocart" width={900} height={600} className="w-full absolute -top-10  md:-top-18  lg:-top-32" />
      
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
