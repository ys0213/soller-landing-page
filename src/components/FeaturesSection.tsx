import React from 'react';
import { Truck, User, Trophy, PiggyBank } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'Et mauris',
      description: 'Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.'
    },
    {
      icon: Trophy,
      title: 'Eget sit',
      description: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'
    },
    {
      icon: User,
      title: 'Imperdiet pellentesque',
      description: 'Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.'
    },
    {
      icon: PiggyBank,
      title: 'Non libero',
      description: 'Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="w-full">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="px-4 sm:px-6 lg:px-16 text-center mb-12">
            <p className="text-orange-500 text-sm font-medium mb-2">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Personalized services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </p>
          </div>

          {/* Feature Cards - 2x2 Grid */}
          <div className="px-4 sm:px-6 lg:px-16 mb-12">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-left space-y-4">
                    <div className="flex justify-start">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Image */}
          <div className="w-full">
            <img
              src={process.env.PUBLIC_URL + "/Images/Section3.png"}
              alt="Solar services"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="w-full">
            <img
              src={process.env.PUBLIC_URL + "/Images/Section3.png"}
              alt="Solar services"
              className="w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="px-4 sm:px-6 lg:px-16">
            <p className="text-orange-500 text-sm font-medium mb-2">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Personalized services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </p>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-left space-y-4">
                    <div className="flex justify-start">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
