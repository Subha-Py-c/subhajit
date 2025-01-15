import { useEffect, useRef, useState } from "react";
import "./newP.css";
import projects from "./Projects";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
    const projectWrapperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    // useEffect(() => {
    //     const projectWrapper = projectWrapperRef.current;
    //     const projectImgs = projectWrapper.querySelectorAll(".parallaxImgs");
    //     const projectChildren = [...projectImgs];
    //     let initialPositions = new Map();
    //     const coeff2 = 0.05;

    //     // Parallax scroll effect
    //     const parallaxScrollHandler = () => {
    //         projectChildren.forEach((child) => {
    //             const initialTop = initialPositions.get(child);
    //             const offsetY = (window.scrollY - initialTop) * coeff2;
    //             child.style.transform = `translate3d(0, ${offsetY * 1.618}px, 0)`;
    //         });
    //     };

    //     const startParallax = () => {
    //         projectChildren.forEach((child) => {
    //             initialPositions.set(
    //                 child,
    //                 child.getBoundingClientRect().top + window.scrollY,
    //             );
    //         });
    //         window.addEventListener("scroll", parallaxScrollHandler);
    //     };

    //     const stopParallax = () => {
    //         window.removeEventListener("scroll", parallaxScrollHandler);
    //     };

    //     // Intersection Observer
    //     const obsv = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     startParallax();
    //                 } else {
    //                     stopParallax();
    //                 }
    //             });
    //         },
    //         { threshold: 0.1 },
    //     );

    //     obsv.observe(projectWrapper);
    //     startParallax();

    //     return () => {
    //         stopParallax();
    //         obsv.disconnect();
    //     };
    // }, []);

    return (
        <section
            id="s3-projects"
            className="sec3 pb-[25vh] md:pb-[32vh] lg:pb-[40vh]"
        >
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
                {projects.map((project, idx) => (
                    <div
                        key={project.title}
                        className="group relative border-b border-slate-700/30 pt-8 pb-16 px-4 md:px-8 cursor-pointer overflow-hidden hover:bg-[#F2E5BF]/20"
                        onMouseEnter={() => setActiveIndex(idx)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Content */}
                            <div className="space-y-6">
                                <div className="flex items-start justify-between">
                                    <h2 className="text-3xl md:text-4xl font-[400] font-serif group-hover:bg-clip-text transition-all duration-500">
                                        {project.title}
                                    </h2>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="opacity-100 md:opacity-0 group-hover:opacity-100
                                        transition-all duration-500 transform
                                        flexed f-gap-1 rounded-full
                                        box-content px-3 py-1
                                        border border-black/80 bg-black/80 text-sky-100
                                        hover:bg-transparent hover:text-black"
                                    >
                                        visit{" "}
                                        <ExternalLink className="size-5 text-current" />
                                    </a>
                                </div>

                                <p className="text-lg text-black/60 font-light max-w-md">
                                    {project.summary}
                                </p>

                                <div className="space-y-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <p className="text-sm text-black/80">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 text-sm border border-[#CB6040] bg-[#FD8B51] rounded-full hover:bg-[#FD8B51]/75 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Content - Image */}
                            <div className="relative h-64 md:h-96 overflow-hidden rounded-lg ta-ta">
                                <div className="absolute flex items-center justify-center inset-0 transform transition-all duration-700 overflow-hidden">
                                    <img
                                        src={project.image}
                                        className="parallaxImgs object-cover size-full transform transition-transform duration-700 group-hover:scale-110"
                                        alt=""
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>

                        {/* Project Type Badge */}
                        {/* <div
                            className="absolute top-8 right-8 px-4 py-2
                            border border-white/20 rounded-full text-sm
                            opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200
                            bg-[#257180] text-white"
                        >
                            {project.type}
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
