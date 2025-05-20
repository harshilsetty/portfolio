import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaDownload, FaCode } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiC, SiLeetcode, SiHackerrank } from 'react-icons/si';

const About = () => {
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
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">About Me</h1>
          
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-tertiary">
              I'm Harshil Somisetty, a Computer Science Engineering student at Lovely Professional University, 
              with a strong interest in Full-Stack Development and AI/ML. I've worked on several web-based projects, 
              participated in hackathons, and continuously upskill through online courses, certifications, and hands-on practice.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <a
              href="/resume/CV Harshil Somisetty.docx"
              download="CV Harshil Somisetty.docx"
              className="btn-primary flex items-center space-x-2"
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>

          <h2 className="text-2xl font-bold text-light mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/50 p-4 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  {skill.icon}
                  <span className="ml-2 text-light">{skill.name}</span>
                </div>
                <div className="w-full bg-tertiary/20 rounded-full h-2">
                  <div
                    className="bg-secondary h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-light mb-6">Coding Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {codingProfiles.map((profile) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/50 p-6 rounded-lg hover:bg-primary/70 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  {profile.icon}
                  <div>
                    <h3 className="text-xl font-bold text-light">{profile.name}</h3>
                    <p className="text-tertiary">{profile.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-light mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-primary/50 p-4 rounded-lg"
              >
                <h3 className="text-light font-semibold">{cert.name}</h3>
                <p className="text-tertiary">{cert.issuer}</p>
                <p className="text-tertiary text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-light mb-6">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-primary/50 p-4 rounded-lg"
              >
                <h3 className="text-light font-semibold">{achievement.title}</h3>
                <p className="text-tertiary">{achievement.organization}</p>
                <p className="text-tertiary text-sm">{achievement.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;