import SegmentTitle from "./segmentTitle.tsx";
import SegmentProgress from "./segmentProgress.tsx";


const ExperienceSegment = () => {

    return (
        <>
            <div className="card bg-base-200 p-4 shadow">
                <SegmentTitle>Experience</SegmentTitle>
                <br/>
                <div className="join join-vertical bg-base-100">
                    <SegmentProgress name="Machine Learning and AI" barcolour="progress-accent" value="75">
                        <div className="collapse-content text-sm">I’ve led the design and deployment of machine learning systems from prototype to production, guiding teams through model development, MLOps workflows, and ethical AI considerations. My experience includes fine-tuning large language models, building real-time inference pipelines, and aligning ML initiatives with product and business goals. I focus on creating scalable, maintainable ML platforms, fostering cross-functional collaboration between data science and engineering, and mentoring teams to bridge the gap between research and reliable delivery.</div>
                    </SegmentProgress>
                    <SegmentProgress name="Cybersecurity" barcolour="progress-primary" value="95">
                        <div className="collapse-content text-sm">As a staff engineer and technical leader, I’ve driven security-first architecture and implementation across cloud-native and on-prem systems. I’ve led teams in designing and enforcing secure development practices, conducted threat modelling, and embedded compliance into CI/CD pipelines. My work spans regulatory frameworks including PCI DSS, IRAP, and CSTAR, ensuring platforms meet both internal risk standards and external audit requirements. I actively mentor engineers on secure coding, incident response readiness, and evolving threat landscapes.  I am frequently involved in customer due dilligence and third part interaction.</div>
                    </SegmentProgress>
                    <SegmentProgress name="Team Leadership" barcolour="progress-secondary" value="85">
                        <div className="collapse-content text-sm">Over the course of my career, I’ve led and scaled engineering teams through rapid growth, organizational change, and complex delivery environments. As a staff engineer and manager, I’ve mentored developers across all levels, driven cross-team alignment on critical projects, and helped shape engineering strategy and technical direction. I prioritize clear communication, thoughtful delegation, and career development, empowering teams to deliver with autonomy while maintaining technical excellence and alignment with business goals.</div>
                    </SegmentProgress>
                    <SegmentProgress name="Devops and Cloud automation" barcolour="progress-accent" value="95">
                        <div className="collapse-content text-sm"> I’ve architected and implemented automated cloud infrastructure and CI/CD pipelines at scale, enabling fast, reliable, and secure delivery across multiple teams. With deep experience in infrastructure-as-code, container orchestration, and observability tooling, I’ve led DevOps transformations that improve system resilience and developer velocity. I champion automation, platform thinking, and developer self-service, ensuring that cloud environments are scalable, maintainable, and aligned with security and compliance requirements.</div>
                    </SegmentProgress>
                    <SegmentProgress name="Regulatory Compliance frameworks" barcolour="progress-primary" value="90">
                        <div className="collapse-content text-sm">I’ve led the implementation of engineering practices and platform controls to meet stringent regulatory standards, including PCI DSS, IRAP, CSTAR, and ISO 27001. Working closely with security, risk, and compliance teams, I’ve embedded auditability, access control, and data protection into cloud infrastructure and software delivery pipelines. I am also frequently the point of interaction with external audits and third party risk assessments, ensuring that compliance is treated as a shared engineering responsibility—not a bolt-on requirement.</div>
                    </SegmentProgress>
                    <SegmentProgress name="Planning and Governance" barcolour="progress-secondary" value="80">
                        <div className="collapse-content text-sm">played a key role in setting technical direction and aligning engineering efforts with business strategy through structured planning, architecture review, and cross-functional collaboration. I bring a governance mindset to engineering—balancing speed and risk by introducing clear decision-making frameworks, technical standards, and review processes. I’ve  established  roadmaps, architecture frameworks, maturity OKR's and platform principles that enable teams to scale sustainably while maintaining alignment, accountability, and architectural integrity.</div>
                    </SegmentProgress>
                    <SegmentProgress name="Management" barcolour="progress-primary" value="75">
                        <div className="collapse-content text-sm">I’ve managed distributed engineering and operations teams across Australia, South Asia, and overseas, in both technical delivery and process-driven roles. My responsibilities have included leading on-call rotations and coordinating follow-the-sun support models to ensure 24/7 system reliability and rapid incident response. I’ve operated as both a product manager and direct people leader, bridging cultural and time zone differences to keep teams aligned, motivated, and effective. I focus on driving clarity, fostering accountability, and adapting leadership styles to match team needs—whether scaling agile product teams or stabilizing mission-critical operations.</div>
                    </SegmentProgress>
                    <SegmentProgress name="Architecture Design and Planning" barcolour="progress-accent" value="80">
                        <div className="collapse-content text-sm">I’ve led the design and evolution of complex systems across cloud, security, and application domains—balancing scalability, resilience, and delivery velocity. As a staff engineer, I drive architectural decisions through collaboration, deep technical analysis, and alignment with long-term business goals. I’ve authored platform blueprints, facilitated architecture review boards, and guided teams through trade-off discussions to ensure technical choices support both present needs and future flexibility. My approach emphasizes clarity, composability, and enabling teams to build with confidence.</div>
                    </SegmentProgress>
                </div>
            </div>
        </>

            )

            };

            export default ExperienceSegment