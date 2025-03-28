import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/data/projectsData";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.1, delay: 0.1 * index });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden group transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-600 shadow-sm border border-gray-100">
          {project.technologies[0]}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-xl font-merriweather font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">
            {project.title}
          </h4>
          <p className="text-gray-600 text-sm font-inter line-clamp-3 mb-3">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 4).map((tag: string) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-blue-50 text-primary text-xs rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-medium">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center text-xs text-gray-500 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{project.technologies.slice(0, 3).join(" · ")}</span>
          </div>

          <div className="flex space-x-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-primary hover:bg-blue-50 transition-colors"
                aria-label="View demo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-primary hover:bg-blue-50 transition-colors"
                aria-label="View source code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProject = ({ project }: { project: Project }) => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover min-h-[300px]"
          />
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured Project
          </div>
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-merriweather font-bold text-gray-800 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-6 font-inter">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-primary text-xs rounded-md font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Live Demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white text-gray-700 rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [titleRef, titleInView] = useScrollAnimation();
  const featuredProject = projects[2]; // Artistry Hub is featured
  const otherProjects = projects.filter(p => p.id !== featuredProject.id);

  return (
    <section id="projects" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-white pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            ref={titleRef}
            className="text-primary font-medium tracking-wider font-inter text-sm uppercase block mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.span>
          <h2 className="section-title">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="section-subtitle mx-auto text-center max-w-3xl">
            Here are some of my recent projects that showcase my technical skills, 
            problem-solving abilities, and passion for creating exceptional web experiences.
          </p>
        </div>

        {/* Featured Project */}
        <FeaturedProject project={featuredProject} />

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Show More Projects Button */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/Abhishhek-Verma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-md text-primary font-medium hover:bg-blue-50 transition-colors shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
