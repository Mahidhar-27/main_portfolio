import React from 'react';
import { GraduationCap, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative group">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="relative w-full h-full bg-gray-300 dark:bg-gray-600 rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <div className="text-gray-500 dark:text-gray-400 text-center">
                    <div className="w-24 h-24 bg-gray-400 dark:bg-gray-500 rounded-full mx-auto mb-4"></div>
                   
                    <p className="text-sm">Profile Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Hello! I'm Maram Mahidhar
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate developer who loves to build innovative solutions that make a difference. 
                With a strong foundation in web development and a growing interest in artificial intelligence, 
                I'm constantly learning and pushing the boundaries of what's possible with code.
              </p>
              
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Education</h4>
                    <p className="text-gray-600 dark:text-gray-300">Computer Science Student</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Interests</h4>
                    <p className="text-gray-600 dark:text-gray-300">AI, MERN Stack, Java, Machine Learning</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Goals</h4>
                    <p className="text-gray-600 dark:text-gray-300">Building scalable applications that solve real-world problems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;