import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./AcademicsSection.css";
import academicsData from "./academicsData";

const AcademicsSection = () => {
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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="s-last" className="sec-L pb-[25vh] md:pb-[32vh] lg:pb-[40vh]">
      <div
        itemScope
        itemType="http://schema.org/EducationalOccupationalCredential"
        className="academic__container"
      >
        <div className="acad__header header__texts">
          <span id="academic__header" className="underline-sp headerSpan">
            Academics
          </span>
        </div>

        <div className="acad__list Xborder Xborder-black">
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
                        className="inst font-[title]"
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
                      <span itemProp="name">{academic.institution}</span>
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
                  {/* <span className="s2 relative">
                      <span className="s3 relative">
                          <em className="grade">Grade:</em>
                          {academic.grade}
                      </span>
                  </span> */}
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
