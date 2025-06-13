import React from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Home: React.FC = () => {
    return (
        <main className="min-h-screen bg-base-100 text-base-content flex items-center justify-center p-8">
            <div className="max-w-3xl w-full card bg-base-200 shadow-xl p-8 rounded-box">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Josh Hatfield</h1>
                    <p className="text-xl text-primary">Cloud Engineer · DevOps · React/Golang Developer</p>
                    <p className="text-base">
                        Experienced engineer specializing in scalable cloud infrastructure, automation, and full-stack development. Passionate about building resilient systems and clean UIs.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <a href="/cv.pdf" className="btn btn-primary gap-2">
                            <FaDownload /> Download CV
                        </a>
                        <a href="https://github.com/yourusername" className="btn btn-neutral gap-2" target="_blank" rel="noreferrer">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" className="btn btn-accent gap-2" target="_blank" rel="noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
