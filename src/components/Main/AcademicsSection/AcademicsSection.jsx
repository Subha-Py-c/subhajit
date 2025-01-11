import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./AcademicsSection.css";

const AcademicsSection = () => {
    const academicsData = [
        {
            level: "Pimary Studies",
            institution: "Narendranath School",
            year: "2010-2015",
            grade: " A+",
            images: [
                {
                    src: "/images/girl.webp",
                    cardClass: "card2 firstcard2",
                },
            ],
        },
        {
            level: "Secondary Education",
            institution: "Bishnupur High School",
            year: "2015-2021",
            grade: " 96.42%",
            images: [
                {
                    src: "/images/bhs3.gif",
                    cardClass: "card1 firstcard1",
                },
            ],
        },
        {
            level: "Higher Secondary Education",
            institution: "Bishnupur High School",
            year: "2021-2023",
            grade: " 88%",
            images: [
                {
                    src: "/images/bhs2.jpg",
                    cardClass: "card2 secondcard2",
                },
                {
                    src: "/images/bhs1.gif",
                    cardClass: "card3 firstcard3",
                },
            ],
        },
        {
            level: "B.Tech in Information Technology",
            institution: "IIEST Shibpur",
            year: "2023-present",
            grade: " 8.46",
            images: [
                {
                    src: "/images/iiest1.jpeg",
                    cardClass: "card3 secondcard3",
                },
                {
                    src: "/images/iiest4.jpeg",
                    cardClass: "card1 secondcard1",
                },
                {
                    src: "/images/iiest6.jpeg",
                    cardClass: "card2 thirdcard2",
                },
            ],
        },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#s-last",
                start: "top center",
                end: "bottom center",
                scrub: false,
                markers: false,
            },
        });

        tl2.to(".s3", {
            y: 0,
            delay: 0.0,
            stagger: 0.06,
            duration: 1,
            ease: "power3.out",
            opacity: 1,
        });

        return () => {
            // Cleanup ScrollTrigger on unmount
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section id="s-last" className="sec-L">
            <div
                itemScope
                itemType="http://schema.org/EducationalOccupationalCredential"
                className="academic__container"
            >
                <div className="acad__header header__texts">
                    <span
                        id="academic__header"
                        className="underline-sp headerSpan"
                    >
                        Academics
                    </span>
                </div>

                <div className="acad__list">
                    {academicsData.map((academic, index) => (
                        <div key={index} className="acad__institutions">
                            <div className="ins__container">
                                <div
                                    itemScope
                                    itemType="http://schema.org/EducationalOccupationalCredential"
                                    className="institute__data"
                                >
                                    <span className="s2 relative">
                                        <span className="s3 relative">
                                            <strong
                                                className="inst"
                                                itemProp="educationalLevel"
                                            >
                                                {academic.level}
                                            </strong>
                                        </span>
                                    </span>
                                    <br />
                                    <span className="s2 relative">
                                        <span className="s3 relative">
                                            <em>Institution:</em>
                                            <span itemProp="name">
                                                {academic.institution}
                                            </span>
                                        </span>
                                    </span>
                                    <br />
                                    <span className="s2 relative">
                                        <span className="s3 relative">
                                            <em className="year">Year:</em>
                                            {academic.year}
                                        </span>
                                    </span>
                                    <br />
                                    <span className="s2 relative">
                                        <span className="s3 relative">
                                            <em className="grade">Grade:</em>
                                            {academic.grade}
                                        </span>
                                    </span>
                                </div>
                                <div
                                    className="ball-pointer"
                                    id={`ball-pointer-${index + 1}`}
                                ></div>
                            </div>
                            <div className="academics__card__container ta-ta">
                                {academic.images.map((image, imgIndex) => (
                                    <div
                                        key={imgIndex}
                                        className={`acad__card ${image.cardClass}`}
                                    >
                                        <img
                                            className="lazy-load"
                                            loading="lazy"
                                            src={image.src}
                                            alt={`${academic.institution} image ${imgIndex + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademicsSection;
