import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
    return (
        <section id="s4-contacts" className="sec4">
            <h4 className="expC">
                <span
                    style="display: inline !important"
                    id="contact-heading"
                    className="underline-sp headerSpan header__texts"
                >
                    Contacts
                </span>
            </h4>
            <div className="contacts-container relative">
                <div className="adjuster-div flex">
                    {/* <!-- Social icons --> */}
                    <div className="fs-contacts flex-col">
                        <ul>
                            <li className="animated-underline-white">
                                <a
                                    className=""
                                    href="mailto:demoemailforportfolio1@gmail.com"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                        ></path>
                                    </svg>
                                    <span className="s4">
                                        <span className="s5"> My Email </span>
                                    </span>
                                </a>
                            </li>
                            <li className="animated-underline-white">
                                <a
                                    className=""
                                    target="_blank"
                                    href="https://www.linkedin.com/in/subhajitgorai"
                                >
                                    <svg
                                        fill="#000000"
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="-143 145 512 512"
                                        xml:space="preserve"
                                        width="64px"
                                        height="64px"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <g>
                                                <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"></path>
                                                <rect
                                                    x="-8.5"
                                                    y="348.4"
                                                    width="49.9"
                                                    height="159.7"
                                                ></rect>
                                                <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"></path>
                                                <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="s4">
                                        <span className="s5"> LinkedIn </span>
                                    </span>
                                </a>
                            </li>
                            <li className="animated-underline-white">
                                <a
                                    className=""
                                    target="_blank"
                                    href="https://github.com/Dream-World-Coder"
                                >
                                    <svg
                                        width="64px"
                                        height="64px"
                                        viewBox="0 0 20 20"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        fill="#000000"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title>github [#142]</title>
                                            <desc>Created with Sketch.</desc>
                                            <defs></defs>
                                            <g
                                                id="Page-1"
                                                stroke="none"
                                                strokeWidth="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                            >
                                                <g
                                                    id="Dribbble-Light-Preview"
                                                    transform="translate(-140.000000, -7559.000000)"
                                                    fill="#000000"
                                                >
                                                    <g
                                                        id="icons"
                                                        transform="translate(56.000000, 160.000000)"
                                                    >
                                                        <path
                                                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                                            id="github-[#142]"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="s4">
                                        <span className="s5"> Github </span>
                                    </span>
                                </a>
                            </li>
                            <li className="animated-underline-white">
                                <a
                                    className=""
                                    target="_blank"
                                    href="http://www.youtube.com/@sillyscience5"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 50 50"
                                    >
                                        <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                                    </svg>
                                    <span className="s4">
                                        <span className="s5"> YouTube </span>
                                    </span>
                                </a>
                            </li>
                            <li className="animated-underline-white">
                                <a
                                    className=""
                                    target="_blank"
                                    href="https://x.com/Subhaji09951021"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 50 50"
                                    >
                                        <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                                    </svg>
                                    <span className="s4">
                                        <span className="s5">
                                            {" "}
                                            X (twitter){" "}
                                        </span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- contact form --> */}
                    <div id="email-box" className="email-box">
                        {/* <!-- the line part --> */}
                        <span className="question">
                            Have something to share? CLICK HERE! <br />
                            <br />
                            <div className="line"></div>
                        </span>
                        {/* <!-- the message box --> */}
                        <div className="box ta-taX flex-col">
                            <form
                                id="form"
                                action="https://api.web3forms.com/submit"
                                method="post"
                            >
                                <input
                                    type="hidden"
                                    name="redirect"
                                    value="https://subha-py-c.github.io/Noni/"
                                />
                                <input
                                    type="hidden"
                                    name="access_key"
                                    value="67104936-b712-4f86-abec-8dddf48deff3"
                                />
                                <div className="name-and-email-input flex-col">
                                    <div className="nm">
                                        <label for="emailer_name">
                                            Your name:
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="emailer_name"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <br />
                                    <div className="eml">
                                        <label for="email">
                                            Email address for me to contact you:
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email Id [eg. jhon123@example.com]"
                                            required
                                        />
                                    </div>
                                </div>
                                <label for="msg">Message:</label>
                                <textarea
                                    name="message"
                                    id="msg"
                                    rows="1"
                                    required
                                    placeholder="Your Message"
                                ></textarea>
                                <div className="btnCon">
                                    <button
                                        className="btn email-btn"
                                        type="submit"
                                        id="submit"
                                        value="Send"
                                    >
                                        Send
                                    </button>
                                    <div className="back-btn flexed">
                                        <img
                                            width="24"
                                            height="24"
                                            src="icons/back-btn.svg"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* <!-- cv --> */}
                <div id="cv" className="download-cv relative cen">
                    <a
                        rel="noopener"
                        href="https://drive.google.com/file/d/1UIkDtRNXdytYzERmwnCE-35yjhMJ2WXD/view?usp=sharing"
                    >
                        •Curriculam Vitae•
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
