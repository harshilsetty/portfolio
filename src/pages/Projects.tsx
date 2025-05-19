import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Decentralized Medication Reminder',
      description: 'Blockchain-based app for tracking medicine adherence. Features include smart contract integration, user authentication, and medication scheduling.',
      image: '/projects/med-reminder.png',
      technologies: ['React', 'Solidity', 'Web3.js', 'Node.js'],
      github: 'https://github.com/yourusername/med-reminder',
      live: 'https://med-reminder-demo.com',
    },
    {
      title: 'AI Image Recognition App',
      description: 'A machine learning application that uses computer vision to identify and classify objects in images. Built with Python and TensorFlow.',
      image: '/projects/ai-vision.png',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      github: 'https://github.com/yourusername/ai-vision',
      live: 'https://ai-vision-demo.com',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: '/projects/ecommerce.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.com',
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
                    alt={project.title}
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