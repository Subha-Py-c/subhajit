import { useState, useEffect } from "react";
import "./IntroSection.css";

const IntroSection = () => {
    const [isImageVisible, setIsImageVisible] = useState(false);

    useEffect(() => {
        const lineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active");
                }
            });
        });

        const headers = document.querySelectorAll(".headerSpan");
        headers.forEach((header) => lineObserver.observe(header));

        // Cleanup observer on component unmount
        return () => {
            headers.forEach((header) => lineObserver.unobserve(header));
            lineObserver.disconnect();
        };
    }, []);

    return (
        <section id="s1" className="sec1">
            <div className="section about-section">
                <div className="grid grid-full">
                    <h2 className="hero-h2">
                        <span>I</span>
                        <span>Am</span>
                        <span id="b-c">
                            Subha
                            <div
                                className="disable imgShow"
                                onMouseEnter={() => setIsImageVisible(true)}
                                onMouseLeave={() => setIsImageVisible(false)}
                            >
                                /Dev
                            </div>
                        </span>
                    </h2>
                    <div className="about-content is-mt-l col-9 col-md-12">
                        <p className="hero-p col-12 is-mb-ms introduction">
                            MERN &amp; Flask Stack Developer / Web Designer.
                            Information Technology student at{" "}
                            <a
                                className="college_url"
                                href="https://www.iiests.ac.in"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                IIEST Shibpur
                            </a>
                            . Interested in Deep Learning and Blockchain
                            technologies.
                            <span
                                id="profileImg"
                                className={`${
                                    isImageVisible
                                        ? "opacity-100 scale-y-100 rotate-[7deg]"
                                        : "opacity-0"
                                }`}
                            >
                                <img
                                    src="/images/me2.png"
                                    alt="Profile Picture"
                                    className="ta-ta"
                                />
                            </span>
                        </p>
                        <p className="hero-p col-6 col-xs-12 is-mb-s is-xs">
                            Nothing more to say, thanks for visiting my website.
                            Don &apos; t forget to explore my projects. I &apos;
                            m eager to collaborate with interested people.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
