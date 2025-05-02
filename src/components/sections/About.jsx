import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <h2 className="section-title flex items-center after:content-[''] after:block after:w-32 after:h-px after:ml-4 after:bg-textSecondary/30">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-12">
            <div className="md:col-span-3">
              <p className="text-textSecondary mb-4">
                Hello! I’m Sujal Bhandari, a Computer Science student at Lovely Professional University, Phagwara. Passionate about full-stack development, I enjoy building scalable web applications and exploring technologies like React, Node.js, and MongoDB. I aim to use my technical skills to create efficient, user-friendly solutions that solve real-world problems.
              </p>

              
              <p className="text-textSecondary mb-4">
                Beyond technical skills, I'm an extrovert who thrives in collaborative environments. I believe in the power of teamwork 
                and enjoy exchanging ideas with peers to create more robust solutions.
              </p>
              
              <p className="text-textSecondary mb-4">
              With a strong foundation in software development and a growing interest in emerging technologies, I continuously explore ways to build scalable, secure, and efficient digital solutions. Passionate about solving real-world challenges, I strive to contribute to impactful projects that drive innovation and create meaningful user experiences in the tech landscape.
              </p>
              
              <div className="mt-6">
                <h3 className="text-textPrimary text-lg font-bold mb-3">Technologies I've been working with:</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <li className="text-textSecondary flex items-center">
                    <span className="text-secondary mr-2">▹</span> C++
                  </li>
                  <li className="text-textSecondary flex items-center">
                    <span className="text-secondary mr-2">▹</span> Java
                  </li>
                  <li className="text-textSecondary flex items-center">
                    <span className="text-secondary mr-2">▹</span> SQL
                  </li>
                  <li className="text-textSecondary flex items-center">
                    <span className="text-secondary mr-2">▹</span> React
                  </li>
                  <li className="text-textSecondary flex items-center">
                    <span className="text-secondary mr-2">▹</span> PHP
                  </li>
                  <li className="text-textSecondary flex items-center">
                    <span className="text-secondary mr-2">▹</span> NodeJs
                  </li>
                  <li className="text-textSecondary flex items-center">
                    <span className="text-secondary mr-2">▹</span> HTML/CSS
                  </li>
                  <li className="text-textSecondary flex items-center">
                    <span className="text-secondary mr-2">▹</span> Git
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/CV.pdf" 
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download CV
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <div className="relative group w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 border-2 border-secondary rounded translate-x-5 translate-y-5 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <div className="absolute inset-0 bg-secondary/10 rounded z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
                <img 
                  src="/images/profile.jpg" 
                  alt="Sumit Singh" 
                  className="relative z-0 rounded object-cover w-full h-full grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 