import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { programmingSkills, webSkills, databaseSkills, achievements } from "@/data/skillsData";

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-800 font-inter">{name}</span>
        <span className="text-sm text-gray-500 font-inter bg-gray-100 px-2 py-0.5 rounded-md">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          ref={ref}
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <motion.div
      className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="bg-blue-50 p-3 rounded-md mr-3">
        <i className={`${icon} text-primary`}></i>
      </div>
      <span className="font-medium text-gray-700 font-inter text-sm">{name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [titleRef, titleInView] = useScrollAnimation();
  const [ref1, inView1] = useScrollAnimation();
  const [ref2, inView2] = useScrollAnimation({ threshold: 0.1, delay: 0.2 });

  return (
    <section id="skills" className="section-padding bg-gray-50 relative">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-gray-50 opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            ref={titleRef}
            className="text-primary font-medium tracking-wider font-inter text-sm uppercase block mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            My Expertise
          </motion.span>
          <h2 className="section-title">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="section-subtitle mx-auto text-center max-w-3xl">
            I've worked with a range of technologies in the web development world,
            from frontend to backend, focusing on creating efficient and user-friendly solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Charts Section */}
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 30 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-blue-50 p-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-merriweather font-bold text-gray-800">
                  Programming Languages
                </h3>
              </div>

              <div className="space-y-6">
                {programmingSkills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                  />
                ))}
              </div>
              
              <div className="mt-10">
                <div className="flex items-center mb-6">
                  <div className="mr-4 bg-blue-50 p-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-merriweather font-bold text-gray-800">
                    Web Technologies
                  </h3>
                </div>

                <div className="space-y-6">
                  {webSkills.map((skill) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      percentage={skill.percentage} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Database & Achievements Section */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 30 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-8">
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-blue-50 p-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-merriweather font-bold text-gray-800">
                  Database & Other Tools
                </h3>
              </div>

              <div className="space-y-6">
                {databaseSkills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                  />
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="mr-4 bg-blue-50 p-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-merriweather font-bold text-gray-800">
                  Achievements & Expertise
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <SkillCard icon={achievement.icon} name={achievement.name} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
