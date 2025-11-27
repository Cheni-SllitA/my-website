import React from "react";
import RevealSection from "./RevealSection";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
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
  );
}
