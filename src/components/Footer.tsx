import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Maram Mahidhar
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Building with Code, Designing with Purpose
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>React & Tailwind</span>
            <Coffee className="w-4 h-4 text-amber-600" />
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {currentYear} Maram Mahidhar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;