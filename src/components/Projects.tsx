import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="section-padding relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-gradient-soft dark:bg-gradient-purple opacity-5"></div>
      <div className="max-w-6xl mx-auto relative">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full glass border border-purple-light/20 bg-purple-light/10 text-purple-dark dark:text-purple-light"
        >
          Projects
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent"
        >
          Selected Works
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg glass border border-purple-light/10 bg-white/50 dark:bg-black/20 backdrop-blur-lg p-6 h-full">
                <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="aspect-video mb-6 overflow-hidden rounded-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-dark dark:text-purple-light">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full glass border border-purple-light/20 bg-purple-light/5 text-purple-dark dark:text-purple-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;