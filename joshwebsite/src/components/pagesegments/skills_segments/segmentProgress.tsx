import { useEffect, useState } from "react";

type SegmentProgressProps = {
    name: string;
    barcolour: string;
    value: string;
    children?: React.ReactNode;
};

const SegmentProgress = ({ name, barcolour, value, children }: SegmentProgressProps) => {
    const targetValue = parseInt(value, 10);
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        let current = 0;
        const step = Math.max(1, Math.floor(targetValue / 40)); // animation smoothness
        const interval = setInterval(() => {
            current += step;
            if (current >= targetValue) {
                setProgressValue(targetValue);
                clearInterval(interval);
            } else {
                setProgressValue(current);
            }
        }, 10); // animation speed

        return () => clearInterval(interval);
    }, [targetValue]);

    return (
        <div className="collapse collapse-arrow join-item bg-base-200">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-semibold">{name}</div>
            {children}
            <progress
                className={`progress ${barcolour} w-full mt-2`}
                value={progressValue}
                max="100"
            ></progress>
        </div>
    );
};

export default SegmentProgress;
