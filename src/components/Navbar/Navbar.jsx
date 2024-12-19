import React from "react";

const Navbar = () => {
    return (
        <div className="nav flexed" id="nav">
              <div className="ul full" id="ul">
                <div className="li">
                    <span className="sp">
                        <a href="#s1" className="link link--thebe">Home</a>
                    </span>
                </div>
                <div className="li">
                  <span className="sp">
                    <a href="#EX" className="link link--thebe">Experience</a>
                  </span>
                </div>
                <div className="li">
                  <span className="sp">
                    <a href="#s-last" className="link link--thebe">Academics</a>
                  </span>
                </div>
                <div className="li">
                  <span className="sp">
                    <a href="#SK" className="link link--thebe">Skills</a>
                  </span>
                </div>
                <div className="li">
                  <span className="sp">
                    <a href="#div3" className="link link--thebe">Projects</a>
                  </span>
                </div>
                <div className="li">
                  <span className="sp">
                    <a href="#s4-contacts" className="link link--thebe">Contact</a>
                  </span>
                </div>
              </div>
              <script>
                const liElms = document.querySelectorAll('#nav .li');

                liElms.forEach((li) => {
                    const insideAnchor = li.querySelector('a.link');
                    li.addEventListener('mouseover', () => {
                        insideAnchor.classList.add('hover-effect');
                    });
                    li.addEventListener('mouseout', () => {
                        insideAnchor.classList.remove('hover-effect');
                    });
                });
              </script>
            </div>
    );
};

export default Navbar;
