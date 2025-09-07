import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Hero Image - First, positioned at top */}
        <div className="w-full h-[340px] relative">
          <img
            src={process.env.PUBLIC_URL + "/Images/Hero_Right.png"}
            alt="Solar installation"
            className="w-full h-full object-contain object-right-top"
          />
        </div>
        
        {/* Content - Below the image */}
        <div className="px-4 sm:px-6 py-8">
          {/* Centered Text */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Get the Sun to Power Your Home
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
            </p>
            <div className="flex justify-center">
              <button className="bg-yellow-400 text-amber-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Left-aligned Testimonial */}
          <div className="text-left">
            <div>
              <p className="text-gray-700 text-sm mb-4">
                "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus."
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src={process.env.PUBLIC_URL + "/Images/User_Thumb.png"}
                  alt="Rwanda Melflor"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-900 font-semibold text-sm">Rwanda Melflor</p>
                  <p className="text-gray-600 text-xs">zerowaste.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative z-10 min-h-screen flex items-center pt-20">
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight lg:pt-12">
                Get the Sun to Power Your Home
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 mx-auto lg:mx-0 max-w-2xl">
                Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <button className="bg-yellow-400 text-amber-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2">
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Testimonial Card */}
              <div className="mt-8 max-w-md">
                <div className="p-6">
                  <p className="text-gray-700 text-sm mb-4 lg:pt-12">
                    "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus."
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={process.env.PUBLIC_URL + "/Images/User_Thumb.png"}
                      alt="Rwanda Melflor"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">Rwanda Melflor</p>
                      <p className="text-gray-600 text-xs">zerowaste.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <img
                src={process.env.PUBLIC_URL + "/Images/Hero_Right.png"}
                alt="Solar installation"
                className="w-full h-full object-cover object-top-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
