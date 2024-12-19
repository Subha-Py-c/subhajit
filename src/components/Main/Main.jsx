import React from "react";
import "./scrollbar.css";
import IntroSection from "./IntroSection/IntroSection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import AcademicsSection from "./AcademicsSection/AcademicsSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ContactSection from "./ContactSection/ContactSection";
import ThanksSection from "./ThanksSection/ThanksSection";
import Cursor from "./Cursor/Cursor";

const Main = () => {
    return (
        <main role="main">
            <IntroSection />
            <ExperienceSection />
            <AcademicsSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <ThanksSection />
            <Cursor />
        </main>
    );
};

export default Main;
