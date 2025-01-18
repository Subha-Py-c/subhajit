import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import "./Loader.css";

const Loader = () => {
    useEffect(() => {
        // Initialize text opacity when component mounts (similar to DOMContentLoaded)
        const loadingText = document.querySelector(".loading__text");

        // initial wait to load the font
        const initTimer = setTimeout(() => {
            if (loadingText) {
                loadingText.style.opacity = 1;
            }
        }, 150);

        // Function to handle the loader removal animation
        const removeLoader = (duration) => {
            const text = new SplitType(".loading__text", {
                types: "words, chars",
            });

            // time durations
            const textDuration = 1;
            // const sliderDuration = 1.4;
            const sliderDuration = 0.7;
            // total = textDuration + sliderDuration

            const animationTimer = setTimeout(() => {
                gsap.to(text.chars, {
                    y: "100%",
                    duration: textDuration,
                    stagger: 0.1,
                    ease: "power4.in",
                    onComplete: () => {
                        const tl = gsap.timeline();
                        tl.to(".loader__slide1", {
                            y: "-100%",
                            duration: sliderDuration,
                            ease: "power4.out",
                        });
                        tl.to(
                            ".loader__slide2",
                            {
                                y: "100%",
                                duration: sliderDuration,
                                ease: "power4.out",
                                onComplete: () => {
                                    // Hide loader
                                    const hideTimer = setTimeout(() => {
                                        const loader =
                                            document.getElementById("loader");
                                        if (loader) {
                                            loader.style.display = "none";
                                        }
                                    }, 100);

                                    // Add appear-gradually class to first set of paragraphs
                                    const firstParagraphTimer = setTimeout(
                                        () => {
                                            const paragraphs =
                                                document.querySelectorAll(
                                                    ".about-section .about-content p",
                                                );
                                            paragraphs.forEach((paragraph) => {
                                                paragraph.classList.add(
                                                    "appear-gradually",
                                                );
                                            });
                                        },
                                        200,
                                    );

                                    // Add appear-gradually class to second set of paragraphs
                                    const secondParagraphTimer = setTimeout(
                                        () => {
                                            const paragraphs =
                                                document.querySelectorAll(
                                                    "#s1 > div > div > p",
                                                );
                                            paragraphs.forEach((paragraph) => {
                                                paragraph.classList.add(
                                                    "appear-gradually",
                                                );
                                            });
                                        },
                                        500,
                                    );

                                    // Cleanup timers when animation completes
                                    return () => {
                                        clearTimeout(hideTimer);
                                        clearTimeout(firstParagraphTimer);
                                        clearTimeout(secondParagraphTimer);
                                    };
                                },
                            },
                            "<",
                        );
                    },
                });
            }, duration);

            // Cleanup animation timer
            return () => clearTimeout(animationTimer);
        };

        // Start the removal animation when window loads
        const handleLoad = () => {
            removeLoader(0);
        };

        window.addEventListener("load", handleLoad);

        // Cleanup function
        return () => {
            clearTimeout(initTimer);
            window.removeEventListener("load", handleLoad);
            // Kill any ongoing GSAP animations
            gsap.killTweensOf(".loading__text");
            gsap.killTweensOf(".loader__slide1");
            gsap.killTweensOf(".loader__slide2");
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div id="loader" className="loader">
            <div className="loading__text">Welcome</div>
            <div className="loader__slide1"></div>
            <div className="loader__slide2"></div>
        </div>
    );
};

export default Loader;
