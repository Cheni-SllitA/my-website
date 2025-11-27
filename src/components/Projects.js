import React from "react";
import RevealSection from "./RevealSection";
import TiltCard from "./TiltCard";
import { Briefcase } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <RevealSection id="projects" icon={<Briefcase />} title="Projects">
      <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <TiltCard key={i} project={project} />
        ))}
      </div>
    </RevealSection>
  );
}
