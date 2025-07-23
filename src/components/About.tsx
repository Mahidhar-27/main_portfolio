import React from 'react';
import { GraduationCap, Heart, Target, Code2, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Get to know me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative group order-2 md:order-1">
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-all duration-500 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-all duration-500 opacity-50"></div>
              
              <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img 
                  src="/public/WhatsApp Image 2025-07-23 at 3.36.33 PM.jpeg" 
                  alt="Maram Mahidhar - Profile Photo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Hello! I'm Maram Mahidhar
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                I'm a passionate developer who loves to build innovative solutions that make a difference. 
                With a strong foundation in web development and a growing interest in artificial intelligence, 
                I'm constantly learning and pushing the boundaries of what's possible with code.
              </p>
              
              <div className="grid gap-6 relative">
                <div className="flex items-start gap-4 group/item hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/10">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Education</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Computer Science Student</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-xl hover:bg-purple-50/50 dark:hover:bg-purple-900/10">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                    <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Interests</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">AI, MERN Stack, Java, Machine Learning</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-xl hover:bg-green-50/50 dark:hover:bg-green-900/10">
                  <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-xl shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                    <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Goals</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Building scalable applications that solve real-world problems</p>
                  </div>
                </div>
              </div>
              
              {/* Achievement badges */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full shadow-lg">
                    <Zap className="w-3 h-3" />
                    Fast Learner
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full shadow-lg">
                    <Code2 className="w-3 h-3" />
                    Problem Solver
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-full shadow-lg">
                    <Heart className="w-3 h-3" />
                    Team Player
                  </span>
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