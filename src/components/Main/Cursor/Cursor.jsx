import React, { useEffect, useRef, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
    const cursorRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    const [scale, setScale] = useState(0.12); // initial_scale

    // Constants
    const FIXING = 45;
    const INITIAL_SCALE = 0.12;
    const EXPANDED = 1;

    useEffect(() => {
        const cursor = cursorRef.current;

        // Check for mobile device
        const isDeviceMobile = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            const isAndroid = userAgent.includes("android");
            const isIOS = /iphone|ipad|ipod/.test(userAgent);
            const isSmallScreen = window.innerWidth < 768;
            return isAndroid || isIOS || isSmallScreen;
        };

        // Hide cursor on mobile devices
        if (isDeviceMobile()) {
            setIsVisible(false);
            return;
        }

        // Mouse movement handler
        const handleMouseMove = (e) => {
            if (cursor) {
                cursor.style.top = "0";
                cursor.style.transform = `translate(${e.clientX - FIXING}px, ${
                    e.clientY - FIXING
                }px) scale(${scale})`;
            }
        };

        // Elements that trigger cursor expansion
        const elementIds = [
            "gallery",
            "b-c",
            "skill",
            "project-heading",
            "contact-heading",
            "cv",
            "academic__header",
        ];

        const handleElementHover = (e, isEntering) => {
            const newScale = isEntering ? EXPANDED : INITIAL_SCALE;
            setScale(newScale);
            if (cursor) {
                cursor.style.transform = `translate(${e.clientX - FIXING}px, ${
                    e.clientY - FIXING
                }px) scale(${newScale})`;
            }
        };

        // Add hover listeners to elements
        elementIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener("mouseover", (e) =>
                    handleElementHover(e, true),
                );
                element.addEventListener("mouseout", (e) =>
                    handleElementHover(e, false),
                );
            }
        });

        // Special elements that hide cursor
        const boxElement = document.querySelector(".box");
        if (boxElement) {
            boxElement.addEventListener("mouseover", () => setIsVisible(false));
            boxElement.addEventListener("mouseout", () => setIsVisible(true));
        }

        // Class-based elements
        const cardContainer = document.querySelector(".card-container");
        const experienceHeading = document.querySelector(
            ".experience--heading",
        );
        [cardContainer, experienceHeading].forEach((element) => {
            if (element) {
                element.addEventListener("mouseover", (e) =>
                    handleElementHover(e, true),
                );
                element.addEventListener("mouseout", (e) =>
                    handleElementHover(e, false),
                );
            }
        });

        // Add global mouse move listener
        document.addEventListener("mousemove", handleMouseMove);

        // Cleanup
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            elementIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    element.removeEventListener("mouseover", (e) =>
                        handleElementHover(e, true),
                    );
                    element.removeEventListener("mouseout", (e) =>
                        handleElementHover(e, false),
                    );
                }
            });
            if (boxElement) {
                boxElement.removeEventListener("mouseover", () =>
                    setIsVisible(false),
                );
                boxElement.removeEventListener("mouseout", () =>
                    setIsVisible(true),
                );
            }
            [cardContainer, experienceHeading].forEach((element) => {
                if (element) {
                    element.removeEventListener("mouseover", (e) =>
                        handleElementHover(e, true),
                    );
                    element.removeEventListener("mouseout", (e) =>
                        handleElementHover(e, false),
                    );
                }
            });
        };
    }, [scale]); // Include scale in dependencies array

    if (!isVisible) return null;

    return (
        <div
            ref={cursorRef}
            className="cursor"
            style={{ display: isVisible ? "block" : "none" }}
        />
    );
};

export default Cursor;
