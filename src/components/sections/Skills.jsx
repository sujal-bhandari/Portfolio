import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", level: 70, note: "Intermediate" },
        { name: "Java", level: 60 },
        { name: "Javascript", level: 65 },
        { name: "NodeJs", level: 55 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 75 },
        { name: "Laravel", level: 75 },
        { name: "Bootstrap", level: 80 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "VsCode", level: 80 },
        { name: "Git", level: 60 },
        { name: "GitHub", level: 65 },
      ]
    },
    {
      title: "CS Fundamentals",
      skills: [
        { name: "OOPS", level: 75 },
        { name: "DBMS", level: 70 },
        { name: "OS", level: 65 },
        { name: "Computer Networks", level: 60 },
        { name: "DSA", level: 80 },
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Extrovert", level: 85 },
        { name: "Analytical Skills", level: 80 },
        { name: "Collaborative", level: 85 },
        { name: "Project Management", level: 70 },
        { name: "Adaptability", level: 80 },
      ]
    },
  ];

  const SkillBar = ({ name, level, note }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-textPrimary font-medium">{name}</span>
        {note && <span className="text-secondary text-sm">{note}</span>}
      </div>
      <div className="w-full bg-textSecondary/20 rounded-full h-2.5">
        <motion.div 
          className="bg-secondary h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-primary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <h2 className="section-title flex items-center after:content-[''] after:block after:w-32 after:h-px after:ml-4 after:bg-textSecondary/30">
            Skills
          </h2>
          <p className="section-subtitle text-center">
            Here are the technical and soft skills I've developed through academics, projects, and personal learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-6">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary/80 p-6 rounded-lg shadow-xl border border-textSecondary/10"
              >
                <h3 className="text-xl font-bold text-secondary mb-6">{category.title}</h3>
                <div>
                  {category.skills.map((skill) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      note={skill.note} 
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 p-6 bg-secondary/5 border border-secondary/20 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-secondary mb-4">Continuous Learning</h3>
            <p className="text-textSecondary">
              I believe in constant growth and skill development. Currently, I'm expanding my knowledge in Web designing and Game development to enhance capabilities in different fields.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 