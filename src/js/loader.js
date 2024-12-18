function removeLoader(duration) {
    const text = new SplitType(".loading__text", { types: "words, chars" });
    var textDuration = 1;
    var sliderDuration = 1.42;
    setTimeout(() => {
        gsap.to(text.chars, {
            y: "100%",
            duration: textDuration,
            stagger: 0.1,
            ease: "power4.in",
            onComplete: () => {
                const tl = gsap.timeline();
                tl.to(".loader__slide1", {
                    y: "-100%",
                    duration: sliderDuration,
                    ease: "power4.out",
                });
                tl.to(
                    ".loader__slide2",
                    {
                        y: "100%",
                        duration: sliderDuration,
                        ease: "power4.out",
                        onComplete: () => {
                            setTimeout(() => {
                                document.getElementById(
                                    "loader",
                                ).style.display = "none";
                            }, 0.1);
                            setTimeout(() => {
                                const paragraphs = document.querySelectorAll(
                                    ".about-section .about-content p",
                                );
                                paragraphs.forEach((paragraph) => {
                                    paragraph.classList.add("appear-gradually");
                                });
                            }, 0.2);
                            setTimeout(() => {
                                const paragraphs = document.querySelectorAll(
                                    "#s1 > div > div > p",
                                );
                                paragraphs.forEach((paragraph) => {
                                    paragraph.classList.add("appear-gradually");
                                });
                            }, 0.5);
                        },
                    },
                    "<",
                );
            },
        });
    }, duration);
}

// waiting for sometime, cuz font is not loading initially
document.addEventListener("DOMContentLoaded", () => {
    var loadingText = document.querySelector(".loading__text");
    setTimeout(() => {
        loadingText.style.opacity = 1;
    }, 150);
});

window.addEventListener("load", () => {
    removeLoader(150);
});
