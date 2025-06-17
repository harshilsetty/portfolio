import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import images with correct paths
import vertoAiImage from '../images/projects/VertoAi.png';
import currencyConverterImage from '../images/projects/Currency Converter Web App.png';
import studyHubImage from '../images/projects/Online Study Resource Hub.png';
import internetSusDevImage from '../images/projects/image.png';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Verto AI',
      description: 'Ai Chatbot for students to ask questions regarding Lovely Professional University replied by chatbase API',
      image: vertoAiImage,
      technologies: ['Chatbase', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/harshilsetty/Verto-Ai',
      live: 'https://harshilsetty.github.io/Verto-Ai/',
    },
    {
      title: 'Currency Converter Web App',
      description: 'A modern, aesthetic and responsive currency converter using live exchange rates via ExchangeRate API.',
      image: currencyConverterImage,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/harshilsetty/currency-converter-webapp',
      live: 'https://harshilsetty.github.io/currency-converter-webapp/',
    },
    {
      title: 'Online Study Resource Hub',
      description: 'Website offering a diverse range of study materials to video tutorials, all designed to help students excel in their studies',
      image: studyHubImage,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/harshilsetty/Online-Study-Resource-Hub',
      live: 'https://harshilsetty.github.io/Online-Study-Resource-Hub/',
    },
    {
      title: 'Internet for Sustainable Development',
      description: 'A comprehensive website addressing internet accessibility challenges and sustainable development solutions',
      image: internetSusDevImage,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/harshilsetty/Internet-for-Sustainable-Development',
      live: 'https://harshilsetty.github.io/Internet-for-Sustainable-Development/',
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-[#C7A6E1] mb-12 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
            <div className="absolute bottom-[-1rem] left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-[#00FFFF]/70 rounded-full"></div>
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="bg-[#C7A6E1]/5 backdrop-blur-sm rounded-lg overflow-hidden h-full border border-white/10"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div
                      className="relative h-56 sm:h-64 md:h-72 overflow-hidden rounded-t-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        src={project.image}
                        alt={`${project.title} Project`}
                        className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-[#C7A6E1]/20 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </a>

                  <div className="p-6">
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.h3 
                        className="text-xl font-bold text-[#C7A6E1] mb-2 hover:text-[#00FFFF] transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.title}
                      </motion.h3>
                    </a>
                    <p className="text-[#C7A6E1]/80 mb-4">{project.description}</p>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-[#C7A6E1]/10 text-[#C7A6E1] text-sm rounded-full"
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'rgba(199, 166, 225, 0.2)'
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#C7A6E1]/10 text-[#C7A6E1] rounded-lg hover:bg-[#00FFFF]/20 hover:text-[#00FFFF] transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub className="w-5 h-5 mr-2" />
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#C7A6E1]/10 text-[#C7A6E1] rounded-lg hover:bg-[#00FFFF]/20 hover:text-[#00FFFF] transition-colors"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute inset-0 bg-[#00FFFF]/10 rounded-lg pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
