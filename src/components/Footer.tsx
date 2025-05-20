import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
    <footer className="bg-primary/50 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-light mb-6">Connect With Me</h3>
            <div className="flex items-center justify-center space-x-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary hover:text-secondary transition-colors duration-300 transform hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="w-full pt-8 border-t border-tertiary/20 text-center text-tertiary">
            <p> &copy;  Harshil Somisetty 2025 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 