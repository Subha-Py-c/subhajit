import { useEffect, useRef, useState } from "react";
import "./ProjectsSection.css";
import projects from "./Projects";

const ProjectsSection = () => {
    const projectWrapperRef = useRef(null);
    const [clickedIndex, setClickedIndex] = useState(null);

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
            {/* anchor div */}
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
                                    src="/icons/open-in-tab.svg"
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
