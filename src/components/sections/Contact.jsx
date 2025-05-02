import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl text-secondary" />,
      label: "Email",
      value: "sujalbhandari082@gmail.com",
      link: "mailto:sujalbhandari082@gmail.com"
    },
    {
      icon: <FaPhone className="text-xl text-secondary" />,
      label: "Phone",
      value: "+91-9622491317",
      link: "tel:+919622491317"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl text-secondary" />,
      label: "Location",
      value: "Punjab, India",
      link: null
    },
    {
      icon: <FaGithub className="text-xl text-secondary" />,
      label: "GitHub",
      value: "sujal-bhandari",
      link: "https://github.com/sujal-bhandari"
    },
    {
      icon: <FaLinkedin className="text-xl text-secondary" />,
      label: "LinkedIn",
      value: "Sujal Bhandari",
      link: "https://www.linkedin.com/in/sujal-bhandari/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-primary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <h2 className="section-title flex items-center after:content-[''] after:block after:w-32 after:h-px after:ml-4 after:bg-textSecondary/30">
            Contact Me
          </h2>
          <p className="section-subtitle text-center">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary/80 p-6 rounded-lg shadow-xl border border-textSecondary/10"
            >
              <h3 className="text-xl font-bold text-secondary mb-6">Get In Touch</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-textPrimary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary/60 border border-textSecondary/20 text-textPrimary rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-textPrimary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary/60 border border-textSecondary/20 text-textPrimary rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-textPrimary mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary/60 border border-textSecondary/20 text-textPrimary rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-textPrimary mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-primary/60 border border-textSecondary/20 text-textPrimary rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-400 text-center">
                    Your message has been sent successfully!
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary/80 p-6 rounded-lg shadow-xl border border-textSecondary/10"
            >
              <h3 className="text-xl font-bold text-secondary mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <h4 className="text-textPrimary font-medium">{info.label}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.label === "GitHub" || info.label === "LinkedIn" ? "_blank" : undefined}
                          rel={info.label === "GitHub" || info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                          className="text-textSecondary hover:text-secondary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-textSecondary">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 