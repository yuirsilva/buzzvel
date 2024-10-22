import { H1, H2 } from "@/components/typography/Heading";
import Graphics from "@/components/Graphics";
import { Button } from "@/components/ui/button";
import AvatarTestimonial from "@/components/testimonial/Avatar";

import Link from "next/link";
import Image from "next/image";

import heroSectionImage from "@/../public/images/hero.png";

const Home = () => {
    return (
        <>
            <section className="flex max-w-screen-lg flex-col gap-16 md:gap-32 md:*:max-w-xl">
                <section className="flex flex-col items-center justify-center gap-6 text-center md:items-start md:text-start">
                    <Image
                        priority
                        src={heroSectionImage}
                        alt="A man installing solar panels."
                        className="pointer-events-none absolute right-0 top-0 -z-30 w-[80vw] max-w-full select-none object-fill sm:w-[60vw] md:w-[60vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[35vw]"
                    />
                    <H1 className="mt-[70vw] text-balance pt-12 sm:mt-[60vw] md:mt-0 md:pt-0">
                        Get the Sun to <br /> Power Your Home
                    </H1>
                    <p className="max-w-96 text-balance text-lg md:max-w-screen-sm md:text-2xl">
                        Mallorca&apos;s most trusted solar installation team
                        powering island homes for over 30 years.
                    </p>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/request">
                            <span className="px-6">Request a Quote</span>
                            <Graphics.arrowRight />
                        </Link>
                    </Button>
                </section>
                <section className="space-y-4 pb-12 md:pb-0">
                    <p>
                        &quot;I was hesitant about switching to solar, but
                        Soller made the entire process effortless. Their team
                        took care of everything — from permits to installation —
                        and finished ahead of schedule.&quot;
                    </p>
                    <AvatarTestimonial
                        name="Rwanda Melflor"
                        text="zerowaste.com"
                    />
                </section>
            </section>
            {/*  */}
            <section className="flex flex-col items-center justify-center gap-16 md:gap-20">
                <div className="flex flex-col items-center">
                    <div className="font-base font-medium leading-none text-secondary-foreground md:text-xl">
                        No more waste
                    </div>
                    <H2 className="mt-2 text-[2rem] leading-none md:text-[3.5rem]">
                        Pick the Sun
                    </H2>
                    <p className="mt-6 max-w-4xl text-balance text-center md:text-xl md:leading-9">
                        At Soller, we believe in harnessing nature&apos;s most
                        abundant gift - turning those golden Mallorcan rays into
                        clean, reliable energy for your home.
                    </p>
                </div>
                <div className="relative flex w-full justify-center">
                    <div className="absolute left-0 top-[10vw] -z-10 size-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f59e0b]"></div>
                    <div className="absolute right-0 top-[10vw] -z-10 size-[25vw] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#7e22ce]"></div>
                    <div className="size-[90%]">
                        <Graphics.pickthesun />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
