import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import images with correct paths
import vertoAiImage from '../images/projects/VertoAi.png';
import currencyConverterImage from '../images/projects/Currency Converter Web App.png';
import studyHubImage from '../images/projects/Online Study Resource Hub.png';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Parallax effects
  const y1 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Generate random positions for particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10
  }));

  // Generate animated lines
  const lines = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    length: Math.random() * 150 + 50,
    angle: Math.random() * 360,
    duration: Math.random() * 15 + 10
  }));

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
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Mesh gradient background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(199, 166, 225, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(0, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(199, 166, 225, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(0, 255, 255, 0.08) 0%, transparent 50%)
          `,
          opacity: 0.4,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.4, 0.3, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(199, 166, 225, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 70, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -70, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Animated lines */}
      {lines.map((line) => (
        <motion.div
          key={`line-${line.id}`}
          className="absolute pointer-events-none"
          style={{
            left: `${line.startX}%`,
            top: `${line.startY}%`,
            width: `${line.length}px`,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(199, 166, 225, 0.15), transparent)',
            transform: `rotate(${line.angle}deg)`,
            transformOrigin: 'left center',
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#C7A6E1] pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: 0.25,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 70 - 35, 0],
            opacity: [0.25, 0.08, 0.25],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Mouse follower effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, var(--color-secondary-rgb) 0%, transparent 70%)',
          opacity: 0.08,
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      className="relative h-48 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        src={project.image}
                        alt={`${project.title} Project`}
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300 brightness-110"
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

                    <div className="flex space-x-4">
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
