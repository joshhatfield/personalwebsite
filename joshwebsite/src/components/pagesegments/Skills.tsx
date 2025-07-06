import PageCard from "../pagebody/PageCard.tsx";

import LanguageSegment from "./skills_segments/languageSegment.tsx";
import TechSegment from "./skills_segments/techSegment.tsx";
import ExperienceSegment from "./skills_segments/experienceSegment.tsx";

const AccordionGrid = () => {
    return (
        <>
            <PageCard>
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">skills</h1>
                    <br/>
                </div>
                <TechSegment></TechSegment>
                <LanguageSegment></LanguageSegment>
                <ExperienceSegment></ExperienceSegment>
            </PageCard>


        </>
    );
};


export default AccordionGrid;
