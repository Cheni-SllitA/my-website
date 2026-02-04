"use client";
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RevealSection from "./components/RevealSection";

import { User } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const sections = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white">

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        sections={sections}
      />

      <Hero />

      <RevealSection
        id="about"
        title="About Me"
        icon={<User />}
      >
        I am a software engineering student with a strong interest in web
        development, mobile applications, and data systems. I am seeking
        internship opportunities to apply and grow my skills in real-world
        projects.
      </RevealSection>

      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
