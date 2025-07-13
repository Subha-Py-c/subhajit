import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./SkillsSection.css";
import cardElements from "./cardData";
import mobileSkills from "./mobileData";

const SkillsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const skillContainerRef = useRef(null);
  const progressBarsRef = useRef([]);

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
      let coeff = 150;

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
      progressBarsRef.current[index].style.width = cardElements[index].value;
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
                    display: "block",
                    opacity: activeIndex === index ? 1 : 0,
                    visibility: activeIndex === index ? "visible" : "hidden",
                    position: "absolute", // else the cards will be placed at different positions
                    transition: "all 0.4s ease-out",
                  }}
                >
                  <p className="mb-4">
                    <em>
                      <mark>{elem.title}</mark>
                    </em>
                  </p>
                  {elem.content}
                  <span className="progress-bar flexed">
                    <span
                      className="growth"
                      ref={(el) => (progressBarsRef.current[index] = el)}
                      style={{
                        width: activeIndex === index ? elem.value : "0%",
                        transition: "width 0.4s ease-out",
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
        <div
          className="skill__container pb-[25vh] md:pb-[32vh] lg:pb-[40vh]"
          ref={skillContainerRef}
        >
          {mobileSkills.map((skill, index) => (
            <div key={index} data-value={skill.value} className="skill__box">
              <img className="mb-3" src={skill.icon} alt={skill.title} />
              {skill.title}
              <span className="progress-bar flexed">
                <span
                  className="growth ta-ta"
                  style={{
                    width: getProgressWidth(skill.value),
                    transition: "width 0.4s ease-out",
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
