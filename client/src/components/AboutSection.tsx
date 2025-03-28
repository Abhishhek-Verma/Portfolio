import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import resumePdf from "@assets/Resume (Abhishek Verma).pdf";

const AboutSection = () => {
  const [ref1, inView1] = useScrollAnimation();
  const [ref2, inView2] = useScrollAnimation({ threshold: 0.2, delay: 0.3 });

  return (
    <section id="about" className="section-padding py-24 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="text-primary font-medium tracking-wider font-inter text-sm uppercase block mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get To Know
          </motion.span>
          <h2 className="section-title">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="section-subtitle mx-auto text-center">
            A brief introduction to who I am and what I do
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, x: -30 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Image container with professional styling */}
            <div className="relative">
              {/* Background decorative element */}
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-gray-100 rounded-lg z-0"></div>
              
              {/* Main image */}
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                  alt="Programming Environment"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              
              {/* Status badge */}
              <motion.div
                className="absolute -bottom-5 right-10 bg-white shadow-md px-5 py-3 rounded-lg border-l-4 border-primary z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-gray-700 font-medium text-sm">
                    Currently Working on Personal Projects
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: 30 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-merriweather font-bold mb-6 text-gray-800">
              Computer Science Student at KIET Group of Institutions
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed font-inter">
              I'm passionate about building interactive and user-friendly web applications. 
              My journey in tech started with HTML and CSS, and I've since expanded to the 
              MERN stack and Java programming.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed font-inter">
              I enjoy solving complex problems with elegant solutions and continuously 
              learning new technologies to stay at the forefront of web development.
            </p>

            {/* Information cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-50 p-2 rounded-md mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800">Education</h4>
                </div>
                <p className="text-gray-600 ml-10 text-sm">B.Tech in Computer Science (2023-2027)</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-50 p-2 rounded-md mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800">Experience</h4>
                </div>
                <p className="text-gray-600 ml-10 text-sm">1+ year of coding experience</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-50 p-2 rounded-md mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                </div>
                <p className="text-gray-600 ml-10 text-sm">abhi.ups838@gmail.com</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-50 p-2 rounded-md mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                </div>
                <p className="text-gray-600 ml-10 text-sm">+91 8381836793</p>
              </div>
            </div>

            <div className="mt-10">
              <motion.a
                href={resumePdf}
                download
                className="px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all duration-300 inline-flex items-center shadow-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Resume</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
