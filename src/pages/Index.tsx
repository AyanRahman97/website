import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Pollux Decipher Tool",
      description: "A sophisticated cryptographic tool designed to decode Pollux cipher messages. Built with advanced algorithms and modern web technologies for efficient and accurate decryption.",
      tags: ["React", "TypeScript", "Python", "Cryptography"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ];

  const skills = [
    "Python",
    "C",
    "Cryptography",
    "Offsec",
    "App Development"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-soft dark:bg-gradient-purple">
        <Hero
          name="Ayan"
          title="Full Stack Developer"
          description="A passionate developer crafting beautiful and functional web experiences"
        />
        <Projects projects={projects} />
        <About
          content="I'm a full-stack developer with a passion for creating elegant solutions to complex problems. With experience in modern web technologies, I focus on building scalable and maintainable applications that provide great user experiences."
          skills={skills}
        />
      </div>
    </Layout>
  );
};

export default Index;