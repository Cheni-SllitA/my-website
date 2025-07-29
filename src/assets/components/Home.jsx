// src/App.js
import ScrollTriggered from "./ScrollTriggered";
import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import profileImg from '../images/12x18 v.jpg';

function Home() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.2 },
  };

  const projectCardAnimation = {
    whileHover: { scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" },
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Chenitha Nethvin</h1>
        <p className="header-text">Software Engineering Student | Passionate Developer</p>
      </header>

      {/* About Section */}
      <motion.section
        className="section about"
        id="about"
        initial={sectionAnimation.initial}
        whileInView={sectionAnimation.whileInView}
        transition={sectionAnimation.transition}
        viewport={sectionAnimation.viewport}
      >
        <h2 className="about-heading">About Me</h2>

        <div className="about-content">
          <div className="about-image">
            <img src={profileImg} alt="Chenitha Nethvin profile" />
          </div>

          <div className="about-text">
            <p>
              I am a software engineering student with a strong interest in web
              development, mobile applications, and data systems. I am looking for
              internship opportunities to apply and grow my skills in real-world
              projects.
            </p>
          </div>

        </div>
        <a
          id="resume"
          href="/W.G. Chenitha Nethvin Resume.pdf"
          download
          className="button-link"
        >
          Download Resume
        </a>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="section skills"
        id="skills"
        initial={sectionAnimation.initial}
        whileInView={sectionAnimation.whileInView}
        transition={sectionAnimation.transition}
        viewport={sectionAnimation.viewport}
      >
        <h2>Skills</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            scale: { type: "spring", bounce: 0.5 },
          }}
          style={{
            // backgroundColor: "#007bff",
            padding: "1rem",
            borderRadius: "12px",
            margin: "1rem 0",
            color: "#fff",
          }}
        >
          <section className="section skills">
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Programming Languages</h4>
                <div className="skill-badges">
                  <img src="../images/java.png" alt="" />
                  <span>Java</span>
                  <img src="../images/c++.png" alt="" />
                  <span>C++</span>
                  <img src="../images/c++.png" alt="" />
                  <span>Python</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Web Development</h4>
                <div className="skill-badges">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Tools & Others</h4>
                <div className="skill-badges">
                  <span>Git</span>
                  <span>MySQL</span>
                  <span>VS Code</span>
                </div>
              </div>
            </div>
          </section>

        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="section projects"
        id="projects"
        initial={sectionAnimation.initial}
        whileInView={sectionAnimation.whileInView}
        transition={sectionAnimation.transition}
        viewport={sectionAnimation.viewport}
      >
        <h2>Projects</h2>

        <motion.div
          className="project-card"
          {...projectCardAnimation}
          tabIndex={0}
          role="button"
          aria-label="Rajapakse Pharmacy Web Application"
        >
          <h3>RAJAPAKSE PHARMACY Web Application</h3>
          <p>
            A fast, stable and secure pharmacy management system built with
            React.js, Node.js, and MongoDB.
          </p>
        </motion.div>

        <motion.div
          className="project-card"
          {...projectCardAnimation}
          tabIndex={0}
          role="button"
          aria-label="Rainy Weather App"
        >
          <h3>RAINY</h3>
          <p>
            A mobile application that provides weather updates and forecasts
            using Java, Gradle, and AccuWeather API.
          </p>
        </motion.div>

        <motion.div
          className="project-card"
          {...projectCardAnimation}
          tabIndex={0}
          role="button"
          aria-label="Driive Fresh Marketplace"
        >
          <h3>DRIIVE FRESH</h3>
          <p>
            An online marketplace to sell accessories required for a pleasant
            driving experience.
          </p>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="section contact"
        id="contact"
        initial={sectionAnimation.initial}
        whileInView={sectionAnimation.whileInView}
        transition={sectionAnimation.transition}
        viewport={sectionAnimation.viewport}
      >
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:chenithanethvin@gmail.com" className="button-link">
            chenithanethvin@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/chenitha-nethvin-248163273/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link">
            linkedin.com/in/chenitha-nethvin
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Cheni-SllitA"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link">
            github.com/Cheni-SllitA
          </a>
        </p>
      </motion.section>
    </div>
  );
}
export default Home;
