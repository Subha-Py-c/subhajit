// for phones
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 1025) {
        const progressBars = document.querySelectorAll(".growth");
        // const skillBoxes = document.querySelectorAll(".skill__box");
        const skillContainer = document.querySelector(".skill__container");

        const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    progressBars.forEach((bar) => {
                        let parent = bar.parentElement.parentElement;
                        let width = parent.getAttribute("data-value");
                        bar.style.width = width;
                    });
                }
            });
        };

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.55,
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(skillContainer);
    } else {
        const containerKeys = document.querySelectorAll(".list-elem");
        const strechs = document.querySelectorAll(".strech");
        const containerValues = document.querySelectorAll(".card-elem");
        const progressBars = document.querySelectorAll(".growth");

        function removeClicked() {
            containerKeys.forEach((key) => {
                if (key.classList.contains("clicked")) {
                    key.classList.remove("clicked");
                }
            });
        }

        function removeActive() {
            strechs.forEach((strech) => {
                if (strech.classList.contains("active")) {
                    strech.classList.remove("active");
                }
            });
        }

        function removeDisplay() {
            containerValues.forEach((card) => {
                if (card.style.display !== "none") {
                    card.style.display = "none";
                }
            });
        }

        function setWidthZero() {
            progressBars.forEach((bar) => {
                bar.style.width = "0%";
            });
        }

        function setPercentage(index) {
            if (containerKeys[index].classList.contains("clicked")) {
                let bar = progressBars[index];
                let parent = bar.parentElement.parentElement;
                var width = parent.getAttribute("data-value");

                setWidthZero();
                // Trigger reflow to ensure the width change is applied
                bar.offsetHeight;
                bar.style.width = width;
            }
        }

        containerKeys.forEach((key, index) => {
            key.addEventListener("click", () => {
                removeClicked();
                containerKeys[index].classList.add("clicked");

                removeActive();
                strechs[index].classList.add("active");

                removeDisplay();
                containerValues[index].style.display = "block";

                setPercentage(index);
            });
        });

        containerKeys[0].click();
    }

    // float -- problem cuz of gsap using same element
    // const skillList = document.getElementById("skill-list");
    // let coeff = 100;

    // if (
    //     window.innerWidth > 1025 &&
    //     !/Mobi|Android/i.test(navigator.userAgent)
    // ) {
    //     document.addEventListener("mousemove", (ev) => {
    //         skillList.style.transform = `translate3d(${ev.pageX / coeff}px, ${ev.pageY / coeff}px, 0)`;
    //     });
    // }
});
