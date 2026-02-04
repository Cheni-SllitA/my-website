import React from "react";
import RevealSection from "./RevealSection";
import { Code2 } from "lucide-react";

export default function Skills() {
  const skills = [
    "React", "Node.js", "Java", "Tailwind CSS", "MongoDB",
    "MySQL", "Git", "HTML & CSS", "JavaScript", "Express.js",
  ];

  return (
    <RevealSection id="skills" icon={<Code2 />} title="Skills">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-8">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-200/60 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-cyan-400 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
