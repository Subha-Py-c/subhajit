import Cards from "../../utils/TimeLine";
import { experienceData } from "./expData";

const ExperienceSection = () => {
  return (
    <section className="experience-section relative w-[100vw] h-fit pt-[0vh] md:pt-[7.5vh] lg:pt-[15vh] pb-[25vh] md:pb-[32vh] lg:pb-[40vh]">
      <h4 id="EX">
        <span className="exps underline-sp headerSpan header__texts experience--heading">
          Experience
        </span>
      </h4>
      <div className="work-container relative w-full h-fit pl-[20px] md:pl-[100px] pr-[20px] md:pr-[120px] pt-[15px] md:pt-[30px] text-xl md:text-2xl">
        <Cards data={experienceData} />
      </div>
    </section>
  );
};

export default ExperienceSection;
