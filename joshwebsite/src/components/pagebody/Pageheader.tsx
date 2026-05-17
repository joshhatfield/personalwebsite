import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Pageheader = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState<string>("about");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("theme");
            if (stored) return stored === "dark";
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return true;
    });
    const location = useLocation();

    // Apply theme
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDark ? "josh-dark" : "josh-light");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

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
                rootMargin: "-30% 0px -60% 0px",
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
        setMobileMenuOpen(false);
    };

    const isBlogPage = location.pathname.startsWith('/blog');

    const navItem = (id: string, label: string) => {
        // Special handling for blog link - always navigates to route
        if (id === "blog") {
            return (
                <li>
                    <Link
                        to="/blog"
                        className="relative px-4 py-3 text-lg font-medium transition-colors duration-300 w-full text-left text-base-content/70 hover:text-base-content"
                    >
                        {label}
                    </Link>
                </li>
            );
        }

        return (
            <li>
                {isBlogPage ? (
                    <Link
                        to="/"
                        className={`relative px-4 py-3 text-lg font-medium transition-colors duration-300 w-full text-left ${
                            activeSection === id
                                ? "text-primary"
                                : "text-base-content/70 hover:text-base-content"
                        }`}
                    >
                        {label}
                        <span
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left ${
                                activeSection === id ? "scale-100" : "scale-0"
                            }`}
                        />
                    </Link>
                ) : (
                    <button
                        onClick={() => scrollTo(id)}
                        className={`relative px-4 py-3 text-lg font-medium transition-colors duration-300 w-full text-left ${
                            activeSection === id
                                ? "text-primary"
                                : "text-base-content/70 hover:text-base-content"
                        }`}
                    >
                        {label}
                        {/* Active indicator */}
                        <span
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left ${
                                activeSection === id ? "scale-100" : "scale-0"
                            }`}
                        />
                    </button>
                )}
            </li>
        );
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
                    show ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                {/* Frosted glass navbar */}
                <nav className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-300/50 shadow-sm">
                    <div className="max-w-6xl mx-auto w-full px-4">
                        <div className="flex-1">
                            {/* Logo - Stylized JH monogram */}
                            <a href="#" className="btn btn-ghost text-xl font-bold tracking-tight hover:bg-primary/10">
                                <span className="text-primary">J</span>
                                <span className="text-accent">H</span>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal px-1 gap-1">
                                {navItem("aboutseg", "about")}
                                {navItem("skillsseg", "skills")}
                                {navItem("careerseg", "career")}
                                {navItem("blog", "blog")}
                                <li>
                                    <button
                                        onClick={() => setIsDark(!isDark)}
                                        className="px-4 py-2 text-base font-medium text-base-content/70 hover:text-base-content"
                                        aria-label="Toggle theme"
                                    >
                                        {isDark ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                            </svg>
                                        )}
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Mobile Hamburger - larger button */}
                        <div className="flex-none lg:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="btn btn-ghost p-3 min-h-12 min-w-12"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Drawer - slides in from the right */}
            <div
                className={`fixed inset-y-0 right-0 z-50 w-72 bg-base-100 shadow-xl transform transition-transform duration-300 lg:hidden ${
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close button */}
                <div className="p-4 border-b border-base-300 flex justify-end">
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="btn btn-ghost btn-square"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Nav items */}
                <nav className="p-4">
                    <ul className="menu w-full p-0">
                        {navItem("aboutseg", "about")}
                        {navItem("skillsseg", "skills")}
                        {navItem("careerseg", "career")}
                        {navItem("blog", "blog")}
                    </ul>
                </nav>

                {/* Theme toggle at bottom of drawer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-base-300">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="btn btn-outline w-full"
                    >
                        {isDark ? (
                            <>
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                Light Mode
                            </>
                        ) : (
                            <>
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                                Dark Mode
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Backdrop overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </>
    );
};

export default Pageheader;