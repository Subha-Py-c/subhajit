import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const Loader = () => {
    const loaderRef = useRef(null);
    const textRef = useRef(null);
    const contextRef = useRef(null);
    const splitTextRef = useRef(null);

    const clearAnimations = () => {
        if (contextRef.current) {
            contextRef.current.revert();
        }
        if (splitTextRef.current) {
            splitTextRef.current.revert();
        }
    };

    useEffect(() => {
        const textTimeout = setTimeout(() => {
            if (textRef.current) {
                gsap.set(textRef.current, { opacity: 1 });
            }
        }, 150);

        return () => {
            clearTimeout(textTimeout);
            clearAnimations();
        };
    }, []);

    useEffect(() => {
        const startAnimation = () => {
            if (!textRef.current || !loaderRef.current) return;

            clearAnimations();

            contextRef.current = gsap.context(() => {
                splitTextRef.current = new SplitType(textRef.current, {
                    types: "words, chars",
                });
                const chars = splitTextRef.current.chars;

                const mainTL = gsap.timeline();

                mainTL.to(chars, {
                    y: "100%",
                    duration: 1,
                    stagger: 0.1,
                    ease: "power4.in",
                    onComplete: () => {
                        const tl = gsap.timeline();

                        tl.to(".loader__slide1", {
                            y: "-100%",
                            duration: 1.42,
                            ease: "power4.out",
                        });

                        tl.to(
                            ".loader__slide2",
                            {
                                y: "100%",
                                duration: 1.42,
                                ease: "power4.out",
                                onComplete: () => {
                                    setTimeout(() => {
                                        if (loaderRef.current) {
                                            loaderRef.current.style.display =
                                                "none";
                                        }
                                    }, 100);

                                    setTimeout(() => {
                                        const paragraphs =
                                            document.querySelectorAll(
                                                ".about-section .about-content p",
                                            );
                                        paragraphs.forEach((paragraph) => {
                                            paragraph.classList.add(
                                                "appear-gradually",
                                            );
                                        });
                                    }, 200);

                                    setTimeout(() => {
                                        const paragraphs =
                                            document.querySelectorAll(
                                                "#s1 > div > div > p",
                                            );
                                        paragraphs.forEach((paragraph) => {
                                            paragraph.classList.add(
                                                "appear-gradually",
                                            );
                                        });
                                    }, 500);
                                },
                            },
                            "<",
                        );
                    },
                });
            }, loaderRef.current);
        };

        const loadTimeout = setTimeout(() => {
            startAnimation();
        }, 150);

        return () => {
            clearTimeout(loadTimeout);
            clearAnimations();
        };
    }, []);

    return (
        <div
            ref={loaderRef}
            id="loader"
            className="loader"
            style={{
                zIndex: 999999999,
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                pointerEvents: "none",
                backgroundColor: "transparent",
                fontKerning: "none",
            }}
        >
            <div
                ref={textRef}
                className="loading__text"
                style={{
                    fontFamily: "Dahlia",
                    fontSize: "4rem",
                    fontWeight: 750,
                    display: "grid",
                    placeItems: "center",
                    width: "300px",
                    height: "auto",
                    position: "absolute",
                    top: "calc(50vh - 75px)",
                    left: "calc(50vw - 150px)",
                    fontKerning: "none",
                    backgroundColor: "transparent",
                    color: "white",
                    opacity: 0,
                    "@media (maxWidth: 768px)": {
                        fontSize: "3rem",
                    },
                }}
            >
                Welcome
            </div>
            <div
                className="loader__slide1"
                style={{
                    backgroundColor: "black",
                    width: "100%",
                    height: "50%",
                }}
            />
            <div
                className="loader__slide2"
                style={{
                    backgroundColor: "black",
                    width: "100%",
                    height: "50%",
                }}
            />
        </div>
    );
};

export default Loader;
