import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook } from 'react-icons/fa';

const Education = () => {
  const educationDetails = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology – Information Technology",
      duration: "Since August 2022",
      location: "Phagwara, Punjab",
      gpa: "CGPA: 8.03",
      coursework: "Object Oriented Programming, Full Stack Web Development, Game Development, Databases",
      icon: <FaGraduationCap className="text-4xl text-secondary" />
    },
    {
      institution: "Boys High Secondary School",
      degree: "Intermediate",
      duration: "April 2021 - March 2022",
      location: "Kishtwar, Jammu and Kashmir",
      gpa: "Percentage: 89%",
      coursework: "Physics, Chemistry, Mathematics",
      icon: <FaBook className="text-4xl text-secondary" />
    },
    {
      institution: "Little Angel High School",
      degree: "Matriculation",
      duration: "April 2019 - March 2020",
      location: "Kishtwar, Jammu and Kashmir",
      gpa: "Percentage: 91%",
      coursework: "",
      icon: <FaBook className="text-4xl text-secondary" />
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <h2 className="section-title flex items-center after:content-[''] after:block after:w-32 after:h-px after:ml-4 after:bg-textSecondary/30">
            Education
          </h2>
          <p className="section-subtitle text-center">
            My academic journey that has shaped my knowledge and skills.
          </p>

          <div className="mt-12 w-full max-w-4xl relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-secondary/20"></div>

            {educationDetails.map((education, index) => (
              <motion.div
                key={education.degree}
                className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 ${index % 2 === 0 ? 'md:-left-6' : 'md:-right-6'} left-0 w-12 h-12 rounded-full bg-primary border-2 border-secondary flex items-center justify-center z-10`}>
                  {education.icon}
                </div>

                <div className="p-6 rounded-lg shadow-lg bg-primary/80 border border-textSecondary/10">
                  <h3 className="text-xl font-bold text-textPrimary mb-2">{education.institution}</h3>
                  <p className="text-secondary font-medium mb-1">{education.degree}</p>
                  <div className="flex justify-between text-textSecondary text-sm mb-3">
                    <span>{education.duration}</span>
                    <span>{education.gpa}</span>
                  </div>
                  <p className="text-textSecondary mb-1"><span className="text-textPrimary">Location:</span> {education.location}</p>
                  {education.coursework && (
                    <p className="text-textSecondary"><span className="text-textPrimary">Coursework:</span> {education.coursework}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 