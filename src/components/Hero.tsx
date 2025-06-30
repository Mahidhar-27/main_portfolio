import React, { useState, useEffect } from 'react';
import { Download, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = [
    'Web Developer',
    'AI Enthusiast', 
    'Full Stack Learner',
    'Resume Automation Builder'
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentText = roles[currentRole];

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => 
        isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Subtle animated elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-500/20 rounded-full animate-pulse animation-delay-4000"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-cyan-400/25 rounded-full animate-pulse animation-delay-2000"></div>
          
          {/* Subtle gradient overlays */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/20 to-transparent dark:from-blue-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-100/15 to-transparent dark:from-purple-900/8 rounded-full blur-3xl"></div>
          
          {/* Minimal line patterns */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Maram Mahidhar
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            Building with Code, Designing with Purpose
          </p>
          
          <div className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-8 h-8">
            I'm a <span className="font-semibold">{displayText}</span>
            <span className="animate-blink">|</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;