import { Variants } from "framer-motion";

export const primaryEase = [0.19, 1, 0.22, 1];

const h1Variants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 0,
        transition: {
            type: "tween",
            duration: 1.4,
            ease: primaryEase,
        },
    },
};

const opacityVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 40,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            duration: 1,
            ease: primaryEase,
        },
    },
};

export { h1Variants, opacityVariants };
