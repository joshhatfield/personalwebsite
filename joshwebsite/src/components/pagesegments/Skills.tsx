import PageCard from "../pagebody/PageCard.tsx";

import LanguageSegment from "./skills_segments/languageSegment.tsx";
import TechSegment from "./skills_segments/techSegment.tsx";
import ExperienceSegment from "./skills_segments/experienceSegment.tsx";
import LeadershipSegment from "./skills_segments/leadershipSegment.tsx";

const Skills = () => {
    return (
        <>
            <div id="skillsseg" className="scroll-mt-20">
                <PageCard>
                    <div className="text-center space-y-4 mb-8">
                        <h1 className="text-section font-bold text-base-content">Skills</h1>
                        <p className="text-base-content/60">Technologies and expertise</p>
                    </div>

                    <div className="space-y-6">
                        <TechSegment />
                        <LeadershipSegment />
                        <ExperienceSegment />
                        <LanguageSegment />
                    </div>
                </PageCard>
            </div>
        </>
    );
};

export default Skills;