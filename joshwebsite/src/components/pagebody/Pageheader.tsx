import { useEffect, useState } from "react";

const Pageheader = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

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
                    <li><a className="btn btn-ghost text-l">about</a></li>
                    <li><a className="btn btn-ghost text-l">skills</a></li>
                    <li><a className="btn btn-ghost text-l">Career</a></li>
                </ul>
            </div>
            <div className="navbar-end"></div>
        </div>
    );
};

export default Pageheader;
