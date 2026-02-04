import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
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
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 hover:text-cyan-400 transition" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:text-cyan-400 transition" />
        </a>
        <a href="mailto:you@example.com" target="_blank" rel="noopener noreferrer">
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
  );
}
