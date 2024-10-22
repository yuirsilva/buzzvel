import { FC } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarProps {
    name: string;
    text: string;
}

const getInitials = (fullName: string) => {
    const allNames = fullName.trim().split(" ");
    const initials = allNames.reduce((acc, curr, index) => {
        if (index === 0 || index === allNames.length - 1) {
            acc = `${acc}${curr.charAt(0).toUpperCase()}`;
        }
        return acc;
    }, "");

    return initials;
};

const AvatarTestimonial: FC<AvatarProps> = ({ name, text }) => {
    const initials = getInitials(name);
    return (
        <div className="flex items-center gap-4">
            <Avatar>
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <p>{name}</p>
                <p className="text-slate-600">{text}</p>
            </div>
        </div>
    );
};

export default AvatarTestimonial;
