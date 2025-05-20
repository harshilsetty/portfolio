import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import vertoAiImage from '../images/projects/VertoAi.png';
import currencyConverterImage from '../images/projects/Currency Converter Web App.png';
import studyHubImage from '../images/projects/Online Study Resource Hub.png';

const Projects = () => {
  const projects = [
    {
      title: 'Verto AI',
      description: 'Ai Chatbot for students to ask questions regarding Lovely Professional University',
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
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">My Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/50 rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={`${project.title} Project`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
                  <p className="text-tertiary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiary hover:text-secondary transition-colors duration-300"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiary hover:text-secondary transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 