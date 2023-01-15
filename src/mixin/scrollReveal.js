import scrollReveal from "scrollreveal";

const loadingSecond = 100;
const revealTimes = 50;

export const scrollRevealMixin = {
    data() {
        return {
            scrollReveal: scrollReveal(),
        };
    },
    mounted() {
        setTimeout(() => {
            this.setScrollRevealOrigin(300, "top", "60px", 0, "linear");
            this.setScrollRevealOrigin(300, "bottom", "60px", 0, "linear");
            this.setScrollRevealOrigin(300, "left", "60px", 0, "linear");
            this.setScrollRevealOrigin(300, "right", "60px", 0, "linear");
            this.setScrollRevealFunction();
        }, loadingSecond);
    },
    methods: {
        setScrollRevealOrigin(duration, origin, distance, opacity, easing) {
            for (let i = 0; i < revealTimes; i++) {
                this.scrollReveal.reveal(`.reveal-${origin}-${100 * i}`, {
                    duration: duration,
                    delay: 100 * i,
                    origin: origin,
                    distance: distance,
                    opacity: opacity,
                    easing: easing,
                });
            }
        },
        setScrollRevealFunction() {
            for (let i = 0; i < revealTimes; i++) {
                this.scrollReveal.reveal(`.reveal-function-${100 * i}`, {
                    delay: 100 * i,
                    afterReveal: (el) => {
                        el.classList.add("animating");
                    },
                    viewFactor: 1,
                });
            }
        },
    },
};
