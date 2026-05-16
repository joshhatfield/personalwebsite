import PageCard from "../pagebody/PageCard.tsx";

const About = () => {

    return (
        <div id="aboutseg" className="scroll-mt-20">
            <PageCard>
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-section font-bold text-base-content mb-6">
                        About Me
                    </h2>
                    <p className="text-lg text-base-content/80 leading-relaxed">
                        An experienced Manager, Leader and Engineer of highly effective cloud computing and security
                        focused engineering teams for global scale companies. A wide range of skills from management to
                        hands-on design and implementation of world-class solutions to fit company and customer needs.
                    </p>
                    <p className="text-lg text-base-content/80 leading-relaxed mt-4">
                        Serving as Principal Cloud Architect at Objective Corporation (ASX:OCL),
                        I lead cloud strategy, AI initiatives, and application design for global solutions.
                        My expertise spans cloud architecture, machine learning systems, DevOps transformation, Platform engineering
                        and building high-performing global teams.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <span className="badge badge-primary badge-lg">Cloud Architecture</span>
                        <span className="badge badge-secondary badge-lg">AI/ML</span>
                        <span className="badge badge-accent badge-lg">DevSecOps</span>
                        <span className="badge badge-outline badge-lg">Team Leadership</span>
                        <span className="badge badge-outline badge-lg">Compliance</span>
                    </div>
                </div>
            </PageCard>
        </div>
    )

}

export default About;