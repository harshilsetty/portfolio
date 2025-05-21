import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/harshilsetty',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/harshil-somisetty',
    },
  ];

  return (
    <motion.footer 
      className="relative py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Footer Background Effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, transparent, rgba(199, 166, 225, 0.03)),
            radial-gradient(circle at 0% 0%, rgba(199, 166, 225, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(199, 166, 225, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(0, 255, 255, 0.05) 0%, transparent 50%)
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social Links */}
          <motion.div 
            className="flex space-x-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C7A6E1] hover:text-[#00FFFF] transition-colors duration-300"
                whileHover={{ 
                  scale: 1.2,
                  y: -2,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="flex space-x-8 text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/projects" 
              className="text-white/50 hover:text-[#C7A6E1] transition-colors duration-300"
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="text-white/50 hover:text-[#C7A6E1] transition-colors duration-300"
            >
              Contact
            </Link>
          </motion.div>

          {/* Copyright Text */}
          <motion.p 
            className="text-white/50 text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            &copy; {new Date().getFullYear()} Harshil Somisetty
          </motion.p>
        </div>
      </div>

      {/* Animated Lines */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`footer-line-${i}`}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(199, 166, 225, 0.1), transparent)',
            transform: `rotate(${Math.random() * 360}deg)`,
            transformOrigin: 'left center',
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </motion.footer>
  );
};

export default Footer; 