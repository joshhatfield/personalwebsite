import SegmentTitle from "./segmentTitle.tsx";


const ExperienceSegment = () => {

    return (
        <>
            <div className="card bg-base-200 p-4 shadow">
                <SegmentTitle>Experience</SegmentTitle>
                <br/>
                <div className="text-lg font-semibold">skill</div>
                <progress
                    className="progress progress-primary w-full mt-2"
                    value="90"
                    max="100"
                ></progress>
                <div className="text-lg font-semibold">skill</div>
                <progress
                    className="progress progress-primary w-full mt-2"
                    value="90"
                    max="100"
                ></progress>
            </div>
        </>

    )

};

export default ExperienceSegment