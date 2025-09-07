import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Zap, Star, Castle, Clock } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const testimonials = [
    {
      icon: Zap,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      author: "Jane Cooper",
      role: "10KWh",
      avatar: process.env.PUBLIC_URL + "/Images/User_Thumb.png"
    },
    {
      icon: Star,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      author: "Ralph Edwards",
      role: "32KWh",
      avatar: process.env.PUBLIC_URL + "/Images/User_Thumb.png"
    },
    {
      icon: Castle,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
      author: "Courtney Henry",
      role: "6KWh",
      avatar: process.env.PUBLIC_URL + "/Images/User_Thumb.png"
    },
    {
      icon: Clock,
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
      author: "Cameron",
      role: "12KWh",
      avatar: process.env.PUBLIC_URL + "/Images/User_Thumb.png"
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % testimonials.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-16 lg:py-20 bg-purple-900 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-0 right-10 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] transform translate-x-[150px] translate-y-[120px] lg:translate-x-[220px] lg:-translate-y-[180px]">
        <img src={process.env.PUBLIC_URL + "/Images/TestimonialsCircle1.png"} alt="Decorative circle" className="w-full h-full object-contain" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-[1200px] h-[1200px] hidden lg:block transform -translate-x-[400px] translate-y-1/2">
        <img src={process.env.PUBLIC_URL + "/Images/TestimonialsCircle2.png"} alt="Decorative circle" className="w-full h-full object-contain" />
      </div>
      
      <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-56 lg:h-56 transform translate-x-20 -translate-y-8">
        <img src={process.env.PUBLIC_URL + "/Images/TestimonialsCircle3.png"} alt="Decorative circle" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16">
        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <p className="text-yellow-500 text-sm font-medium mb-2">
              Join other Sun harvesters
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Make something awesome
            </h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto lg:mx-0">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
            </p>
          </div>
          
          {/* Request a Quote Button */}
          <div className="flex justify-center lg:justify-end">
            <button className="bg-yellow-400 text-amber-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2">
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Testimonials */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {testimonials.map((testimonial, index) => {
              const IconComponent = testimonial.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 h-96 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-start mb-4">
                      <IconComponent className="w-8 h-8 text-gray-600" />
                    </div>
                    <p className="text-lg text-gray-700 mb-6">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Desktop Navigation */}
          <div className="flex justify-start space-x-4">
            <button
              onClick={prevCard}
              className="bg-transparent border-2 border-yellow-400 rounded-full p-3 text-yellow-400 hover:bg-yellow-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextCard}
              className="bg-transparent border-2 border-yellow-400 rounded-full p-3 text-yellow-400 hover:bg-yellow-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Testimonials */}
        <div className="lg:hidden">
          <div className="mb-8 flex justify-center">
            <div className="bg-white rounded-lg p-6 h-96 flex flex-col justify-between w-full max-w-sm">
              <div>
                <div className="flex justify-start mb-4">
                  {(() => {
                    const IconComponent = testimonials[currentCard].icon;
                    return <IconComponent className="w-8 h-8 text-gray-600" />;
                  })()}
                </div>
                <p className="text-lg text-gray-700 mb-6">{testimonials[currentCard].text}</p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentCard].avatar}
                  alt={testimonials[currentCard].author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[currentCard].author}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentCard].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevCard}
              className="bg-transparent border-2 border-yellow-400 rounded-full p-3 text-yellow-400 hover:bg-yellow-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextCard}
              className="bg-transparent border-2 border-yellow-400 rounded-full p-3 text-yellow-400 hover:bg-yellow-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
