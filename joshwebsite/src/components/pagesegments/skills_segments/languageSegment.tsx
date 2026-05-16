import {SiTypescript, SiHashicorp} from "react-icons/si";
import { FaGolang, FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import SegmentTitle from "./segmentTitle.tsx";
import SegmentBlock from "./segmentBlock.tsx";




const LanguageSegment = () => {

    return (
        <>
            <div className="card bg-base-200 p-4 shadow">
                <SegmentTitle>Languages</SegmentTitle>
                <br/>
                <div className="flex flex-wrap gap-2 mt-2">
                    <SegmentBlock>
                        <FaGolang className="text-blue-400"/>
                        Golang
                    </SegmentBlock>
                    <SegmentBlock>
                        <FaPython/>
                        Python
                    </SegmentBlock>
                    <SegmentBlock>
                        <IoLogoJavascript className="text-yellow-500"/>
                        Javascript
                    </SegmentBlock>
                    <SegmentBlock>
                        <SiTypescript className="text-blue-500"/>
                        Typescript
                    </SegmentBlock>
                    <SegmentBlock>
                        <SiHashicorp />
                        HCL
                    </SegmentBlock>
                </div>
            </div>
        </>

    )

}

export default LanguageSegment;


