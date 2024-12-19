import React from "react";
import "./SkillsSection.css";

const SkillsSection = () => {
    return (
        <section id="s2-skills" className="sec2">
            <div id="SK" className="con d3">
                <h4 className="w" id="SS">
                    <span
                        id="skill"
                        className="exps underline-sp headerSpan header__texts"
                        style="display: inline !important"
                    >
                        Skills
                    </span>
                </h4>

                {/* <!-- for desktops --> */}
                <div className="skill-wrapper">
                    <div className="card-container">
                        <div className="card">
                            {/* <!-- web dev --> */}
                            <div data-value="70%" className="card-elem">
                                <p>
                                    <em>
                                        <mark>Web Development</mark>
                                    </em>
                                </p>
                                <em>
                                    <u>Frontend:</u>
                                </em>
                                <br />
                                HTML, CSS, JavaScript, SASS, Tailwind CSS,
                                <b>jQuery, ReactJS</b>
                                <br />
                                <br />
                                <em>
                                    <u>Backend:</u>
                                </em>
                                <br />
                                Node.js, Express,
                                <b>Flask</b>
                                ,SQL databases [SQLite, PostgreSQL]
                                <br />
                                <br />
                                <span className="progress-bar flexed">
                                    <span className="growth"></span>
                                </span>
                                70%
                            </div>
                            {/* <!-- ui-ux --> */}
                            <div data-value="70%" className="card-elem">
                                <p>
                                    <em>
                                        <mark>UI/UX</mark>
                                    </em>
                                </p>
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
                                GSAP, AOS, tilt.js, Typed.js, LENIS(locomotive
                                scroll), Split-type
                                <br />
                                <br />
                                <span className="progress-bar flexed">
                                    <span className="growth"></span>
                                </span>
                                70%
                            </div>
                            {/* <!-- dsa --> */}
                            <div data-value="85%" className="card-elem">
                                <p>
                                    <em>
                                        <mark>Data Structures</mark>
                                    </em>
                                    {/* <!-- and Algorithms --> */}
                                </p>
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
                                Time & Space Complexity, Function call Stack,
                                Array, String, Stack, Queue, LinkedList, Tree,
                                Searching, Sorting
                                <br />
                                <br />
                                <span className="progress-bar flexed">
                                    <span className="growth"></span>
                                </span>
                                85%
                            </div>
                            {/* <!-- python --> */}
                            <div data-value="85%" className="card-elem">
                                <p>
                                    <em>
                                        <mark>Python</mark>
                                    </em>
                                </p>
                                <em>
                                    <u>Concepts:</u>
                                </em>
                                <br />
                                OOPs, DSA, Data Visualisation using numpy &
                                matplotlib[small scale], Web Development[flask]
                                <br />
                                <br />
                                <em>
                                    <u>
                                        Some libraries I have used in personal
                                        projects:
                                    </u>
                                </em>
                                <br />
                                • numpy, matplotlib, PIL, Tesseract, OpenCV,
                                reportlab, bs4, selenium etc
                                <br />
                                <br />
                                <span className="progress-bar flexed">
                                    <span className="growth"></span>
                                </span>
                                85%
                            </div>
                            {/* <!-- scraping --> */}
                            <div data-value="60%" className="card-elem">
                                <p>
                                    <em>
                                        <mark>Web Scraping</mark>
                                    </em>
                                </p>
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
                                <span className="progress-bar flexed">
                                    <span className="growth"></span>
                                </span>
                                60%
                            </div>
                            {/* <!-- git --> */}
                            <div data-value="70%" className="card-elem">
                                <p>
                                    <em>
                                        <mark>Collaboration</mark>
                                    </em>
                                </p>
                                Can easily collaborate with team members using
                                GitHub
                                <br />
                                <em>
                                    <u>Collaboration experience:</u>
                                </em>
                                <br />
                                Hactoberfest'24, College GDG Dev Team members
                                <br />
                                <br />
                                <span className="progress-bar flexed">
                                    <span className="growth"></span>
                                </span>
                                70%
                            </div>
                            {/* <!-- others --> */}
                            <div data-value="50%" className="card-elem">
                                <p>
                                    <em>
                                        <mark>Telegram Bots</mark>
                                    </em>
                                </p>
                                I have created several telgram bots.
                                <br />
                                <br />
                                <p>
                                    <em>
                                        <mark>Scripting</mark>
                                    </em>
                                </p>
                                Linux and MAC OS shell scripting, and python
                                Scripting for automation
                                <br />
                                <br />
                                <span className="progress-bar flexed">
                                    <span className="growth"></span>
                                </span>
                                50%
                            </div>
                        </div>
                    </div>
                    <div
                        id="skill-list"
                        className="s-list"
                        data-tilt-max="5"
                        data-tilt-speed="400"
                        data-tilt-perspective="500"
                    >
                        {/* <!-- web dev --> */}
                        <div className="first-x inverse2 list-elem">
                            Web Development
                            <span className="strech active">•••</span>
                        </div>
                        {/* <!-- ui-ux --> */}
                        <div className="middle inverse2 list-elem">
                            UI/UX
                            <span className="strech">•••</span>
                        </div>
                        {/* <!-- dsa --> */}
                        <div className="middle inverse2 list-elem">
                            Data Structures
                            <span className="strech">•••</span>
                        </div>
                        {/* <!-- python --> */}
                        <div className="middle inverse2 list-elem">
                            Python
                            <span className="strech">•••</span>
                        </div>
                        {/* <!-- scraping --> */}
                        <div className="middle inverse2 list-elem">
                            Web Scraping
                            <span className="strech">•••</span>
                        </div>
                        {/* <!-- git --> */}
                        <div className="middle inverse2 list-elem">
                            Collaboration
                            <span className="strech">•••</span>
                        </div>
                        {/* <!-- scripting --> */}
                        <div className="lst middle inverse2 list-elem">
                            Others
                            <span className="strech">•••</span>
                        </div>
                    </div>
                </div>

                {/* <!-- For mobiles --> */}
                <div className="skill__container">
                    <div data-value="70%" className="skill__box">
                        <img src="assets/icons/web-dev.svg" />
                        Web Development
                        <span className="progress-bar flexed">
                            <span className="growth ta-ta"></span>
                        </span>
                    </div>

                    <div data-value="70%" className="skill__box">
                        <img src="assets/icons/ui-ux.svg" />
                        UI-UX
                        <span className="progress-bar flexed">
                            <span className="growth ta-ta"></span>
                        </span>
                    </div>

                    <div data-value="85%" className="skill__box">
                        <img src="assets/icons/data-str.svg" />
                        Data Structures
                        <span className="progress-bar flexed">
                            <span className="growth ta-ta"></span>
                        </span>
                    </div>

                    <div data-value="85%" className="skill__box">
                        <img src="assets/icons/python.svg" />
                        PYTHON
                        <span className="progress-bar flexed">
                            <span className="growth ta-ta"></span>
                        </span>
                    </div>

                    <div data-value="60%" className="skill__box">
                        <img src="assets/icons/web-scraping.svg" />
                        Web Scraping
                        <span className="progress-bar flexed">
                            <span className="growth ta-ta"></span>
                        </span>
                    </div>

                    <div data-value="70%" className="skill__box">
                        <img src="assets/icons/node.svg" />
                        Node + Express
                        <span className="progress-bar flexed">
                            <span className="growth ta-ta"></span>
                        </span>
                    </div>

                    <div data-value="65%" className="skill__box">
                        <img src="assets/icons/react.svg" />
                        React
                        <span className="progress-bar flexed">
                            <span className="growth ta-ta"></span>
                        </span>
                    </div>

                    <div data-value="55%" className="skill__box">
                        <img src="assets/icons/js.svg" />
                        JavaScript
                        <span className="progress-bar flexed">
                            <span className="growth ta-ta"></span>
                        </span>
                    </div>

                    <div data-value="70%" className="skill__box">
                        <img src="assets/icons/git.svg" />
                        Git & GitHub
                        <span className="progress-bar flexed">
                            <span className="growth ta-ta"></span>
                        </span>
                    </div>

                    <div data-value="85%" className="skill__box">
                        <img src="assets/icons/shell.svg" />
                        Flask
                        <span className="progress-bar flexed">
                            <span className="growth ta-ta"></span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
