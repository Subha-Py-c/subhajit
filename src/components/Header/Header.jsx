import { useEffect, useState } from "react";
import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ isNavOpen, toggleNav }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    // Constants for strong text colors
    const STRONG_COLOR_LIGHT = "rgb(0, 0, 0)";
    const STRONG_COLOR_DARK = "rgb(242, 28, 121)";

    useEffect(() => {
        // Initialize dark mode from localStorage
        const savedDarkMode = localStorage.getItem("darkMode") === "true";
        setIsDarkMode(savedDarkMode);
        applyDarkMode(savedDarkMode);
    }, []);

    const applyDarkMode = (isDark) => {
        const root = document.documentElement;
        const handElements = document.querySelectorAll(".ta-ta");
        const strongElements = document.getElementsByTagName("strong");
        if (isDark) {
            root.classList.add("invert");
            handElements.forEach(
                (element) => (element.style.filter = "invert(100%)"),
            );
            Array.from(strongElements).forEach((el) => {
                el.style.color = STRONG_COLOR_DARK;
            });
        } else {
            root.classList.remove("invert");
            handElements.forEach(
                (element) => (element.style.filter = "invert(0%)"),
            );
            Array.from(strongElements).forEach((el) => {
                el.style.color = STRONG_COLOR_LIGHT;
            });
        }
    };

    const easeInOutCubic = (t) => {
        return t < 0.5
            ? 4 * t * t * t
            : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const scrollToTarget = (targetOffset, duration) => {
        const startingY = window.pageYOffset;
        const diff = targetOffset - startingY;
        let start;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            const time = timestamp - start;
            const percent = Math.min(time / duration, 1);
            const easedT = easeInOutCubic(percent);
            window.scrollTo(0, startingY + diff * easedT);
            if (time < duration) {
                window.requestAnimationFrame(step);
            }
        });
    };

    useEffect(() => {
        const handleAnchorClick = (e) => {
            const href = e.currentTarget.getAttribute("href");
            if (href.startsWith("#") || !href.startsWith("http")) {
                e.preventDefault();
                const targetId = href;
                const target = document.querySelector(targetId);
                if (!target) return;
                const targetRect = target.getBoundingClientRect();
                const targetOffset = targetRect.top + window.pageYOffset;
                const scrollDistance = Math.abs(targetOffset - window.scrollY);
                const scrollDuration = Math.min(1000, scrollDistance);
                scrollToTarget(targetOffset, scrollDuration);
            }
        };

        document.querySelectorAll("a").forEach((anchor) => {
            anchor.addEventListener("click", handleAnchorClick);
        });

        // Cleanup
        return () => {
            document.querySelectorAll("a").forEach((anchor) => {
                anchor.removeEventListener("click", handleAnchorClick);
            });
        };
    }, []);
    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem("darkMode", newDarkMode);
        applyDarkMode(newDarkMode);
    };

    return (
        <header className="flexed justify-between">
            <button
                id="invert-button"
                className="filters"
                onClick={toggleDarkMode}
            >
                {isDarkMode ? (
                    <i id="moon-icon" className="fas fa-moon"></i>
                ) : (
                    <i id="sun-icon" className="fas fa-sun"></i>
                )}
            </button>
            {/* nav ham icon */}
            <div
                className="nav-menu"
                style={{ display: isNavOpen ? "none" : "flex" }}
                onClick={() => toggleNav(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    className="nav-icon"
                    id="nav-icon"
                >
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                    className="nav-icon"
                    id="nav-icon-2"
                >
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
                </svg>
            </div>
            {/* nav close icon */}
            <div
                id="cl-icon"
                className="close-icon"
                style={{ display: isNavOpen ? "flex" : "none" }}
                onClick={() => toggleNav(false)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="100"
                    viewBox="0 -960 960 960"
                    width="100"
                    fill="#000"
                >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            </div>
        </header>
    );
};

export default Header;

Header.propTypes = {
    isNavOpen: PropTypes.bool,
    toggleNav: PropTypes.func,
};
