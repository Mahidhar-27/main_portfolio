import React from 'react';
import { ExternalLink, Github, Brain, ShoppingCart, Activity, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Smart Resume Builder with AI Suggestions',
      description: 'An intelligent resume builder that uses AI to provide personalized suggestions and optimize content for better job matching.',
      icon: <Brain className="w-8 h-8" />,
      tags: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      title: 'Book Shop Automation',
      description: 'A comprehensive e-commerce solution for book retailers with inventory management, order processing, and customer analytics.',
      icon: <ShoppingCart className="w-8 h-8" />,
      tags: ['Java', 'Spring Boot', 'MySQL', 'React'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      title: 'PCOS Detection using ML',
      description: 'A machine learning model that helps in early detection of PCOS using various health parameters and symptoms analysis.',
      icon: <Activity className="w-8 h-8" />,
      tags: ['Python', 'Scikit-learn', 'TensorFlow', 'Flask'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br ${project.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50`}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 bg-gradient-to-r ${project.gradient} rounded-xl text-white mb-6 shadow-lg`}>
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 font-medium">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium`}>
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;