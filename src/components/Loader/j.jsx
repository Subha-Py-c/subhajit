import { useEffect, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import "./Loader.css";

const Loader = () => {
    // Add state to track loading status
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let cleanupFunctions = [];

        // Initialize text opacity
        const loadingText = document.querySelector(".loading__text");
        if (loadingText) {
            loadingText.style.opacity = 1;
        }

        // Function to handle the loader removal animation
        const removeLoader = () => {
            try {
                const text = new SplitType(".loading__text", {
                    types: "words, chars",
                });

                const textDuration = 1;
                const sliderDuration = 0.7;

                // Create animation sequence
                const sequence = async () => {
                    // Animate text
                    await gsap.to(text.chars, {
                        y: "100%",
                        duration: textDuration,
                        stagger: 0.1,
                        ease: "power4.in",
                    });

                    // Animate slides
                    const tl = gsap.timeline();
                    await tl.to(".loader__slide1", {
                        y: "-100%",
                        duration: sliderDuration,
                        ease: "power4.out",
                    });

                    await tl.to(
                        ".loader__slide2",
                        {
                            y: "100%",
                            duration: sliderDuration,
                            ease: "power4.out",
                            onComplete: () => {
                                // Update state to remove loader
                                setIsLoaded(true);

                                // Add appear-gradually classes
                                const paragraphs = document.querySelectorAll(
                                    ".about-section .about-content p, #s1 > div > div > p",
                                );
                                paragraphs.forEach((paragraph) => {
                                    paragraph.classList.add("appear-gradually");
                                });
                            },
                        },
                        "<",
                    );
                };

                sequence().catch(console.error);
            } catch (error) {
                console.error("Error in removeLoader:", error);
                // Fallback - force remove loader if animation fails
                setIsLoaded(true);
            }
        };

        // Start removal animation after a short delay
        const loadTimer = setTimeout(() => {
            removeLoader();
        }, 500);

        cleanupFunctions.push(() => clearTimeout(loadTimer));

        // Cleanup function
        return () => {
            cleanupFunctions.forEach((cleanup) => cleanup());
            gsap.killTweensOf(
                ".loading__text, .loader__slide1, .loader__slide2",
            );
        };
    }, []); // Empty dependency array means this runs once on mount

    // Don't render if loaded
    if (isLoaded) return null;

    return (
        <div id="loader" className="loader">
            <div className="loading__text">Welcome</div>
            <div className="loader__slide1"></div>
            <div className="loader__slide2"></div>
        </div>
    );
};

export default Loader;
