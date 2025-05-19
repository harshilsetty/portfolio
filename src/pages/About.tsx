import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'Python', icon: <FaPython className="w-8 h-8" />, level: 85 },
    { name: 'HTML', icon: <FaHtml5 className="w-8 h-8" />, level: 90 },
    { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8" />, level: 85 },
    { name: 'JavaScript', icon: <FaJs className="w-8 h-8" />, level: 80 },
    { name: 'React.js', icon: <FaReact className="w-8 h-8" />, level: 75 },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, level: 70 },
    { name: 'Git', icon: <FaGitAlt className="w-8 h-8" />, level: 80 },
    { name: 'SQL', icon: <FaDatabase className="w-8 h-8" />, level: 75 },
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, level: 70 },
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
    },
    // Add more certifications as needed
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
              I'm a CSE student at LPU with a passion for AI/ML and full-stack development. 
              I enjoy building meaningful projects and participating in hackathons, events, 
              and technical competitions.
            </p>
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

          <h2 className="text-2xl font-bold text-light mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </motion.div>
      </div>
    </div>
  );
};

export default About; 