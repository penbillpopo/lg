import scrollReveal from "scrollreveal";
export const scrollRevealMixin = {
    data() {
        return {
            scrollReveal: scrollReveal(),
        };
    },
    mounted() {
        const duration = 600;
        const distance = "300px";
        const opacity = 0;
        const easing = "linear";
        this.scrollReveal.reveal(".reveal-top", {
            duration: duration,
            delay: 0,
            origin: "top",
            distance: distance,
            opacity: opacity,
            easing: easing,
            reset: true,
        });
        this.scrollReveal.reveal(".reveal-top-300", {
            duration: duration,
            delay: 300,
            origin: "top",
            distance: distance,
            opacity: opacity,
            easing: easing,
            reset: true,
        });
        this.scrollReveal.reveal(".reveal-top-600", {
            duration: duration,
            delay: 600,
            origin: "top",
            distance: distance,
            opacity: opacity,
            easing: easing,
            reset: true,
        });
        this.scrollReveal.reveal(".reveal-top-900", {
            duration: duration,
            delay: 900,
            origin: "top",
            distance: distance,
            opacity: opacity,
            easing: easing,
            reset: true,
        });
        this.scrollReveal.reveal(".reveal-top-1200", {
            duration: duration,
            delay: 1200,
            origin: "top",
            distance: distance,
            opacity: opacity,
            easing: easing,
            reset: true,
        });
        this.scrollReveal.reveal(".reveal-top-1500", {
            duration: duration,
            delay: 1500,
            origin: "top",
            distance: distance,
            opacity: opacity,
            easing: easing,
            reset: true,
        });
        this.scrollReveal.reveal(".reveal-top-1800", {
            duration: duration,
            delay: 1800,
            origin: "top",
            distance: distance,
            opacity: opacity,
            easing: easing,
            reset: true,
        });
        // this.scrollReveal.reveal(".reveal-top", {
        //     duration: 1000,
        //     delay: 300,
        //     origin: "top",
        //     reset: true,
        //     mobile: false,
        //     distance: "100px",
        //     opacity:opacity,
        //     easing: "linear",
        //     scale: 1,
        // });
    },
};
