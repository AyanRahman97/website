import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  title: string;
  description: string;
}

const Hero = ({ name, title, description }: HeroProps) => {
  return (
    <section className="section-padding min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-soft dark:bg-none">
      <div className="absolute inset-0 dark:bg-gradient-purple opacity-10 dark:opacity-20"></div>
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"></div>
      
      <div className="max-w-3xl mx-auto text-center relative">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full glass border border-purple-light/20 bg-purple-light/10 text-purple-dark dark:text-purple-light"
        >
          Welcome to my portfolio
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-light to-purple-dark dark:from-purple-light dark:to-soft-purple bg-clip-text text-transparent"
        >
          {name}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          {title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute -z-10 inset-0 blur-3xl bg-gradient-warm opacity-20 dark:opacity-10"
        />
      </div>
    </section>
  );
};

export default Hero;