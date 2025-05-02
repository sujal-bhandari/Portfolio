import { motion } from 'framer-motion';
import { FaCode, FaMedal, FaLaptopCode } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: "Cloud Computing",
      description: "Completed the course of Cloud Computing and achieved the certificate.",
      icon: <FaCode className="text-secondary text-3xl" />,
      status: "November 2024",
      link: "CloudCom.pdf",
      image: "/cloudcc.jpg"
    },
    {
      title: "200+ Problems Solved",
      description: "Solved over 200 problems across various coding platforms, including Geeks for Geeks and LeetCode.",
      icon: <FaLaptopCode className="text-secondary text-3xl" />,
      status: "June 2023",
      image: "/LeetCode.png"
    },
    {
      title: "Participated in a Community Development Program (CDP) and gained teaching experience.",
      description: "During the Community Development Program gained hands-on experience in teaching and introduced children to coding.",
      icon: <FaMedal className="text-secondary text-3xl" />,
      status: "July 2023",
      link: "CDP.pdf",
      image: "/teach.jpg"
    },
    {
      title: "Web Development With ReactJS",
      description: "Completed certification course on ReactJS techniques from Gokhboru Tech.",
      icon: <FaMedal className="text-secondary text-3xl" />,
      status: "January 2024",
      link: "React.pdf",
      image: "/react.jpg"
    },
  ];

  const Achievement = ({ achievement, index }) => (
    <motion.div 
      className="p-6 rounded-lg border border-textSecondary/10 bg-primary/20 hover:bg-primary/30 transition-all duration-300"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col space-y-4">
        {/* Image Wrapper with Proper Sizing */}
        {achievement.image && (
          <div className="w-full h-40 md:h-48 overflow-hidden rounded-lg border border-textSecondary/20 shadow-md">
            <img 
              src={achievement.image} 
              alt={achievement.title} 
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        <div className="flex gap-4">
          <div className="flex-shrink-0">{achievement.icon}</div>
          <div className="w-full">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-bold text-textPrimary">{achievement.title}</h3>
              <span className="text-secondary font-mono text-sm">{achievement.status}</span>
            </div>
            <p className="text-textSecondary mb-2">{achievement.description}</p>
            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium text-sm"
              >
                View Certificate
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="achievements" className="py-20 bg-primary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <h2 className="section-title flex items-center after:content-[''] after:block after:w-32 after:h-px after:ml-4 after:bg-textSecondary/30">
            Achievements And Certificates
          </h2>
          <p className="section-subtitle text-center">
            Key milestones and certifications that showcase my dedication to continuous learning and skill development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-10">
            {achievements.map((achievement, index) => (
              <Achievement key={achievement.title} achievement={achievement} index={index} />
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-textSecondary">
              These achievements represent my commitment to excellence and my passion for learning new technologies and solving complex problems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
