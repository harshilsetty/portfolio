import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Resume</h1>
          
          <div className="flex justify-center mb-8">
            <button
              onClick={handleDownload}
              className="btn-primary flex items-center space-x-2"
            >
              <FaDownload />
              <span>Download Resume</span>
            </button>
          </div>

          <div className="bg-primary/50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-light mb-4">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-light">Senior Full Stack Developer</h3>
                <p className="text-tertiary">Company Name • 2020 - Present</p>
                <ul className="list-disc list-inside text-tertiary mt-2">
                  <li>Led development of multiple full-stack applications using React and Node.js</li>
                  <li>Implemented CI/CD pipelines and automated testing</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light">Full Stack Developer</h3>
                <p className="text-tertiary">Previous Company • 2018 - 2020</p>
                <ul className="list-disc list-inside text-tertiary mt-2">
                  <li>Developed and maintained web applications using modern JavaScript frameworks</li>
                  <li>Collaborated with UX designers to implement responsive designs</li>
                  <li>Optimized application performance and reduced load times by 40%</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-light mt-8 mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-light">Bachelor of Science in Computer Science</h3>
                <p className="text-tertiary">University Name • 2014 - 2018</p>
                <p className="text-tertiary">GPA: 3.8/4.0</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume; 