

import type { ReactNode } from "react";

const SegmentTitle = ({ children }: { children: ReactNode }) => {


    return (
        <div className="text-left space-y-4">
            <h1 className="text-2xl font-bold text-primary">
                {children}
            </h1>
        </div>
    )

}

export default SegmentTitle;

