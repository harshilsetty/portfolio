import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImage from '../images/MAIN/Harshil.webp';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-secondary">
            <img
              src={profileImage}
              alt="Harshil Somisetty"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-light mb-4">
            Hi, I'm <span className="text-secondary">Harshil Somisetty</span>
          </h1>
          <p className="text-xl sm:text-2xl text-tertiary mb-8">
            Aspiring AI/ML Developer | Full-Stack Enthusiast
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/projects"
              className="btn-primary"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-md hover:bg-secondary/10 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 