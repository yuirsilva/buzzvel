import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";
import { FC, HTMLAttributes } from "react";

const NavLink: FC<LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
    className,
    children,
    ...props
}) => {
    return (
        // prefetch = false because there's no other pages.
        <Link
            prefetch={false}
            className={cn("group relative", className)}
            {...props}
        >
            <p className="duration-smooth ease-animation-primary transition-[color] group-hover:text-slate-950/50">
                {children}
            </p>
            <div className="ease-animation-primary duration-smooth absolute -bottom-px left-0 h-[0.05rem] w-full origin-right scale-x-0 bg-foreground transition-transform group-hover:origin-left group-hover:scale-x-100"></div>
        </Link>
    );
};

export default NavLink;
