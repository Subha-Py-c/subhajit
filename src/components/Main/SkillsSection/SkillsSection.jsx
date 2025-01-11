import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./SkillsSection.css";

const SkillsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const skillContainerRef = useRef(null);
    const progressBarsRef = useRef([]);

    // Desktop skills data
    const cardElements = [
        {
            title: "Web Development",
            value: "70%",
            content: (
                <>
                    <em>
                        <u>Frontend:</u>
                    </em>
                    <br />
                    HTML, CSS, JavaScript, SASS, Tailwind CSS,{" "}
                    <b>jQuery, ReactJS</b>
                    <br />
                    <br />
                    <em>
                        <u>Backend:</u>
                    </em>
                    <br />
                    Node.js, Express, <b>Flask</b>, SQL databases [SQLite,
                    PostgreSQL]
                    <br />
                    <br />
                </>
            ),
        },
        {
            title: "UI/UX",
            value: "70%",
            content: (
                <>
                    <em>
                        <u>Tools:</u>
                    </em>
                    <br />
                    Figma, GIMP
                    <br />
                    <br />
                    <em>
                        <u>Libraries:</u>
                    </em>
                    <br />
                    GSAP, AOS, tilt.js, Typed.js, LENIS(locomotive scroll),
                    Split-type
                    <br />
                    <br />
                </>
            ),
        },
        {
            title: "Data Structures",
            value: "85%",
            content: (
                <>
                    <em>
                        <u>Languages:</u>
                    </em>
                    <br />
                    Python, C, C++
                    <br />
                    <br />
                    <em>
                        <u>Concepts:</u>
                    </em>
                    <br />
                    Time &amp; Space Complexity, Function call Stack, Array,
                    String, Stack, Queue, LinkedList, Tree, Heap, Searching,
                    Sorting, Greedy, Trie
                    <br />
                    <br />
                </>
            ),
        },
        {
            title: "Python",
            value: "85%",
            content: (
                <>
                    <em>
                        <u>Concepts:</u>
                    </em>
                    <br />
                    OOPs, DSA, Data Visualisation using numpy & matplotlib[small
                    scale], Web Development[flask]
                    <br />
                    <br />
                    <em>
                        <u>Some libraries I have used in personal projects:</u>
                    </em>
                    <br />• numpy, matplotlib, PIL, Tesseract, OpenCV,
                    reportlab, bs4, selenium etc
                    <br />
                    <br />
                </>
            ),
        },
        {
            title: "Web Scraping",
            value: "60%",
            content: (
                <>
                    <em>
                        <u>Libraries:</u>
                    </em>
                    <br />
                    requests, BeautifulSoup, Selenium
                    <br />
                    <br />
                    <em>
                        <u>api:</u>
                    </em>
                    <br />
                    Scrapeowl
                    <br />
                </>
            ),
        },
        {
            title: "Collaboration",
            value: "70%",
            content: (
                <>
                    Can easily collaborate with team members using GitHub
                    <br />
                    <em>
                        <u>Collaboration experience:</u>
                    </em>
                    <br />
                    Hactoberfest &apos; 24, College GDG Dev Team
                    <br />
                    <br />
                </>
            ),
        },
    ];

    // Mobile skills data
    const mobileSkills = [
        {
            icon: "/icons/web-dev.svg",
            title: "Web Development",
            value: "70%",
        },
        { icon: "/icons/ui-ux.svg", title: "UI-UX", value: "70%" },
        {
            icon: "/icons/data-str.svg",
            title: "Data Structures",
            value: "85%",
        },
        {
            icon: "/icons/python.svg",
            title: "PYTHON",
            value: "85%",
        },
        {
            icon: "/icons/web-scraping.svg",
            title: "Web Scraping",
            value: "60%",
        },
        {
            icon: "/icons/node.svg",
            title: "Node + Express",
            value: "70%",
        },
        {
            icon: "/icons/react.svg",
            title: "React",
            value: "75%",
        },
        {
            icon: "/icons/js.svg",
            title: "JavaScript",
            value: "75%",
        },
        {
            icon: "/icons/git.svg",
            title: "Git & GitHub",
            value: "70%",
        },
        {
            icon: "/icons/shell.svg",
            title: "Flask",
            value: "85%",
        },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.innerWidth < 1025;

        if (isMobile) {
            const options = {
                root: null,
                rootMargin: "0px",
                threshold: 0.55,
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(true);
                    }
                });
            }, options);

            if (skillContainerRef.current) {
                observer.observe(skillContainerRef.current);
            }

            return () => observer.disconnect();
        } else {
            // Set initial active state for desktop
            setActiveIndex(0);
        }

        var tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: "#SK",
                start: "top-=200 center",
                end: "bottom-=400 center",
                scrub: true,
                markers: false,
                onLeave: () => {
                    applySkillListEffect();
                },
            },
        });

        tl4.to(".card-container", {
            x: 0,
            rotateZ: 0,
            opacity: 1,
            ease: "power2.out",
        });

        tl4.to(
            "#skill-list",
            {
                x: 0,
                rotateZ: 0,
                opacity: 1,
                ease: "power2.out",
            },
            "<",
        );

        function applySkillListEffect() {
            const skillList = document.getElementById("skill-list");
            let coeff = 100;

            if (
                window.innerWidth > 1025 &&
                !/Mobi|Android/i.test(navigator.userAgent)
            ) {
                document.addEventListener("mousemove", (ev) => {
                    skillList.style.transform = `translate3d(${ev.pageX / coeff}px, ${
                        ev.pageY / coeff
                    }px, 0)`;
                });
            }
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Handle desktop skill item click
    const handleSkillClick = (index) => {
        setActiveIndex(index);
        // Reset and animate progress bar
        if (progressBarsRef.current[index]) {
            progressBarsRef.current[index].style.width = "0%";
            // Force reflow
            progressBarsRef.current[index].offsetHeight;
            progressBarsRef.current[index].style.width =
                cardElements[index].value;
        }
    };

    // Progress bar width handler
    const getProgressWidth = (value) => {
        if (window.innerWidth < 1025) {
            return isIntersecting ? value : "0%";
        }
        return undefined; // Let CSS handle desktop state
    };

    return (
        <section id="s2-skills" className="sec2">
            <div id="SK" className="con d3">
                <h4 className="w" id="SS">
                    <span
                        id="skill"
                        className="exps underline-sp headerSpan header__texts"
                        style={{ display: "inline" }}
                    >
                        Skills
                    </span>
                </h4>

                {/* Desktop View */}
                <div className="skill-wrapper">
                    <div className="card-container">
                        <div className="card">
                            {cardElements.map((elem, index) => (
                                <div
                                    key={index}
                                    className="card-elem"
                                    data-value={elem.value}
                                    style={{
                                        display:
                                            activeIndex === index
                                                ? "block"
                                                : "none",
                                    }}
                                >
                                    <p>
                                        <em>
                                            <mark>{elem.title}</mark>
                                        </em>
                                    </p>
                                    {elem.content}
                                    <span className="progress-bar flexed">
                                        <span
                                            className="growth"
                                            ref={(el) =>
                                                (progressBarsRef.current[
                                                    index
                                                ] = el)
                                            }
                                            style={{
                                                width:
                                                    activeIndex === index
                                                        ? elem.value
                                                        : "0%",
                                            }}
                                        />
                                    </span>
                                    {elem.value}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="skill-list" className="s-list">
                        {cardElements.map((elem, index) => (
                            <div
                                key={index}
                                className={`${index === 0 ? "first-x" : index === cardElements.length - 1 ? "lst" : "middle"}
                                          inverse2 list-elem ${activeIndex === index ? "clicked" : ""}`}
                                onClick={() => handleSkillClick(index)}
                            >
                                {elem.title}
                                <span
                                    className={`strech ${activeIndex === index ? "active" : ""}`}
                                >
                                    •••
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile View */}
                <div className="skill__container" ref={skillContainerRef}>
                    {mobileSkills.map((skill, index) => (
                        <div
                            key={index}
                            data-value={skill.value}
                            className="skill__box"
                        >
                            <img src={skill.icon} alt={skill.title} />
                            {skill.title}
                            <span className="progress-bar flexed">
                                <span
                                    className="growth ta-ta"
                                    style={{
                                        width: getProgressWidth(skill.value),
                                    }}
                                />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
