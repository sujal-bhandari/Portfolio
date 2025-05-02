import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check if theme preference exists in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light-theme', savedTheme === 'light');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      // If no preference saved, check system preference
      setTheme('light');
      document.documentElement.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Toggle the light-theme class on the document
    document.documentElement.classList.toggle('light-theme', newTheme === 'light');
    
    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary/90 border border-textSecondary/20 text-secondary shadow-lg hover:border-secondary transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
 