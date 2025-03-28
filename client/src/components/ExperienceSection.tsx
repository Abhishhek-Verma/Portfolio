import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { experience, education, certifications } from "@/data/experienceData";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  details?: string[];
  delay?: number;
  icon?: React.ReactNode;
}

const TimelineItem = ({ 
  title, 
  subtitle, 
  period, 
  details = [],
  delay = 0,
  icon
}: TimelineItemProps) => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.1, delay });

  return (
    <motion.div
      ref={ref}
      className="mb-10 relative pl-8 pb-8 border-l-2 border-gray-100 last:border-transparent last:pb-0"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full bg-white border-2 border-primary flex items-center justify-center">
        {icon ? (
          icon
        ) : (
          <div className="h-2 w-2 rounded-full bg-primary"></div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-300">
        <div className="absolute -left-1 top-3 h-3 w-3 rotate-45 bg-white border-l border-b border-gray-100"></div>
        
        <span className="text-xs font-medium text-primary bg-blue-50 px-2 py-1 rounded-full inline-block mb-3">
          {period}
        </span>
        
        <h4 className="text-lg font-merriweather font-bold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600 mb-3 font-inter">{subtitle}</p>
        
        {details.length > 0 && (
          <ul className="space-y-2 text-gray-600 text-sm">
            {details.map((detail, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
                <span>{detail}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const [titleRef, titleInView] = useScrollAnimation();
  const [ref1, inView1] = useScrollAnimation();
  const [ref2, inView2] = useScrollAnimation({ threshold: 0.1, delay: 0.3 });

  return (
    <section id="experience" className="section-padding bg-white relative">
      {/* Subtle background patterns */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-white pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            ref={titleRef}
            className="text-primary font-medium tracking-wider font-inter text-sm uppercase block mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            My Journey
          </motion.span>
          <h2 className="section-title">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="section-subtitle mx-auto text-center max-w-3xl">
            A timeline of my professional experiences and academic journey, 
            showcasing my growth and development in the field of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience & Certifications Column */}
          <div>
            <motion.div
              ref={ref1}
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-8">
                <div className="bg-blue-50 p-3 rounded-lg shadow-sm mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-merriweather font-bold text-gray-800">Professional Experience</h3>
              </div>

              <div className="relative">
                {experience.map((exp, index) => (
                  <TimelineItem
                    key={index}
                    title={exp.title}
                    subtitle={exp.organization}
                    period={exp.period}
                    details={exp.details}
                    delay={0.2 * index}
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-8">
                <div className="bg-blue-50 p-3 rounded-lg shadow-sm mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-merriweather font-bold text-gray-800">Certifications</h3>
              </div>

              <div className="relative">
                {certifications.map((cert, index) => (
                  <TimelineItem
                    key={index}
                    title={cert.title}
                    subtitle={cert.issuer}
                    period={cert.period}
                    delay={0.2 * index}
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    }
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education Column */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-blue-50 p-3 rounded-lg shadow-sm mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-2xl font-merriweather font-bold text-gray-800">Education</h3>
            </div>

            <div className="relative">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  title={edu.degree}
                  subtitle={edu.institution}
                  period={edu.period}
                  details={edu.details}
                  delay={0.2 * index}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  }
                />
              ))}
            </div>

            {/* Resume Download Button */}
            <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Want to know more?</h4>
              <p className="text-gray-600 mb-4">Download my complete resume to learn more about my skills and experiences.</p>
              <a 
                href="/attached_assets/Resume (Abhishek Verma).pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
