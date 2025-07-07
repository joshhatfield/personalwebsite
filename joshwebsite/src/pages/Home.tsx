import React from "react";
import Pageheader from "../components/pagebody/Pageheader.tsx";
import SkillsAccordion from "../components/pagesegments/Skills.tsx";
import Career from "../components/pagesegments/Career.tsx";
import About from "../components/pagesegments/About.tsx";

const Home: React.FC = () => {
    return (
        <>
            <Pageheader></Pageheader>
            <About></About>
                <SkillsAccordion></SkillsAccordion>
                <Career></Career>
            </>
            );
            };

            export default Home;
