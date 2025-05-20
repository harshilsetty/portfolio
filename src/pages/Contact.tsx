import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      content: 'harshilsetty2006@gmail.com',
      link: 'mailto:harshilsetty2006@gmail.com',
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 8309 217 693',
      link: 'tel:+918309217693',
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: 'WhatsApp',
      content: '+91 8309 217 693',
      link: 'https://wa.me/918309217693',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      content: 'Lovely Professional University, Punjab, India',
      link: 'https://maps.google.com/?q=Lovely+Professional+University',
    },
  ];

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

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Get In Touch</h1>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="bg-primary/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-light mb-6">Send Me a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-light mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-2 bg-primary/50 border border-tertiary rounded-md text-light focus:outline-none focus:border-secondary transition-all duration-300"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-2 bg-primary/50 border border-tertiary rounded-md text-light focus:outline-none focus:border-secondary transition-all duration-300"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-light mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 bg-primary/50 border border-tertiary rounded-md text-light focus:outline-none focus:border-secondary transition-all duration-300"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-light mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-primary/50 border border-tertiary rounded-md text-light focus:outline-none focus:border-secondary transition-all duration-300"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full relative ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mx-auto"
                      />
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-primary/50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-light mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 text-tertiary hover:text-secondary transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="mt-1">{info.icon}</div>
                      <div>
                        <h3 className="text-light font-semibold">{info.title}</h3>
                        <p className="text-tertiary">{info.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-primary/50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-light mb-6">Connect With Me</h2>
                <div className="flex space-x-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiary hover:text-secondary transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Copyright Text */}
          <div className="mt-20 pt-8 border-t border-tertiary/20 text-center text-tertiary">
            <p>&copy; 2025 Harshil Somisetty. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 