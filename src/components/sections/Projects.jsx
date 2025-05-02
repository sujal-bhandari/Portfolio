import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Filozoos-Animal Care Website",
      description: "Developed a full stack animal care platform offering pet adoption, sales, caretaker hiring, and pet care services. Designed for a holistic user experience, the site includes personalized recommendations based on user preferences, location, and pet type—making it a one-stop solution for pet owners and enthusiasts.",
      tech: ["HTML/CSS", "React", "PHP", "MySql"],
      image: "/dog.jpg", // Ensure dog.jpg is in your public/ folder
      github: "#",
      demo: "https://react-pj-alpha.vercel.app/",
      date: "November 2024"
    },
    {
      title: "Staff and Sorcery",
      description: "Designed and modeled a high-fantasy wizard character and his enchanted staff using Blender, emphasizing intricate detail and magical realism. Implemented custom textures, rigging, and animation-ready topology for seamless integration into game engines or cinematic scenes.",
      tech: ["Blender"],
      image: "/wizard.png", // Ensure this image exists
      github: "#",
      demo: "CAP818.pdf",
      date: "December 2024"
    }
  ];

  const ProjectCard = ({ project, index }) => (
    <motion.div 
      className={`p-6 rounded-lg shadow-xl border border-textSecondary/10 ${index === activeProject ? 'bg-primary/70' : 'bg-primary/20 hover:bg-primary/40'} transition-all duration-300 cursor-pointer`}
      onClick={() => setActiveProject(index)}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col h-full">
        {/* Project Image */}
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-60 sm:h-72 object-cover object-center rounded-xl mb-4 border border-textSecondary/20 shadow-md"
          />
        )}

        <div className="mb-4">
          <span className="text-secondary font-mono text-sm">{project.date}</span>
          <h3 className="text-xl font-bold text-textPrimary mt-1">{project.title}</h3>
        </div>
        
        <p className="text-textSecondary mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap mb-4 gap-2">
            {project.tech.map((tech) => (
              <span 
                key={tech} 
                className="text-secondary font-mono text-xs px-3 py-1 rounded-full bg-secondary/10"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={project.github} 
              className="text-textSecondary hover:text-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub repository"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href={project.demo} 
              className="text-textSecondary hover:text-secondary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <h2 className="section-title flex items-center after:content-[''] after:block after:w-32 after:h-px after:ml-4 after:bg-textSecondary/30">
            My Projects
          </h2>
          <p className="section-subtitle text-center">
            Here are some of my recent projects that showcase my skills in Web development and Game designing.
          </p>

          <div className="w-full mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-textSecondary mb-4">
              These projects represent my passion for developing more creative websites. 
              I'm constantly working on new projects to expand my skills.
            </p>
            <a 
              href="https://github.com/sujal-bhandari" 
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              See More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
