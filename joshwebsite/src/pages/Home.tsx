import { useEffect, useRef } from "react";
import Pageheader from "../components/pagebody/Pageheader.tsx";
import Footer from "../components/pagebody/Footer.tsx";
import Hero from "../components/pagesegments/Hero.tsx";
import SkillsAccordion from "../components/pagesegments/Skills.tsx";
import Career from "../components/pagesegments/Career.tsx";
import About from "../components/pagesegments/About.tsx";

const Home = () => {
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in");
                        entry.target.classList.remove("opacity-0");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Pageheader />

            <main className="flex-1 pt-16">
                <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
                    <section
                        ref={(el) => { sectionRefs.current[0] = el; }}
                        className="opacity-0 transition-opacity duration-700"
                    >
                        <Hero />
                    </section>

                    <section
                        ref={(el) => { sectionRefs.current[1] = el; }}
                        className="opacity-0 transition-opacity duration-700"
                    >
                        <About />
                    </section>

                    <section
                        ref={(el) => { sectionRefs.current[2] = el; }}
                        className="opacity-0 transition-opacity duration-700"
                    >
                        <SkillsAccordion />
                    </section>

                    <section
                        ref={(el) => { sectionRefs.current[3] = el; }}
                        className="opacity-0 transition-opacity duration-700"
                    >
                        <Career />
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;