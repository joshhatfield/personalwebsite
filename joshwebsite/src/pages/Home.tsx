import React from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Pageheader from "../components/pagebody/Pageheader.tsx";
import SkillsAccordion from "../components/pagesegments/SkillsAccordion.tsx";
import PageCard from "../components/pagebody/PageCard.tsx";
import Career from "../components/pagesegments/Career.tsx";

const Home: React.FC = () => {
    return (
        <>
            <Pageheader></Pageheader>
            <PageCard>
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Josh Hatfield</h1>
                    <p className="text-xl text-primary">DevOps · AI/ML · Developer</p>
                    <p className="text-base">
                        Experienced engineer and leader specializing in scalable large scale automation,
                        full-stack development and Machine Learning systems. Passionate about building resilient systems and clean UIs.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <a href="/cv.pdf" className="btn btn-primary gap-2">
                            <FaDownload/> Download CV
                        </a>
                        <a href="https://github.com/joshhatfield" className="btn btn-neutral gap-2" target="_blank"
                           rel="noreferrer">
                            <FaGithub/> GitHub
                        </a>
                        <a href="https://linkedin.com/in/jhatfieldcloud" className="btn btn-accent gap-2"
                           target="_blank" rel="noreferrer">
                            <FaLinkedin/> LinkedIn
                        </a>
                    </div>
                </div>
            </PageCard>
            <SkillsAccordion></SkillsAccordion>
            <Career></Career>
        </>
    );
};

export default Home;
