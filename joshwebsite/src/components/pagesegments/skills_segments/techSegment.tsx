import SegmentTitle from "./segmentTitle.tsx";
import SegmentBlock from "./segmentBlock.tsx";
import { FaAws, FaMicrosoft, FaDatabase, FaDocker } from "react-icons/fa";
import { SiKubernetes, SiN8N } from "react-icons/si";
import { SiAwslambda, SiElasticsearch } from "react-icons/si";
import { LuBrainCircuit, LuBrainCog } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
import { FcLinux } from "react-icons/fc";
import { DiCisco } from "react-icons/di";
import { AiOutlineOpenAI } from "react-icons/ai";

const TechSegment = () => {

    return (
        <>
            <div className="card bg-base-200 p-4 shadow">
                <SegmentTitle>Technologies</SegmentTitle>
                <br/>
                <div className="flex flex-wrap gap-2 mt-2">
                    <SegmentBlock>
                        <AiOutlineOpenAI/>
                        OpenAI
                    </SegmentBlock>
                    <SegmentBlock>
                        <LuBrainCircuit />
                        LLM
                    </SegmentBlock>
                    <SegmentBlock>
                        <LuBrainCog />
                        Machine Learning
                    </SegmentBlock>
                    <SegmentBlock>
                        <MdSupportAgent />
                        Agentic ops
                    </SegmentBlock>
                    <SegmentBlock>
                        <SiN8N className="text-orange-500" />
                        n8n
                    </SegmentBlock>
                    <SegmentBlock>
                        <FaAws/>
                        AWS
                    </SegmentBlock>
                    <SegmentBlock>
                        <FaMicrosoft/>
                        Azure
                    </SegmentBlock>
                    <SegmentBlock>
                        <SiKubernetes className="text-blue-700" />
                        Kubernetes
                    </SegmentBlock>
                    <SegmentBlock>
                        <SiAwslambda className="text-orange-600" />
                        Serverless
                    </SegmentBlock>
                    <SegmentBlock>
                        <FcLinux />
                        Linux
                    </SegmentBlock>
                    <SegmentBlock>
                        <SiElasticsearch />
                        Elastic/OpenSearch
                    </SegmentBlock>
                    <SegmentBlock>
                        <FaDatabase />
                        Databases
                    </SegmentBlock>
                    <SegmentBlock>
                        <FaDocker className="text-blue-500" />
                        Docker
                    </SegmentBlock>
                    <SegmentBlock>
                        <DiCisco className="text-green-800" />
                        Networking
                    </SegmentBlock>
                </div>
            </div>
            </>

            )

            }

            export default TechSegment;