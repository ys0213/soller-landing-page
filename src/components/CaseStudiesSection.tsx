import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="relative h-auto min-h-[80vh] bg-gradient-to-br from-white via-white to-white overflow-hidden">
      <div className="grid lg:grid-cols-2 h-full items-stretch">
        {/* Left Side - Images */}
        <div className="relative flex items-center justify-center py-8 lg:py-16">
          {/* Main Image */}
          <div className="relative z-10">
            <img
              src="/Images/CaseStudiesImage1.png"
              alt="Case study main"
              className="w-3/4 h-auto object-contain mx-auto"
            />
          </div>
          
          {/* Overlay Image - Hidden on mobile */}
          <div className="absolute top-0 left-0 bottom-0 w-[650px] hidden lg:block">
            <img
              src="/Images/CaseStudiesImage2.png"
              alt="Case study overlay"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center space-y-8 lg:space-y-12 animate-fade-in-up animation-delay-300 text-center lg:text-left px-4 sm:px-6 lg:px-16 py-4 lg:py-16">
          <div className="inline-block text-orange-500 text-sm font-medium">
            Case studies
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Check how our systems have helped others
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
          
          {/* CTA Button - Hidden on mobile */}
          <div className="hidden lg:block">
            <button className="text-amber-900 px-1 py-4 font-semibold transition-colors flex items-center gap-2">
              Find Case Studies
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Right Image - Hidden on mobile */}
      <div className="absolute bottom-0 right-0 w-[568px] h-[368px] hidden lg:block">
        <img
          src="/Images/CaseStudiesImage3.png"
          alt="Case study bottom"
          className="w-full h-full object-contain object-bottom"
        />
      </div>
    </section>
  );
};

export default CaseStudiesSection;
