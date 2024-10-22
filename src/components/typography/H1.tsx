import { cn } from "@/lib/utils";
import { FC } from "react";

const H1: FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
    children,
    className,
}) => {
    return (
        <h1
            className={cn(
                "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-tight",
                className
            )}
        >
            {children}
        </h1>
    );
};

export default H1;
