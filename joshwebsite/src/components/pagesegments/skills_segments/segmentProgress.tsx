

type SegmentProgressProps = {
    name: string;
    barcolour: string;
    value: string;
};

const SegmentProgress = ({ name, barcolour, value }: SegmentProgressProps) => {
    return (
        <>
            <div className="collapse collapse-arrow join-item   bg-base-200">
                <input type="radio" name="my-accordion-4"/>
                <div className="collapse-title text-lg font-semibold">{name}</div>
                <div className="collapse-content text-sm">Content Goes here
                </div>
                <progress
                    className={`progress ${barcolour} w-full mt-2`}
                    value={value}
                    max="100"
                ></progress>
            </div>
        </>
    );
};

export default SegmentProgress;
