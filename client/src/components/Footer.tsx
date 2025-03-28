import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-100 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mr-2">
              <span className="font-poppins font-bold text-white text-lg">A</span>
            </div>
          </motion.div>

          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {new Date().getFullYear()} Abhishek Verma. All rights reserved.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="https://github.com/Abhishhek-Verma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors duration-300"
              whileHover={{ y: -5, color: "#0078FF" }}
            >
              <i className="fab fa-github text-xl"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/Abhishhek-Verma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors duration-300"
              whileHover={{ y: -5, color: "#0078FF" }}
            >
              <i className="fab fa-linkedin text-xl"></i>
            </motion.a>
            <motion.a
              href="mailto:abhi.ups838@gmail.com"
              className="text-gray-500 hover:text-primary transition-colors duration-300"
              whileHover={{ y: -5, color: "#0078FF" }}
            >
              <i className="fas fa-envelope text-xl"></i>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
