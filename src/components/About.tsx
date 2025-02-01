import { motion } from "framer-motion";

interface AboutProps {
  content: string;
  skills: string[];
}

const About = ({ content, skills }: AboutProps) => {
  return (
    <section className="section-padding relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-soft dark:bg-gradient-purple opacity-5"></div>
      <div className="max-w-4xl mx-auto relative">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full glass border border-purple-light/20 bg-purple-light/10 text-purple-dark dark:text-purple-light"
        >
          About
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-light to-purple-dark bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="prose prose-lg dark:prose-invert max-w-none mb-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-warm opacity-5 blur-3xl -z-10"></div>
          <p className="relative z-10">{content}</p>
        </motion.div>
        
        {skills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-dark dark:text-purple-light">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full glass border border-purple-light/20 bg-purple-light/5 text-purple-dark dark:text-purple-light"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default About;