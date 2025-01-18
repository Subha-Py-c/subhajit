// the classes are slightly different so efficient Mapping is not possible

const ExperienceSection = () => {
    return (
        <section className="experience-section relative w-[100vw] h-fit pt-[0vh] md:pt-[7.5vh] lg:pt-[15vh] pb-[25vh] md:pb-[32vh] lg:pb-[40vh]">
            <h4 id="EX">
                <span className="exps underline-sp headerSpan header__texts experience--heading">
                    Experience
                </span>
            </h4>
            <div className="work-container relative w-full h-fit pl-[20px] md:pl-[100px] pr-[20px] md:pr-[120px] pt-[15px] md:pt-[30px] text-xl md:text-2xl">
                <div className="w-full flex items-center min-h-[60px] border-b border-b-slate-800 border-dashed group">
                    <div className="work-logo w-14 flex justify-center items-center">
                        <img
                            className="size-auto object-contain scale-75 ta-ta"
                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjEuMTMgNTguNjEiPgoJPGRlZnM+CgkJPHN0eWxlPgoJCQkuY2xzLTEgewoJCQlmaWxsOiAjZmJiYzA0OwoJCQl9CgoJCQkuY2xzLTIgewoJCQlmaWxsOiAjNDI4NWY0OwoJCQl9CgoJCQkuY2xzLTMgewoJCQlmaWxsOiAjMzRhODUzOwoJCQl9CgoJCQkuY2xzLTQgewoJCQlmaWxsOiAjZWE0MzM1OwoJCQl9CgkJPC9zdHlsZT4KCTwvZGVmcz4KCTxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJjbHMtNCIKCQkJCWQ9Ik0yOC44NCwyOS40MmwxOS42Ny0xMS4zNmM0LjYzLTIuNjcsNi4yMS04LjU5LDMuNTQtMTMuMjJDNDkuMzgsLjIxLDQzLjQ2LTEuMzgsMzguODMsMS4zTDQuODQsMjAuOTJsMjQsOC41WiIgLz4KCQkJPHBhdGggY2xhc3M9ImNscy0yIgoJCQkJZD0iTTQzLjY2LDU4LjYxYzMuMzQsMCw2LjYtMS43NCw4LjM5LTQuODQsMi42Ny00LjYzLDEuMDktMTAuNTUtMy41NC0xMy4yMkwxNC41MiwyMC45M2MtNC42My0yLjY3LTEwLjU1LTEuMDktMTMuMjIsMy41NHMtMS4wOSwxMC41NSwzLjU0LDEzLjIybDMzLjk5LDE5LjYyYzEuNTMsLjg4LDMuMTksMS4zLDQuODMsMS4zWiIgLz4KCQkJPHBhdGggY2xhc3M9ImNscy0xIgoJCQkJZD0iTTc3LjQ3LDU4LjYxYzEuNjQsMCwzLjMxLS40Miw0LjgzLTEuM2wzMy45OS0xOS42Mi0yMy42OS04LjY3LTE5Ljk3LDExLjUzYy00LjYzLDIuNjctNi4yMSw4LjU5LTMuNTQsMTMuMjIsMS43OCwzLjEsNS4wNCw0Ljg0LDguMzgsNC44NFoiIC8+CgkJCTxwYXRoIGNsYXNzPSJjbHMtMyIKCQkJCWQ9Ik0xMTEuNDQsMzguOTljMy4zNCwwLDYuNi0xLjc0LDguMzktNC44NCwyLjY3LTQuNjMsMS4wOS0xMC41NS0zLjU0LTEzLjIyTDgyLjMsMS4zMWMtNC42My0yLjY3LTEwLjU1LTEuMDktMTMuMjIsMy41NC0yLjY3LDQuNjMtMS4wOSwxMC41NSwzLjU0LDEzLjIybDMzLjk5LDE5LjYyYzEuNTIsLjg4LDMuMTksMS4zLDQuODMsMS4zWiIgLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo="
                            alt=""
                        />
                    </div>
                    <div className="work-position w-fit flex-1 px-2">
                        GDSC[Google Developer Student Club] IIEST Shibpur,
                        Development Team Member
                    </div>
                    <div className="duration w-fit px-2 max-w-[80px] md:max-w-[180px] lg:max-w-fit">
                        October 2024 - Present
                    </div>
                </div>
                <div className="w-full flex items-center min-h-[60px] border-b border-b-slate-800 border-dashed group">
                    <div className="work-logo w-14 flex justify-center items-center overflow-hidden rounded">
                        <img
                            className="size-auto object-contain scale-75 bg-green-950 ta-ta overflow-hidden rounded"
                            src="https://www.socialwinterofcode.com/SWOC_W_Black.png"
                            alt=""
                        />
                    </div>
                    <div className="work-position w-fit flex-1 px-2">
                        SWOC[Social Winter Of Code] Contributor, OpenSource
                    </div>
                    <div className="duration w-fit px-2 max-w-[80px] md:max-w-[180px] lg:max-w-fit">
                        December 2024
                    </div>
                </div>
                <div className="w-full flex items-center min-h-[60px] border-b border-b-slate-800 border-dashed group">
                    <div className="work-logo w-14 flex justify-center items-center">
                        <img
                            className="size-auto object-contain scale-75 bg-green-950 ta-ta"
                            src="https://hacktoberfest.com/_next/static/media/logo-hacktoberfest-11--beige.2b2fdfcb.svg"
                            alt=""
                        />
                    </div>
                    <div className="work-position w-fit flex-1 px-2">
                        Completed HactoberFest&apos;24 OpenSource Contribution
                        Event
                    </div>
                    <div className="duration w-fit px-2 max-w-[80px] md:max-w-[180px] lg:max-w-fit">
                        October 2024
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
