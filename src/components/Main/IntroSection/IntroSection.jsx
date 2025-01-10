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
    }, []); // Empty dependency array means this runs once on mount

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
                    <div className="about-content mt-8 col-span-9 md:col-span-12">
                        <p className="hero-p col-span-12 mb-4 introduction">
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
                                className={`flexed transition-all duration-300 ${
                                    isImageVisible
                                        ? "opacity-100 scale-y-100 rotate-7"
                                        : "opacity-0 scale-y-0 rotate-7"
                                }`}
                            >
                                <img
                                    src="/images/me2.png"
                                    alt="Profile"
                                    className="ta-ta"
                                />
                            </span>
                        </p>
                        <p className="hero-p col-span-6 xs:col-span-12 mb-4 text-sm">
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
