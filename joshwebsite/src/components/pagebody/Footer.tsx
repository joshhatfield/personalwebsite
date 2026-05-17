import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-200 border-t border-base-300/50 py-8 mt-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <div className="text-base-content/60 text-sm">
                        © {currentYear} Josh Hatfield. All rights reserved.
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/joshhatfield"
                            className="btn btn-ghost btn-sm gap-2 text-base-content/70 hover:text-primary"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                            <span className="hidden md:inline">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/jhatfieldcloud"
                            className="btn btn-ghost btn-sm gap-2 text-base-content/70 hover:text-primary"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                            <span className="hidden md:inline">LinkedIn</span>
                        </a>
                    </div>

                    {/* Built with */}
                    <div className="text-base-content/60 text-sm flex items-center gap-1">
                        Built with care, code is on my github.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;