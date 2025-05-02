import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start space-y-5">
          <motion.p 
            className="text-secondary font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-textPrimary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sujal Bhandari.
          </motion.h1>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-textSecondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            
          </motion.h2>
          
          <motion.p 
            className="text-textSecondary text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I am a Computer Science student at Lovely Professional University, Phagwara. Passionate about full-stack development, I enjoy building scalable web applications and exploring technologies like React, Node.js, and MongoDB. I aim to use my technical skills to create efficient, user-friendly solutions that solve real-world problems.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-5 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="/CV.pdf" className="btn-outline" target="_blank" rel="noopener noreferrer" download>
              Download CV
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="https://github.com/sujal-bhandari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sujal-bhandari/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:sujalbhandari082@gmail.com" 
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 