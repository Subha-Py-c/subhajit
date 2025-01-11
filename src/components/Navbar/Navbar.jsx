import { useState, useEffect } from "react";
import "./Navbar.css";
import Header from "../Header/Header";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeIndices, setActiveIndices] = useState(new Set());
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const navItems = [
        { href: "#s1", text: "Home" },
        { href: "#EX", text: "Experience" },
        { href: "#s-last", text: "Academics" },
        { href: "#SK", text: "Skills" },
        { href: "#div3", text: "Projects" },
        { href: "#s4-contacts", text: "Contact" },
    ];

    const toggleNav = (open) => {
        setIsNavOpen(open);
        if (open) {
            navItems.forEach((_, index) => {
                setTimeout(() => {
                    setActiveIndices((prev) => new Set([...prev, index]));
                }, index * 50);
            });
        } else {
            navItems.forEach((_, index) => {
                setTimeout(() => {
                    setActiveIndices((prev) => {
                        const newSet = new Set([...prev]);
                        newSet.delete(index);
                        return newSet;
                    });
                }, index * 50);
            });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 5000) {
                const handleLiClick = (event) => {
                    const link = event.currentTarget.querySelector("a");
                    if (link) {
                        link.click();
                    }
                };

                const lis = document.querySelectorAll(".li");
                lis.forEach((li) => {
                    li.addEventListener("click", handleLiClick);
                });

                return () => {
                    lis.forEach((li) => {
                        li.removeEventListener("click", handleLiClick);
                    });
                };
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className="nav flexed"
            id="nav"
            style={{ height: isNavOpen ? "75vh" : "0vh" }}
        >
            <div className="ul full" id="ul">
                {navItems.map((item, index) => (
                    <div
                        className={`li ${activeIndices.has(index) ? "active" : ""}`}
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <span
                            className={`sp ${hoveredIndex === index ? "active" : ""}`}
                        >
                            <a href={item.href} className="link link--thebe">
                                {item.text}
                            </a>
                        </span>
                    </div>
                ))}
            </div>

            <Header isNavOpen={isNavOpen} toggleNav={toggleNav} />
        </div>
    );
};

export default Navbar;
