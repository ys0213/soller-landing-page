import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-gray-900">
              soller
            </div>
            <nav className="hidden lg:flex space-x-8">
              <a href="#products" className="text-gray-600 hover:text-yellow-400 transition-colors">
                Products
              </a>
              <a href="#solutions" className="text-gray-600 hover:text-yellow-400 transition-colors">
                Solutions
              </a>
              <a href="#services" className="text-gray-600 hover:text-yellow-400 transition-colors">
                Services
              </a>
              <a href="#configure" className="text-gray-600 hover:text-yellow-400 transition-colors">
                Configure
              </a>
            </nav>
          </div>

          {/* Right side - Phone and CTA */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-2 text-blue-800">
              <Phone className="w-4 h-4" />
              <span className="text-sm">555 818 282</span>
            </div>
            <button className="hidden lg:flex bg-yellow-400 text-amber-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors items-center gap-2">
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden bg-yellow-400 text-black w-10 h-10 rounded-full flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <nav className="py-4 space-y-4">
              <a href="#products" className="block text-gray-800 hover:text-yellow-600 transition-colors">
                Products
              </a>
              <a href="#solutions" className="block text-gray-800 hover:text-yellow-600 transition-colors">
                Solutions
              </a>
              <a href="#services" className="block text-gray-800 hover:text-yellow-600 transition-colors">
                Services
              </a>
              <a href="#configure" className="block text-gray-800 hover:text-yellow-600 transition-colors">
                Configure
              </a>
              <div className="flex items-center space-x-2 text-gray-800 pt-4 border-t border-gray-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
