import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-base-200 via-base-100 to-base-200">
                {/* Subtle grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(hsl(var(--p)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--p)) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <div className="card bg-base-100/60 backdrop-blur-sm border border-base-300/50 shadow-2xl overflow-hidden">
                    {/* Gradient top border accent */}
                    <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <img
                                        src="/jhavatar.png"
                                        alt="Josh Hatfield"
                                        className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-base-300 shadow-2xl"
                                    />
                                    {/* Status indicator */}
                                    <span className="absolute bottom-2 right-2 w-5 h-5 bg-success rounded-full border-4 border-base-100" title="Open to opportunities" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left space-y-4">
                                <div>
                                    <h1 className="text-hero font-bold text-base-content tracking-tight">
                                        Josh Hatfield
                                    </h1>
                                    <p className="text-xl md:text-2xl text-primary font-semibold mt-2">
                                        Principal Cloud Architect · AI/ML · Platform Engineering
                                    </p>
                                </div>

                                <p className="text-base-content/80 leading-relaxed max-w-xl">
                                    Experienced engineer and leader specializing in scalable large scale automation,
                                    full-stack development and Machine Learning systems. Passionate about building resilient
                                    systems and clean UIs.
                                </p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
                                    <a
                                        href="/Josh_hatfield_cv.pdf"
                                        className="btn btn-primary gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                        download
                                    >
                                        <FaDownload /> Download CV
                                    </a>
                                    <a
                                        href="https://github.com/joshhatfield"
                                        className="btn btn-outline gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/jhatfieldcloud"
                                        className="btn btn-accent gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaLinkedin /> LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;