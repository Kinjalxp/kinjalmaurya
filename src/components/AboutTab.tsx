import React from "react";
import { HeroSection } from "./HeroSection";
import { AboutAndSkills } from "./AboutAndSkills";
import { EducationTimeline } from "./EducationTimeline";
import { Achievements } from "./Achievements";
import { Volunteering } from "./Volunteering";

export const AboutTab: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <HeroSection />
      <AboutAndSkills />
      <EducationTimeline />
      <div className="mt-12 grid md:grid-cols-1 gap-6">
        <Achievements />
        <Volunteering />
      </div>
    </div>
  );
};
