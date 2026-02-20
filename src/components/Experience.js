import React from "react";
import RevealSection from "./RevealSection";
import TiltCard from "./TiltCard";
import { Briefcase } from "lucide-react";
import { experience } from "../data/experience";
export default function Experience (){
    return(
        <RevealSection id="Experience" icon={<Briefcase />} title="Experience">
      <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
        {experience.map((experience, i) => (
          <TiltCard key={i} project={experience} />
        ))}
      </div>
    </RevealSection>
    );
}