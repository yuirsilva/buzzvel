import { cn } from "@/lib/utils";
import { FC } from "react";

import * as motion from "framer-motion/client";
import { h1Variants } from "@/lib/motion";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string;
}

const H1: FC<H1Props> = ({ text, className }) => {
    return (
        <h1
            className={cn(
                "scroll-m-20 overflow-hidden text-balance text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-tight",
                className
            )}
        >
            <div className="sr-only">{text}</div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                    staggerChildren: 0.07,
                }}
                aria-hidden
            >
                {text.split(" ").map((word, i) => (
                    <div key={i} className="relative inline-block">
                        <motion.div
                            variants={h1Variants}
                            className="inline-block"
                        >
                            {word}
                        </motion.div>
                        <div className="inline-block">&nbsp;</div>
                    </div>
                ))}
            </motion.div>
        </h1>
    );
};

const H2: FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
    children,
    className,
}) => {
    return (
        <h2
            className={cn(
                "scroll-m-20 text-balance font-extrabold tracking-tight",
                className
            )}
        >
            {children}
        </h2>
    );
};

const H3: FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
    children,
    className,
}) => {
    return (
        <h3
            className={cn(
                "scroll-m-20 text-xl font-bold tracking-tight md:text-2xl",
                className
            )}
        >
            {children}
        </h3>
    );
};

export { H1, H2, H3 };
