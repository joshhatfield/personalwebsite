import { FaUsers, FaShieldAlt, FaCloud, FaChartLine, FaGraduationCap } from "react-icons/fa";
import { MdSecurity, MdArchitecture } from "react-icons/md";

type LeadershipSkill = {
    title: string;
    description: string;
    icon: React.ReactNode;
};

const leadershipSkills: LeadershipSkill[] = [
    {
        title: "Strategic Planning",
        description: "Setting technical direction and aligning engineering efforts with business strategy through structured planning and architecture review.",
        icon: <FaChartLine className="text-2xl" />
    },
    {
        title: "Team Building",
        description: "Mentoring developers across all levels, driving cross-team alignment, and empowering teams to deliver with autonomy.",
        icon: <FaUsers className="text-2xl" />
    },
    {
        title: "Security Leadership",
        description: "Security-first architecture, threat modelling, and embedding compliance into CI/CD pipelines (PCI DSS, IRAP, CSTAR).",
        icon: <FaShieldAlt className="text-2xl" />
    },
    {
        title: "Cloud Architecture",
        description: "Designing scalable, resilient multi-cloud solutions (AWS, Azure) that align with security and compliance requirements.",
        icon: <FaCloud className="text-2xl" />
    },
    {
        title: "Executive Partnership",
        description: "Trusted advisor to C-suite on technology strategy, design decisions, and product future direction.",
        icon: <MdSecurity className="text-2xl" />
    },
    {
        title: "Technical Mentorship",
        description: "Education and mentorship of engineers on new development practices, up to and including peer programming.",
        icon: <FaGraduationCap className="text-2xl" />
    },
];

const LeadershipCard = ({ skill }: { skill: LeadershipSkill }) => {
    return (
        <div className="card bg-base-200 hover:bg-base-300/50 transition-colors duration-300 group">
            <div className="card-body p-5">
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        {skill.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base-content mb-1">{skill.title}</h3>
                        <p className="text-sm text-base-content/70 leading-relaxed">
                            {skill.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LeadershipSegment = () => {
    return (
        <div className="card bg-base-200 p-4 shadow">
            <div className="flex items-center gap-2 mb-4">
                <MdArchitecture className="text-xl text-primary" />
                <h2 className="text-xl font-bold text-base-content">Leadership & Strategy</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {leadershipSkills.map((skill, index) => (
                    <LeadershipCard key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export default LeadershipSegment;