import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import AvatarTestimonial from "@/components/testimonial/Avatar";

const carouselItems = [
    {
        text: "After getting quotes from three companies, we chose Soller for their attention to detail. Their engineer spotted potential shading issues others had missed.",
        name: "Jane Cooper",
        consumption: "10",
        avatar: "/images/testimonials/JaneCooper.png",
    },
    {
        text: "What impressed me most was their after-sales service. When I had questions about my monitoring app at 8 PM on a Sunday, their technical team responded within minutes.",
        name: "Ralph Edwards",
        consumption: "32",
        avatar: "/images/testimonials/RalphEdwards.png",
    },
    {
        text: "As a restaurant owner in Port d'Andratx, I was concerned about installation disrupting our business. Soller's team worked around our schedule.",
        name: "Courtney Henry",
        consumption: "6",
        avatar: "/images/testimonials/CourtneyHenry.png",
    },
    {
        text: "The savings are incredible. We were spending €380 monthly on electricity for our villa. Now we're down to €85, and that's with charging two electric vehicles.",
        name: "Cameron Williamson",
        consumption: "12",
        avatar: "/images/testimonials/CameronWilliamson.png",
    },
    {
        text: "Living in a protected area of Valldemossa, we were worried about permits and regulations. Soller handled everything!",
        name: "Cameron Williamson",
        consumption: "15",
        avatar: "/images/testimonials/CameronWilliamson.png",
    },
    {
        text: "As a restaurant owner in Port d'Andratx, I was concerned about installation disrupting our business. Soller's team worked around our schedule.",
        name: "Courtney Henry",
        consumption: "6",
        avatar: "/images/testimonials/CourtneyHenry.png",
    },
    {
        text: "Their engineer spotted potential shading issues others had missed and designed a custom solution. One year in, we're producing 15% more energy than they projected.",
        name: "Jane Cooper",
        consumption: "10",
        avatar: "/images/testimonials/JaneCooper.png",
    },
];

const TestimonialsCarousel = ({}) => {
    return (
        <div className="w-full">
            <Carousel
                opts={{ align: "start", slidesToScroll: 1, skipSnaps: false }}
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {carouselItems.map((item, index) => (
                        <CarouselItem
                            key={index}
                            // className="pl-2 md:basis-1/2 md:pl-6 lg:basis-1/5"
                            className="basis-full pl-2 md:basis-1/2 md:pl-6 lg:basis-1/3 xl:basis-[22%]"
                        >
                            <Card className="flex h-full flex-col overflow-hidden rounded-lg bg-white">
                                <CardContent className="flex flex-grow flex-col justify-end p-8">
                                    <p className="mb-8 mt-28 line-clamp-6 text-base md:text-lg">
                                        &quot;{item.text}&quot;
                                    </p>
                                    <div className="flex items-center">
                                        <AvatarTestimonial
                                            name={item.name}
                                            text={`${item.consumption}KWh`}
                                            src={item.avatar}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="mt-16 flex justify-center gap-6 md:mr-10 md:mt-20 lg:mr-20 lg:justify-start">
                    <CarouselPrevious
                        variant="outline-secondary"
                        className="relative inset-0 translate-y-0 [&_svg_path]:fill-none [&_svg_path]:hover:fill-none [&_svg_path]:hover:text-accent-foreground"
                    />
                    <CarouselNext
                        variant="outline-secondary"
                        className="relative inset-0 translate-y-0 [&_svg_path]:fill-none [&_svg_path]:hover:fill-none [&_svg_path]:hover:text-accent-foreground"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default TestimonialsCarousel;
