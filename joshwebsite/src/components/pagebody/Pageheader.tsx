import { useEffect, useState } from "react";
import ThemeController from "./ThemeController";

const Pageheader = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState<string>("about");

    // Handle hide/show on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShow(currentScrollY < lastScrollY || currentScrollY < 50);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Detect which section is in view
    useEffect(() => {
        const sections = ["about", "skills", "career"];
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting);
                if (visible) {
                    setActiveSection(visible.target.id);
                }
            },
            {
                rootMargin: "-30% 0px -60% 0px", // adjust trigger zone
                threshold: 0.1,
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Scroll to section on click
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItem = (id: string, label: string) => (
        <li>
            <button
                onClick={() => scrollTo(id)}
                className={`btn btn-ghost text-l ${
                    activeSection === id ? "bg-primary text-primary-content" : ""
                }`}
            >
                {label}
            </button>
        </li>
    );

    return (
        <div
            className={`navbar bg-base-100 shadow-sm sticky top-0 z-50 transition-transform duration-300 ${
                show ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">JH</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem("aboutseg", "about")}
                    {navItem("skillsseg", "skills")}
                    {navItem("careerseg", "career")}
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeController />
            </div>
        </div>
    );
};

export default Pageheader;
