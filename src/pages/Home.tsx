import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImage from '../images/MAIN/Harshil.webp';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]"
        >
          <motion.div
            className="relative w-48 h-48 mb-8 rounded-full overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{ y: y2 }}
          >
            <motion.img
              src={profileImage}
              alt="Harshil Somisetty"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-[#C7A6E1] mb-4 text-center"
            variants={itemVariants}
            style={{ y: y2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Harshil Somisetty
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 mb-8 text-center max-w-2xl"
            variants={itemVariants}
            style={{ y: y2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Computer Science Engineering Student | Full-Stack Developer | AI/ML Enthusiast
            </motion.span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
            style={{ y: y2 }}
          >
            <Link to="/projects">
              <motion.button
                className="px-6 py-3 rounded-lg bg-[#C7A6E1]/10 text-[#C7A6E1] hover:text-[#00FFFF] hover:bg-[#00FFFF]/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(199, 166, 225, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="px-6 py-3 rounded-lg bg-[#C7A6E1]/10 text-[#C7A6E1] hover:text-[#00FFFF] hover:bg-[#00FFFF]/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(199, 166, 225, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 