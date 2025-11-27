import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TiltCard({ project }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    setRotate({ x, y });
  };

  return (
    <motion.div
      className="bg-gray-200/60 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-cyan-400 transition"
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
    >
      <img
        src={project.image}
        className="w-full h-48 object-cover rounded-lg mb-4"
        alt={project.title}
      />

      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

      <p className="text-gray-600 dark:text-gray-400 mb-3">
        {project.description}
      </p>

      <a
        href={project.link}
        target="_blank"
        className="text-cyan-500 hover:underline"
      >
        View →
      </a>
    </motion.div>
  );
}
