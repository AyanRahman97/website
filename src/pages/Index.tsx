import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";

const Index = () => {
  // Example data - replace with your own
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of your first project",
      tags: ["React", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of your second project",
      tags: ["Next.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of your third project",
      tags: ["Vue", "Firebase", "Sass"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ];

  return (
    <Layout>
      <Hero
        name="Your Name"
        title="Full Stack Developer"
        description="A passionate developer crafting beautiful and functional web experiences"
      />
      <Projects projects={projects} />
      <About
        content="I'm a full-stack developer with a passion for creating elegant solutions to complex problems. With experience in modern web technologies, I focus on building scalable and maintainable applications that provide great user experiences."
        skills={[
          "React",
          "TypeScript",
          "Node.js",
          "Next.js",
          "Tailwind CSS",
          "MongoDB",
          "PostgreSQL",
          "AWS",
        ]}
      />
    </Layout>
  );
};

export default Index;