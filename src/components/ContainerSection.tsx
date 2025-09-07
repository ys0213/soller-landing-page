import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContainerSection: React.FC = () => {
  return (
    <section 
      className="relative py-16 lg:py-20 overflow-hidden bg-purple-900 lg:bg-purple-700"
    >
      {/* Background Images */}
      <div className="absolute top-0 -translate-y-[120px] left-0 w-96 h-96 lg:w-[580px] lg:h-[580px] hidden lg:block">
        <img src="/Images/Container2.png" alt="Decorative" className="w-full h-full object-contain" />
      </div>
      
      <div className="absolute top-0 right-0 w-[640px] h-auto hidden lg:block">
        <img src="/Images/Container3.png" alt="Decorative" className="w-full h-full object-contain" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-96 h-auto left-0 lg:left-10 transform -translate-x-32 lg:translate-x-0">
        <img src="/Images/Container4.png" alt="Decorative" className="w-full h-full object-contain" />
      </div>
      
      <div className="absolute bottom-0 translate-y-[120px] right-0 w-80 h-80 hidden lg:block">
        <img src="/Images/Container5.png" alt="Decorative" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <p className="text-yellow-400 text-sm font-medium mb-2">
              Get the Sun to power your home
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              All the power that you need for your house is now available
            </h2>
            <button className="bg-yellow-400 text-amber-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2 mx-auto mb-2">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-white text-sm">
              Egestas fringilla aliquam leo
            </p>
          </div>
          
          {/* Laptop Image */}
          <div className="flex items-end">
            <img
              src="/Images/Container1.png"
              alt="Laptop"
              className="w-full max-w-2xl h-auto"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-4xl">
            <p className="text-yellow-400 text-sm font-medium mb-2">
              Get the Sun to power your home
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              All the power that you need for your house is now available
            </h2>
          </div>

          {/* Right Content - CTA */}
          <div className="flex flex-col items-end">
            <button className="bg-yellow-400 text-amber-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2 mb-2">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-amber-900 text-sm -translate-x-[10px]">
              Egestas fringilla aliquam leo
            </p>
          </div>
        </div>

        {/* Centered Laptop Image - Desktop Only */}
        <div className="hidden lg:flex justify-center mt-12 lg:mt-16">
          <img
            src="/Images/Container1.png"
            alt="Laptop"
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ContainerSection;
