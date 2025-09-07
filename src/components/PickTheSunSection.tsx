import React from 'react';
import { ArrowRight } from 'lucide-react';

const PickTheSunSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="w-full">
        {/* Top Content */}
        <div className="px-4 sm:px-6 lg:px-16 text-center mb-12">
          <p className="text-orange-500 text-sm font-medium mb-2">
            No more waste
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pick the Sun
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
          </p>
        </div>

        {/* Bottom Image */}
        <div className="w-full">
          <div className="relative">
            <img
              src={process.env.PUBLIC_URL + "/Images/Section2.png"}
              alt="Solar panels installation"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickTheSunSection;
