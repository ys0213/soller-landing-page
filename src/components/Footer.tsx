import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Logo and Copyright */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4">
            <div className="flex items-center space-x-2">
              <img src="/Images/Icon.png" alt="Soller Logo" className="w-10 h-6" />
              <span className="text-lg font-bold">Soller</span>
            </div>
            <p className="text-gray-600 text-xs">
              © 2023 Soller, Inc. All rights reserved.
            </p>
          </div>

          {/* Right side - Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs">
            <a href="#terms" className="text-gray-600 hover:text-black transition-colors">
              Terms
            </a>
            <a href="#privacy" className="text-gray-600 hover:text-black transition-colors">
              Privacy
            </a>
            <a href="#support" className="text-gray-600 hover:text-black transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
