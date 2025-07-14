// src/App.js
import React from "react";
import "./home.css";
import { motion } from "framer-motion";

function Home() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.2 },
  };

  // Animation variants for each project card
  const projectCardAnimation = {
    whileHover: { scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" },
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Chenitha Nethvin</h1>
        <p>Software Engineering Student | Passionate Developer</p>
      </header>

      <motion.section className="section about" {...sectionAnimation}>
        <h2>About Me</h2>
        <p>
          I am a software engineering student with a strong interest in web
          development, mobile applications, and data systems. I’m looking for
          internship opportunities to apply and grow my skills in real-world
          projects.
        </p>
      </motion.section>

      <motion.section className="section skills" {...sectionAnimation}>
        <h2>Skills</h2>
        <ul>
          <li>React.js, HTML5, CSS3, JavaScript</li>
          <li>Java, Android, Bluetooth Programming</li>
          <li>MySQL, PHP, Database Management</li>
          <li>C++, Python, R</li>
        </ul>
      </motion.section>

      <motion.section className="section projects" {...sectionAnimation}>
        <h2>Projects</h2>

        <motion.div className="project-card" {...projectCardAnimation} tabIndex={0}>
          <h3>Smart Home Controller (Android + Bluetooth)</h3>
          <p>
            Built a mobile app to control lights and appliances using Java and
            Bluetooth communication with Arduino.
          </p>
        </motion.div>

        <motion.div className="project-card" {...projectCardAnimation} tabIndex={0}>
          <h3>Knight Database System (C++)</h3>
          <p>
            Developed a menu-driven console app using structs, enums, and
            vectors to manage fantasy character data.
          </p>
        </motion.div>

        <motion.div className="project-card" {...projectCardAnimation} tabIndex={0}>
          <h3>CollectOld.com (PHP + MySQL)</h3>
          <p>
            Created a full-stack e-commerce platform for collecting vintage
            items. Includes login, cart, and admin panel.
          </p>
        </motion.div>
      </motion.section>

      <motion.section className="section contact" {...sectionAnimation}>
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourprofile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yourusername
          </a>
        </p>
      </motion.section>

      <footer>
        <p>© 2025 Chenitha Nethvin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
