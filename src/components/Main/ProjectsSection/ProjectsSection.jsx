import React, { useEffect, useRef, useState } from "react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
    const projectWrapperRef = useRef(null);
    const [clickedIndex, setClickedIndex] = useState(null);

    const projects = [
        {
            title: "LumiFeed",
            summary: "A neat platform for reading news.",
            description:
                "A webapp with clutterless UI to read news without advertisements, along with summary of each news available. Many other mindblowing features available.",
            type: "Solo Project",
            technologies: [
                "flask (for backend)",
                "SQL database [postgresql & sqlite]",
                "JavaScript AJAX and Fetch api",
                "Web Scraping [requests, bs4]",
                "HTML, CSS, SASS, figma",
                "AI Summary api",
            ],
            link: "https://lumifeed.up.railway.app",
            image: "images/projects-imgs/lumifeed.jpeg",
        },
        {
            title: "encryptease",
            summary: "Encrypt your data easily. (fun app)",
            description:
                "A powerful webapp to encrypt messages and files easily that are highly secure and cannot be decrypted without the encryption KEY.",
            type: "Solo Project",
            technologies: [
                "flask",
                "Cryptography Module (python)",
                "JavaScript AJAX",
                "HTML - CSS - JS",
            ],
            link: "https://encryptease.pythonanywhere.com",
            image: "images/projects-imgs/encryptease.jpeg",
        },
        {
            title: "Portfolio",
            summary: "This portfolio website you are in right now.",
            description:
                "A portfolio Website to easily introduce me to everyone.",
            type: "Solo Project",
            technologies: ["React", "HTML-CSS-JavaScript", "GSAP", "UI-UX"],
            link: "https://github.com/Subha-Py-c/subhajit",
            image: "images/projects-imgs/portfolio.jpeg",
        },
        {
            title: "opencanvas.blog",
            summary: "A retro blogging site for everyone.",
            description:
                "Currently IN MAKING. various blogs and journals will be published here later on.",
            type: "Collaborative project",
            technologies: [
                "Mongo - Express - React - Node [MERN]",
                "TailwindCSS & SASS",
                "websocket",
                "...",
            ],
            link: "https://dream-world-coder.github.io/opencanvas/hero/",
            image: "images/projects-imgs/opencanvas.jpeg",
        },
        {
            title: "Zentunes",
            summary: "Ear-soothing music anywhere.",
            description:
                "A music streaming platform for retro lovers. Some development is yet to do, sorry!!",
            type: "Solo Project",
            technologies: ["HTML", "CSS", "JavaScript", "SCSS", "React"],
            link: "https://zentunes.netlify.app",
            image: "images/projects-imgs/krishisearch.jpeg",
        },
        {
            title: "Maze Battle Game",
            summary: "Player vs CPU maze runnig game",
            description: "",
            type: "Solo Project",
            technologies: ["JavaScript", "CSS", "HTML"],
            link: "https://mazebattle.netlify.app",
            image: "images/projects-imgs/relaxingmelody.jpeg",
        },
    ];

    useEffect(() => {
        const projectWrapper = projectWrapperRef.current;
        const smallCards = projectWrapper.querySelectorAll(".project");
        const projectImgs = projectWrapper.querySelectorAll(
            ".project__image img",
        );
        const projectChildren = [...projectImgs];
        let initialPositions = new Map();
        const coeff = 100;
        const coeff2 = 0.05;

        // Mouse move animation for desktop
        const handleMouseMove = (ev) => {
            if (
                window.innerWidth > 1025 &&
                !/Mobi|Android/i.test(navigator.userAgent)
            ) {
                smallCards.forEach((card, index) => {
                    const baseTransform = `${ev.pageX / coeff}px, ${ev.pageY / coeff}px, 0`;
                    const extraOffset = index === 3 ? " - 10.33rem" : "";
                    card.style.transform = `translate3d(calc(${baseTransform}${extraOffset}))`;
                });
            }
        };

        // Parallax scroll effect
        const parallaxScrollHandler = () => {
            projectChildren.forEach((child) => {
                const initialTop = initialPositions.get(child);
                const offsetY = (window.scrollY - initialTop) * coeff2;
                child.style.transform = `translate3d(0, ${offsetY * 1.618}px, 0)`;
            });
        };

        const startParallax = () => {
            projectChildren.forEach((child) => {
                initialPositions.set(
                    child,
                    child.getBoundingClientRect().top + window.scrollY,
                );
            });
            window.addEventListener("scroll", parallaxScrollHandler);
        };

        const stopParallax = () => {
            window.removeEventListener("scroll", parallaxScrollHandler);
        };

        // Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startParallax();
                    } else {
                        stopParallax();
                    }
                });
            },
            { threshold: 0.1 },
        );

        document.addEventListener("mousemove", handleMouseMove);
        observer.observe(projectWrapper);
        startParallax();

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            stopParallax();
            observer.disconnect();
        };
    }, []);

    return (
        <section id="s3-projects" className="sec3">
            <div id="div3" style={{ width: 0, height: 0, opacity: 0 }}></div>

            <h4 id="EN" className="project-heading-container">
                <span
                    id="project-heading"
                    className="exp underline-sp headerSpan header__texts"
                    style={{ display: "inline" }}
                >
                    Selected Projects
                </span>
            </h4>

            <div className="projects-wrapper full" ref={projectWrapperRef}>
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <div
                            className={`project__data ${clickedIndex === index ? "clicked" : ""}`}
                        >
                            <h2>{project.title}</h2>
                            <details>
                                <summary>{project.summary}</summary>
                                {project.description}
                                <em>-- {project.type}</em>
                                Technologies used:
                                <ul>
                                    {project.technologies.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            </details>
                            <a
                                rel="noopener"
                                target="_blank"
                                href={project.link}
                            >
                                visit
                                <img
                                    src="assets/icons/open-in-tab.svg"
                                    alt="open in new tab"
                                />
                            </a>
                        </div>
                        <div
                            className="project__image ta-ta"
                            onClick={() => setClickedIndex(index)}
                        >
                            <img src={project.image} alt={project.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
