import SegmentTitle from "./segmentTitle.tsx";
import SegmentProgress from "./segmentProgress.tsx";


const ExperienceSegment = () => {

    return (
        <>
            <div className="card bg-base-200 p-4 shadow">
                <SegmentTitle>Experience</SegmentTitle>
                <br/>
                <div className="join join-vertical bg-base-100">
                    <SegmentProgress name="Machine Learning and AI" barcolour="progress-accent" value="75"/>
                    <SegmentProgress name="Cybersecurity" barcolour="progress-primary" value="90"/>
                    <SegmentProgress name="Team Leadership" barcolour="progress-secondary" value="75"/>
                    <SegmentProgress name="Devops and Cloud automation" barcolour="progress-accent" value="90"/>
                    <SegmentProgress name="Regulatory Compliance frameworks" barcolour="progress-primary" value="90"/>
                    <SegmentProgress name="Planning and Governance" barcolour="progress-secondary" value="80"/>
                    <SegmentProgress name="Management" barcolour="progress-primary" value="95"/>
                    <SegmentProgress name="Architecture Design and Planning" barcolour="progress-accent" value="80"/>
                </div>
            </div>
            </>

            )

            };

            export default ExperienceSegment