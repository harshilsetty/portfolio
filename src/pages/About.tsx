import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaDownload, FaCode, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiC, SiLeetcode, SiHackerrank } from 'react-icons/si';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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

  const skills = [
    { name: 'Python', icon: <FaPython className="w-8 h-8" />, level: 85 },
    { name: 'HTML', icon: <FaHtml5 className="w-8 h-8" />, level: 90 },
    { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8" />, level: 85 },
    { name: 'JavaScript', icon: <FaJs className="w-8 h-8" />, level: 50 },
    { name: 'Git', icon: <FaGitAlt className="w-8 h-8" />, level: 60 },
    { name: 'SQL', icon: <FaDatabase className="w-8 h-8" />, level: 85 },
    { name: 'C Programming', icon: <SiC className="w-8 h-8" />, level: 85 },
  ];

  const codingProfiles = [
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="w-8 h-8" />,
      url: 'https://leetcode.com/u/harshilsomisetty/',
      description: 'Problem Solving & DSA Practice',
    },
    {
      name: 'HackerRank',
      icon: <SiHackerrank className="w-8 h-8" />,
      url: 'https://www.hackerrank.com/profile/harshilsetty2006',
      description: 'Python, SQL, C Programming Certifications',
    },
  ];

  const certifications = [
    {
      name: 'CISCO Introduction to Data Science',
      issuer: 'Cisco Network Academy',
      date: '2024',
    },
    {
      name: 'CISCO Introduction to Modern AI',
      issuer: 'Cisco Network Academy',
      date: '2025',
    },
    {
      name: 'Getting Started with Data',
      issuer: 'IBM',
      date: '2025',
    },
    {
      name: 'Python Basic',
      issuer: 'HackerRank',
      date: '2024',
    },
    {
      name: 'SQL Basic',
      issuer: 'HackerRank',
      date: '2025',
    },
  ];

  const achievements = [
    {
      title: 'Winner – Speechkraft 7.0 Contest',
      organization: 'LPU',
      date: '2024',
    },
    {
      title: 'Winner – Interview Strategist Contest',
      organization: 'LPU',
      date: '2024',
    },
    {
      title: '30+ day streak',
      organization: 'LeetCode & HackerRank',
      date: '2024',
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <motion.div
            className="prose prose-invert max-w-none mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-lg text-white/70">
              I'm Harshil Somisetty, a Computer Science Engineering student at Lovely Professional University, 
              with a strong interest in Full-Stack Development and AI/ML. I've worked on several web-based projects, 
              participated in hackathons, and continuously upskill through online courses, certifications, and hands-on practice.
            </p>
          </motion.div>

          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.a
              href="/resume/CV Harshil Somisetty.docx"
              download="CV Harshil Somisetty.docx"
              className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-[#C7A6E1]/10 text-[#C7A6E1] hover:text-[#00FFFF] hover:bg-[#00FFFF]/10 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-[#00FFFF]/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <FaDownload className="relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </motion.a>
          </motion.div>

          <motion.h2 
            className="text-2xl font-bold text-[#C7A6E1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#C7A6E1]/5 p-4 rounded-lg relative group"
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center mb-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#C7A6E1]"
                  >
                    {skill.icon}
                  </motion.div>
                  <span className="ml-2 text-[#C7A6E1]">{skill.name}</span>
                </div>
                <div className="w-full bg-[#C7A6E1]/10 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-[#00FFFF] h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.div
                      className="absolute inset-0 bg-[#00FFFF]/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.h2 
            className="text-2xl font-bold text-[#C7A6E1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Coding Profiles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {codingProfiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C7A6E1]/5 p-6 rounded-lg relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#00FFFF]/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex items-center space-x-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#C7A6E1]"
                  >
                    {profile.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-[#C7A6E1]">{profile.name}</h3>
                    <p className="text-[#C7A6E1]/80">{profile.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.h2 
            className="text-2xl font-bold text-[#C7A6E1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                className="bg-[#C7A6E1]/5 p-4 rounded-lg relative group"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#00FFFF]/10 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <h3 className="text-[#C7A6E1] font-semibold group-hover:text-[#00FFFF] transition-colors duration-300">{cert.name}</h3>
                  <p className="text-[#C7A6E1]/80 group-hover:text-[#00FFFF]/80 transition-colors duration-300">{cert.issuer}</p>
                  <p className="text-[#C7A6E1]/80 text-sm group-hover:text-[#00FFFF]/80 transition-colors duration-300">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.h2 
            className="text-2xl font-bold text-[#C7A6E1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
                className="bg-[#C7A6E1]/5 p-4 rounded-lg relative group"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#00FFFF]/10 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <h3 className="text-[#C7A6E1] font-semibold group-hover:text-[#00FFFF] transition-colors duration-300">{achievement.title}</h3>
                  <p className="text-[#C7A6E1]/80 group-hover:text-[#00FFFF]/80 transition-colors duration-300">{achievement.organization}</p>
                  <p className="text-[#C7A6E1]/80 text-sm group-hover:text-[#00FFFF]/80 transition-colors duration-300">{achievement.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;