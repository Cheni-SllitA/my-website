// src/components/Navbar.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'; // Add this file for your dark custom styles


const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };//Yasas

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">W.G. Chenitha Nethvin</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => scrollToSection("about")}>
                About Me
              </button>
            </li>
            <li className="nav-item">
             <button className="nav-link btn" onClick={() => scrollToSection("skills")}>
            Skills
          </button>
            </li>
            <li className="nav-item">
             <button className="nav-link btn" onClick={() => scrollToSection("projects")}>
            Projects
          </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => scrollToSection("contact")}>
            Contact
          </button>
            </li>
            <li className="nav-item">
             <button className="nav-link btn" onClick={() => scrollToSection("resume")}>
            My Resume
          </button>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
