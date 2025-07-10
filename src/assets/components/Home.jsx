// src/App.js
import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="App">
      <header className="header">
        <h1>Chenitha Nethvin</h1>
        <p>Software Engineering Student | Passionate Developer</p>
      </header>

      <section className="section about">
        <h2>About Me</h2>
        <p>
          I am a software engineering student with a strong interest in web
          development, mobile applications, and data systems. I’m looking for
          internship opportunities to apply and grow my skills in real-world
          projects.
        </p>
      </section>

      <section className="section skills">
        <h2>Skills</h2>
        <ul>
          <li>React.js, HTML5, CSS3, JavaScript</li>
          <li>Java, Android, Bluetooth Programming</li>
          <li>MySQL, PHP, Database Management</li>
          <li>C++, Python, R</li>
        </ul>
      </section>

      <section className="section projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Smart Home Controller (Android + Bluetooth)</h3>
          <p>
            Built a mobile app to control lights and appliances using Java and
            Bluetooth communication with Arduino.
          </p>
        </div>
        <div className="project-card">
          <h3>Knight Database System (C++)</h3>
          <p>
            Developed a menu-driven console app using structs, enums, and
            vectors to manage fantasy character data.
          </p>
        </div>
        <div className="project-card">
          <h3>CollectOld.com (PHP + MySQL)</h3>
          <p>
            Created a full-stack e-commerce platform for collecting vintage
            items. Includes login, cart, and admin panel.
          </p>
        </div>
      </section>

      <section className="section contact">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/yourprofile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            github.com/yourusername
          </a>
        </p>
      </section>

      <footer>
        <p>© 2025 Chenitha Nethvin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
