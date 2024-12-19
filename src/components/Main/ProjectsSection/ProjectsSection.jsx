import React from "react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
    return (
        <section id="s3-projects" className="sec3">
            {/* <!-- anchor div --> */}
            <div id="div3" style="width: 0; height: 0; opacity: 0"></div>

            <h4 id="EN" className="project-heading-container">
                <span
                    id="project-heading"
                    className="exp underline-sp headerSpan header__texts"
                    style="display: inline !important"
                >
                    Selected Projects
                </span>
            </h4>
            <div className="projects-wrapper full">
                {/* <!-- lumifeed --> */}
                <div className="project project1">
                    <div className="project__data">
                        <h2>LumiFeed</h2>
                        <details>
                            <summary>A neat platform for reading news.</summary>
                            A webapp with clutterless UI to read news without
                            advertisements, along with summary of each news
                            available. Many other mindblowing features
                            available.
                            <em>-- Solo Project</em>
                            Technologies used:
                            <ul>
                                <li>flask (for backend)</li>
                                <li>SQL database [postgresql & sqlite]</li>
                                <li>JavaScript AJAX and Fetch api</li>
                                <li>Web Scraping [requests, bs4]</li>
                                <li>HTML, CSS, SASS, figma</li>
                                <li>AI Summary api</li>
                            </ul>
                        </details>
                        <a
                            rel="noopener"
                            target="_blank"
                            href="https://lumifeed.up.railway.app"
                        >
                            visit
                            <img src="assets/icons/open-in-tab.svg" />
                        </a>
                    </div>
                    <div className="project__image ta-ta">
                        <img src="images/projects-imgs/lumifeed.jpeg" />
                    </div>
                </div>

                {/* <!-- encryptease --> */}
                <div className="project project2">
                    <div className="project__data">
                        <h2>encryptease</h2>
                        <details>
                            <summary>
                                Encrypt your data easily. (fun app)
                            </summary>
                            A powerful webapp to encrypt messages and files
                            easily that are highly secure and cannot be
                            decrypted without the encryption KEY.
                            <em>-- Solo Project</em>
                            Technologies used:
                            <ul>
                                <li>flask</li>
                                <li>Cryptography Module (python)</li>
                                <li>JavaScript AJAX</li>
                                <li>HTML - CSS - JS</li>
                            </ul>
                        </details>
                        <a
                            rel="noopener"
                            target="_blank"
                            href="https://encryptease.pythonanywhere.com"
                        >
                            visit
                            <img src="assets/icons/open-in-tab.svg" />
                        </a>
                    </div>
                    <div className="project__image ta-ta">
                        <img src="images/projects-imgs/encryptease.jpeg" />
                    </div>
                </div>

                {/* <!-- portfolio --> */}
                <div className="project project3">
                    <div className="project__data">
                        <h2>Portfolio</h2>
                        <details>
                            <summary>
                                This portfolio website you are in right now.
                            </summary>
                            A portfolio Website to easily introduce me to
                            everyone.
                            <em>-- solo project</em>
                            Technologies used:
                            <ul>
                                <li>HTML-CSS-JavaScript</li>
                                <li>GSAP</li>
                                <li>locomotive scroll</li>
                                <li>UI-UX</li>
                                <li>figma</li>
                            </ul>
                        </details>
                        <a
                            rel="noopener"
                            target="_blank"
                            href="https://github.com/Subha-Py-c/subhajit"
                        >
                            see code in github
                            <img src="assets/icons/open-in-tab.svg" />
                        </a>
                    </div>
                    <div className="project__image ta-ta">
                        <img src="images/projects-imgs/portfolio.jpeg" />
                    </div>
                </div>

                {/* <!-- opencanvas --> */}
                <div className="project project4">
                    <div className="project__data">
                        <h2>opencanvas.blog</h2>
                        <details>
                            <summary>
                                A retro blogging site for everyone.
                            </summary>
                            Currently IN MAKING. various blogs and journals will
                            be published here later on.
                            <em>-- Collaborative project</em>
                            Technologies used:
                            <ul>
                                <li>Mongo - Express - React - Node [MERN]</li>
                                <li>TailwindCSS &amp; SASS</li>
                                <li>websocket</li>
                                <li>...</li>
                            </ul>
                        </details>
                        <a
                            rel="noopener"
                            target="_blank"
                            href="https://dream-world-coder.github.io/opencanvas/hero/"
                        >
                            visit [incomple now :(]
                            <img src="assets/icons/open-in-tab.svg" />
                        </a>
                    </div>
                    <div className="project__image ta-ta">
                        <img src="images/projects-imgs/opencanvas.jpeg" />
                    </div>
                </div>

                {/* <!-- zentunes / relaxing melody --> */}
                <div className="project project5">
                    <div className="project__data">
                        <h2>Zentunes</h2>
                        <details>
                            <summary>Ear-soothing music anywhere.</summary>A
                            music streaming platform for retro lovers.
                            <em>-- Solo Project.</em>
                            Some development is yet to do, sorry!!.
                            <br />
                            <br />
                            Technologies used:
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>SCSS</li>
                                <li>React</li>
                            </ul>
                        </details>
                        <a
                            rel="noopener"
                            target="_blank"
                            href="https://zentunes.netlify.app"
                        >
                            visit
                            <img src="assets/icons/open-in-tab.svg" />
                        </a>
                    </div>
                    <div className="project__image ta-ta">
                        <img src="images/projects-imgs/krishisearch.jpeg" />
                    </div>
                </div>

                {/* <!-- other --> */}
                <div className="project project6">
                    <div className="project__data">
                        <h2>Maze Battle Game</h2>
                        <details>
                            <summary>Player vs CPU maze runnig game</summary>
                            <em>-- solo project</em>
                            Technologies used:
                            <ul>
                                <li>JavaScript</li>
                                <li>CSS</li>
                                <li>HTML</li>
                            </ul>
                        </details>
                        <a
                            rel="noopener"
                            target="_blank"
                            href="https://mazebattle.netlify.app"
                        >
                            visit
                            <img src="assets/icons/open-in-tab.svg" />
                        </a>
                    </div>
                    <div className="project__image ta-ta">
                        <img src="images/projects-imgs/relaxingmelody.jpeg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
