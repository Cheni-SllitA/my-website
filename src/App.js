"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  User,
  Briefcase,
  //Sun,
  //Moon,
} from "lucide-react";
import { Link } from "react-scroll";

/* --- MAIN APP --- */
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const sections = ["home", "about", "skills", "projects", "contact"];

  /* --- PROJECT LIST --- */
  const projects = [
    {
      title: "DriiveFresh",
      description:
        "A modern online marketplace to buy vehicle accessorioes for a pleasent driving experience.",
      link: "https://github.com/Cheni-SllitA/Driivefresh",
      // image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
    },
    {
      title: "Rajapakse Phaeramcy web application",
      description:
        "An admin dashboard with product management and analytics built using the MERN stack.",
      link: "https://github.com/Ellio-Dredd/Snack-Overflow",
      //image: "https://images.unsplash.com/photo-1556741533-f6acd6479e9c?w=800",
    },
    {
      title: "Rainy",
      description:
        "A real-time chat app with Socket.io, Node.js, and React supporting multiple rooms.",
      link: "https://github.com/Cheni-SllitA/Rainy-the-weather-app",
      //image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=800",
    },
    {
      title: "Weather Forecast App",
      description:
        "A weather forecasting app that fetches real-time weather data using the OpenWeather API.",
      link: "https://github.com/yourusername/weather-app",
      //image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white font-sans transition-colors duration-500">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/60 dark:bg-black/30 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide text-cyan-500">
            Chenitha.dev
          </h1>
          <div className="hidden md:flex items-center space-x-6 text-sm uppercase font-medium">
            {sections.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={600}
                className="hover:text-cyan-500 cursor-pointer transition-colors"
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {/*{darkMode ? <Sun size={18} /> : <Moon size={18} />}*/}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm{" "}
          <span className="text-cyan-500 dark:text-cyan-400">
            Chenitha Nethvin
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-xl"
        >
          A passionate{" "}
          <span className="text-cyan-500 dark:text-cyan-400">
            Software Engineering Student
          </span>{" "}
          building modern web experiences.
        </motion.p>
        <motion.div
          className="flex space-x-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Github className="w-6 h-6 hover:text-cyan-400 transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <Linkedin className="w-6 h-6 hover:text-cyan-400 transition" />
          </a>
          <a href="mailto:you@example.com">
            <Mail className="w-6 h-6 hover:text-cyan-400 transition" />
          </a>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-12"
        >
          <ArrowDown className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </section>

      {/* About */}
      <RevealSection id="about" icon={<User />} title="About Me">
        I am a software engineering student with a strong interest in web development, mobile applications, and data systems. I am seeking internship opportunities to apply and grow my skills in real-world projects.
      </RevealSection>

      {/* Skills */}
      <RevealSection id="skills" icon={<Code2 />} title="Skills">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-8">
          {[
            "React",
            "Node.js",
            "Java",
            "Python",
            "Tailwind CSS",
            "MongoDB",
            "MySQL",
            "Git",
          ].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.08 }}
              className="bg-gray-200/60 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-cyan-400 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </RevealSection>

      {/* Projects */}
      <RevealSection id="projects" icon={<Briefcase />} title="Projects">
        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} />
          ))}
        </div>
      </RevealSection>

      {/* Contact */}
      <RevealSection id="contact" icon={<Mail />} title="Get in Touch">
        <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">
          Have an idea, collaboration, or project in mind? Let’s connect!
        </p>
        <a
          href="mailto:chenithanethvin@gmail.com"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-xl text-black font-semibold transition"
        >
          Say Hello 👋
        </a>
      </RevealSection>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200 dark:border-white/10">
        © {new Date().getFullYear()} Chenitha.dev — Built with ❤️ using React
      </footer>
    </div>
  );
}

/* --- Reusable Section Component --- */
function RevealSection({ id, icon, title, children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={ref}
      id={id}
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        className="max-w-3xl"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="text-cyan-500 dark:text-cyan-400 mb-4">{icon}</div>
          <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        </div>
        {children}
      </motion.div>
    </section>
  );
}

/* --- 3D Tilt Project Card --- */
function TiltCard({ project }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    setRotate({ x, y });
  };

  const resetRotation = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      className="bg-gray-200/60 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-cyan-400 transition text-left shadow-md"
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-3">
        {project.description}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="text-cyan-500 dark:text-cyan-400 hover:underline"
      >
        View on GitHub →
      </a>
    </motion.div>
  );
}
