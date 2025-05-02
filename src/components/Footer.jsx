import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary/90 py-10 border-t border-textSecondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-textPrimary font-bold text-xl mb-2">Sujal Bhandari</div>
            <p className="text-textSecondary text-sm">
              Turning Creativity to Code | B.Tech CSE Student | Aspiring Software and Web Developer
            </p>
            <p className="text-textSecondary text-xs mt-4">
              &copy; {new Date().getFullYear()} Sujal Bhandari. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/sujal-bhandari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors p-2 rounded-full border border-textSecondary/20 hover:border-secondary"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sujal-bhandari/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors p-2 rounded-full border border-textSecondary/20 hover:border-secondary"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="mailto:sujalbhandari082@gmail.com" 
                className="text-textSecondary hover:text-secondary transition-colors p-2 rounded-full border border-textSecondary/20 hover:border-secondary"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-textSecondary text-sm">
              <a href="#hero" className="hover:text-secondary transition-colors">Home</a>
              <a href="#about" className="hover:text-secondary transition-colors">About</a>
              <a href="#projects" className="hover:text-secondary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
              <a href="/CV.pdf" className="hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer" download>CV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 