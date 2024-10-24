import { FC } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarProps {
    name: string;
    text: string;
    src?: string;
    loading?: "eager" | "lazy";
}

const AvatarTestimonial: FC<AvatarProps> = ({
    name,
    text,
    src = "https://github.com/shadcn.png",
    loading = "eager",
}) => {
    return (
        <div className="flex items-center gap-4">
            <Avatar>
                <AvatarImage
                    loading={loading}
                    src={src}
                    alt={`${name} testimonial`}
                />
                <AvatarFallback>
                    {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <p className="text-base md:text-lg">{name}</p>
                <p className="text-slate-600">{text}</p>
            </div>
        </div>
    );
};

export default AvatarTestimonial;
