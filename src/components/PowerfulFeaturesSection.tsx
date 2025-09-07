import React from 'react';
import { Cpu, ThumbsUp, CloudUpload, Grid3X3 } from 'lucide-react';

const PowerfulFeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Erat sit',
      description: 'Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.'
    },
    {
      icon: ThumbsUp,
      title: 'Ullamcorper arcu',
      description: 'Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.'
    },
    {
      icon: CloudUpload,
      title: 'Et pellentesque',
      description: 'Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.'
    },
    {
      icon: Grid3X3,
      title: 'Amet egestas',
      description: 'Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis.'
    }
  ];

  return (
    <section className="py-16 lg:py-20">
      <div className="w-full">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="px-4 sm:px-6 lg:px-16 text-center mb-12">
            <p className="text-orange-500 text-sm font-medium mb-2">
              System features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Powerful features
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
              src="/Images/PowerfulFeatures.png"
              alt="Powerful features"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="pl-8">
            <p className="text-orange-500 text-sm font-medium mb-2">
              System features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Powerful features
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

          {/* Right Content - Image */}
          <div className="w-full">
            <img
              src="/Images/PowerfulFeatures.png"
              alt="Powerful features"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeaturesSection;
