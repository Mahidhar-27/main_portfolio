import React, { useState } from 'react';
import { Download, Eye, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  const [showViewer, setShowViewer] = useState(false);

  const handleDownload = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would replace this with the actual resume file path
    link.download = 'Maram_Mahidhar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Download my resume or view it online to learn more about my experience and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center mb-8">
              <div className="inline-flex p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white mb-6 shadow-lg">
                <FileText className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Maram Mahidhar - Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Web Developer | AI Enthusiast | Full Stack Learner
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
              
              <button
                onClick={() => setShowViewer(!showViewer)}
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                <Eye className="w-5 h-5" />
                {showViewer ? 'Hide Preview' : 'View Online'}
              </button>
            </div>

            {/* Resume Preview */}
            {showViewer && (
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-inner p-8 border border-gray-200 dark:border-gray-600">
                <div className="max-w-3xl mx-auto space-y-8">
                  {/* Header */}
                  <div className="text-center border-b border-gray-200 dark:border-gray-600 pb-6">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      MARAM MAHIDHAR
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                      Web Developer | AI Enthusiast | Full Stack Learner
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Email: mahidharmaram7777@gmail.com | Phone: +91 7032030971
                    </p>
                  </div>

                  {/* Summary */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-l-4 border-blue-600 pl-3">
                      PROFESSIONAL SUMMARY
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Passionate web developer with expertise in modern technologies including React, Node.js, and AI/ML. 
                      Experienced in building full-stack applications with focus on user experience and scalable architecture. 
                      Strong problem-solving skills and commitment to continuous learning.
                    </p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-l-4 border-blue-600 pl-3">
                      TECHNICAL SKILLS
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-gray-700 dark:text-gray-300">Frontend:</p>
                        <p className="text-gray-600 dark:text-gray-400">HTML, CSS, JavaScript, React, TypeScript</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 dark:text-gray-300">Backend:</p>
                        <p className="text-gray-600 dark:text-gray-400">Node.js, Java, Python, Spring Boot</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 dark:text-gray-300">Database:</p>
                        <p className="text-gray-600 dark:text-gray-400">MongoDB, MySQL, Firebase, Supabase</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-700 dark:text-gray-300">Other:</p>
                        <p className="text-gray-600 dark:text-gray-400">Git, Docker, AWS, Machine Learning</p>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-l-4 border-blue-600 pl-3">
                      KEY PROJECTS
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Smart Resume Builder with AI</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">React, Node.js, AI/ML, MongoDB</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          Developed an intelligent resume builder with AI-powered suggestions and optimization
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">PCOS Detection System</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Python, Machine Learning, Flask</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          Built ML model for early PCOS detection using health parameters analysis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;