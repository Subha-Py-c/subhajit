import { useEffect, useRef } from "react";

const ThanksSection = () => {
    const hiddenRef = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("shw");
                } else {
                    entry.target.classList.remove("shw");
                }
            });
        });

        // Observe the hidden element if it exists
        if (hiddenRef.current) {
            obs.observe(hiddenRef.current);
        }
    }, []); // Empty dependency array since we only want to run this once,

    return (
        <section id="s5-thanks" className="sec5">
            <div className="hid" ref={hiddenRef}>
                <h1>Thanks For Visiting</h1>
            </div>
        </section>
    );
};

export default ThanksSection;
