import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Cloud, Palette, Brain, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML/CSS', level: 90, color: 'from-orange-400 to-red-500', category: 'Frontend' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500', category: 'Frontend' },
    { name: 'React', level: 80, color: 'from-blue-400 to-cyan-500', category: 'Frontend' },
    { name: 'Node.js', level: 75, color: 'from-green-400 to-emerald-500', category: 'Backend' },
    { name: 'MongoDB', level: 70, color: 'from-green-500 to-teal-500', category: 'Database' },
    { name: 'Firebase', level: 75, color: 'from-yellow-500 to-orange-600', category: 'Cloud' },
    { name: 'Supabase', level: 65, color: 'from-emerald-400 to-cyan-500', category: 'Cloud' },
    { name: 'Java', level: 80, color: 'from-red-500 to-pink-500', category: 'Backend' },
    { name: 'Python', level: 75, color: 'from-blue-500 to-indigo-500', category: 'AI/ML' },
  ];

  const skillCategories = [
    { name: 'Frontend', icon: <Code className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500', count: 3 },
    { name: 'Backend', icon: <Database className="w-6 h-6" />, color: 'from-green-500 to-emerald-500', count: 2 },
    { name: 'Database', icon: <Database className="w-6 h-6" />, color: 'from-purple-500 to-pink-500', count: 1 },
    { name: 'Cloud', icon: <Cloud className="w-6 h-6" />, color: 'from-orange-500 to-red-500', count: 2 },
    { name: 'AI/ML', icon: <Brain className="w-6 h-6" />, color: 'from-indigo-500 to-purple-500', count: 1 },
    { name: 'Tools', icon: <Zap className="w-6 h-6" />, color: 'from-pink-500 to-rose-500', count: 5 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 bg-gradient-to-r ${category.color} rounded-xl text-white mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                {category.icon}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{category.count} skills</p>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Code className="w-5 h-5 text-white" />
                </div>
                Proficiency Levels
              </h3>
              
            {skills.map((skill, index) => (
              <div key={index} className="group mb-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="h-full bg-white/30 animate-pulse rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Skills Cloud */}
          <div className="relative">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 group hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                What I Work With
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {skillCategories.slice(0, 4).map((category, index) => (
                  <div
                    key={index}
                    className={`text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group/item ${
                      isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300 group-hover/item:scale-110`}>
                      {React.cloneElement(category.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                      {category.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {category.count} technologies
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl p-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold text-gray-900 dark:text-white">Always Learning</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Always learning and exploring new technologies to stay current with industry trends
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;