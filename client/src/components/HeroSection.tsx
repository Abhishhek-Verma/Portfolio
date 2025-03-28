import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useParallax } from "@/hooks/useParallax";
import profileImg from "@assets/IMG-20240424-WA0066.jpg";

const HeroSection = () => {
  const { ref } = useParallax();

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none"></div>
      
      {/* Subtle patterns */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgNjAgTDYwIDMwIEw2MCAwIEwwIDAgTDAgNjBaIiBmaWxsPSIjMDAwMDAwIi8+PC9zdmc+')] pointer-events-none"></div>

      {/* Animated subtle elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-32 right-10 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p 
              className="text-primary font-medium mb-4 tracking-wider font-inter text-sm uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              B.Tech Computer Science Student
            </motion.p>
            
            <h1 className="text-gray-800 font-merriweather text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Abhishek Verma</span>
            </h1>
            
            <div className="h-1 w-20 bg-primary mb-8"></div>
            
            <AnimatedText
              text="A passionate developer focused on creating clean, user-friendly applications with modern technologies."
              className="text-lg md:text-xl text-gray-600 mb-8 font-inter leading-relaxed"
              highlightWords={["passionate", "modern technologies"]}
              highlightClassName="text-gray-800 font-medium"
            />

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all duration-300 flex items-center font-poppins shadow-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>View My Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-all duration-300 font-poppins shadow-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.a>
            </div>

            <div className="mt-12 flex space-x-5">
              <motion.a
                href="https://github.com/Abhishhek-Verma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/Abhishhek-Verma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
              <motion.a
                href="mailto:abhi.ups838@gmail.com"
                className="text-gray-500 hover:text-primary transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className="relative">
              {/* Profile image with professional framing */}
              <div className="relative">
                {/* Background shape */}
                <div className="absolute -inset-4 bg-gray-100 rounded-tl-[100px] rounded-br-[100px] rotate-6 z-0"></div>
                
                {/* Main image */}
                <motion.div
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-tl-[70px] rounded-br-[70px] overflow-hidden border-8 border-white shadow-xl z-10"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={profileImg}
                    alt="Abhishek Verma"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full z-0"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
