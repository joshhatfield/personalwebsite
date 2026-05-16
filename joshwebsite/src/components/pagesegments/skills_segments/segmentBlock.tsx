

import type { ReactNode } from "react";

const SegmentBlock = ({ children }: { children: ReactNode }) => {
    return (
        <div className="badge badge-outline">
            {children}
        </div>

    )

}

export default SegmentBlock;