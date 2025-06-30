import React, { useState, useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML/CSS', level: 90, color: 'from-orange-400 to-red-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 80, color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', level: 75, color: 'from-green-400 to-emerald-500' },
    { name: 'MongoDB', level: 70, color: 'from-green-500 to-teal-500' },
    { name: 'Firebase', level: 75, color: 'from-yellow-500 to-orange-600' },
    { name: 'Supabase', level: 65, color: 'from-emerald-400 to-cyan-500' },
    { name: 'Java', level: 80, color: 'from-red-500 to-pink-500' },
    { name: 'Python', level: 75, color: 'from-blue-500 to-indigo-500' },
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="h-full bg-white/20 animate-pulse rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Cloud */}
          <div className="relative">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                What I Work With
              </h3>
              
              <div className="grid grid-cols-3 gap-6">
                {['Frontend', 'Backend', 'Database', 'Cloud', 'AI/ML', 'Tools'].map((category, index) => (
                  <div
                    key={index}
                    className={`text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-sm"></div>
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {category}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
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