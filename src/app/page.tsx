import Graphics from "@/components/Graphics";
import AvatarTestimonial from "@/components/testimonial/Avatar";
import { H1, H2, H3 } from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";

import * as m from "framer-motion/m";

import Image from "next/image";
import Link from "next/link";

import heroSectionImage from "@/../public/images/hero.png";
import TestimonialsCarousel from "@/components/testimonial/TestimonialsCarousel";
import {
    Battery,
    Brush,
    Construction,
    Pickaxe,
    Rocket,
    Smile,
    Sun,
    UtilityPole,
} from "lucide-react";
import { opacityVariants } from "@/lib/motion";

export const metadata = {
    // metadata.title.template doesnt seem to be working
    title: "Home — Soller",
};

const Home = () => {
    return (
        <>
            <section className="w-full flex-col gap-16 pb-12 md:gap-32 md:pb-20 md:*:max-w-xl">
                <section className="flex flex-col items-center justify-center gap-6 text-center md:items-start md:text-start">
                    <Image
                        priority
                        src={heroSectionImage}
                        alt="A man installing solar panels."
                        className="pointer-events-none absolute right-0 top-0 -z-30 w-[80vw] max-w-full select-none object-fill sm:w-[60vw] md:w-[60vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[35vw]"
                    />
                    <H1
                        text="Get the Sun to Power Your Home"
                        className="mt-[70vw] pt-12 sm:mt-[60vw] md:mt-0 md:pt-0"
                    ></H1>
                    <m.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ amount: 0.1, once: true }}
                        className="space-y-6"
                        variants={opacityVariants}
                    >
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
                    </m.div>
                </section>
                <m.section
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ amount: 0.1, once: true }}
                    variants={opacityVariants}
                    className="space-y-4 pb-12 md:pb-0"
                >
                    <blockquote>
                        &quot;I was hesitant about switching to solar, but
                        Soller made the entire process effortless. Their team
                        took care of everything — from permits to installation —
                        and finished ahead of schedule.&quot;
                    </blockquote>
                    <AvatarTestimonial
                        name="Courtney Henry"
                        text="zerowaste.com"
                        src="/images/testimonials/CourtneyHenry.png"
                    />
                </m.section>
            </section>
            {/*  */}
            <m.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.4, once: true }}
                transition={{ staggerChildren: 0.7 }}
                className="flex-col items-center justify-center gap-16 md:gap-20"
            >
                <m.div
                    variants={opacityVariants}
                    viewport={{ amount: 0.4, once: true }}
                    className="flex flex-col items-center"
                >
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
                </m.div>
                <m.div
                    variants={opacityVariants}
                    viewport={{ amount: 0.4, once: true }}
                    className="relative flex w-full justify-center"
                >
                    <div className="absolute left-0 top-[10vw] -z-10 size-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f59e0b]"></div>
                    <div className="absolute right-0 top-[10vw] -z-10 size-[25vw] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#7e22ce]"></div>
                    <div className="size-[90%]">
                        <Graphics.pickthesun />
                    </div>
                </m.div>
            </m.section>
            {/*  */}
            <m.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ staggerChildren: 0.09 }}
                className="flex-col-reverse gap-16 lg:flex-row lg:items-center xl:gap-24"
            >
                <m.div
                    variants={opacityVariants}
                    className="relative size-[80%] self-center sm:size-[60%] lg:size-[200%] xl:size-[100%] 2xl:size-[100%]"
                >
                    <svg
                        viewBox="0 0 1422 750"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-0 top-24 -z-10 -translate-x-1/2 translate-y-1/2 -rotate-[30deg] scale-[2.2] md:scale-[2]"
                    >
                        <rect
                            width="1422"
                            height="750"
                            rx="375"
                            className="fill-primary"
                        />
                    </svg>
                    <Graphics.personalizedServices />
                </m.div>
                <section className="flex flex-col gap-16">
                    <m.div
                        variants={opacityVariants}
                        className="text-center md:text-start"
                    >
                        <div className="font-base font-medium leading-none text-secondary-foreground md:text-xl">
                            Services
                        </div>
                        <H2 className="mt-2 text-[2rem] leading-none md:text-[3.5rem]">
                            Personalized services
                        </H2>
                        <p className="mt-6 max-w-4xl text-balance md:text-xl md:leading-9">
                            Our expert team crafts a customized solar system
                            that maximizes your roof&apos;s potential and
                            minimizes your energy costs.
                        </p>
                    </m.div>
                    <div className="grid grid-cols-2 gap-12 *:flex *:flex-col *:items-center *:gap-4 *:text-center max-[320px]:grid-cols-1 *:md:items-start *:md:text-start [&_p]:text-balance md:[&_p]:text-lg">
                        <m.div variants={opacityVariants}>
                            <Brush />
                            <H3>Consultation & Custom Design</H3>
                            <p>
                                Our expert engineers analyze your roof&apos;s
                                orientation, shade patterns, and structural
                                integrity, while studying your energy
                                consumption habits and future needs.
                            </p>
                        </m.div>
                        <m.div variants={opacityVariants}>
                            <Pickaxe />
                            <H3>Professional Installation</H3>
                            <p>
                                Our certified installation team, with over three
                                decades of experience in Mallorca&apos;s unique
                                architectural landscape, handles everything with
                                meticulous care.
                            </p>
                        </m.div>
                        <m.div variants={opacityVariants}>
                            <Construction />
                            <H3>Maintenance & Monitoring</H3>
                            <p>
                                Our comprehensive maintenance program includes
                                bi-annual system inspections, performance
                                monitoring, and professional cleaning to keep
                                your panels operating at peak efficiency.
                            </p>
                        </m.div>
                        <m.div variants={opacityVariants}>
                            <Smile />
                            <H3>Technical Support & Upgrades</H3>
                            <p>
                                Our technical support team is available 24/7 to
                                address any concerns or questions you might
                                have.
                            </p>
                        </m.div>
                    </div>
                </section>
            </m.section>
            <m.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ staggerChildren: 0.09 }}
                className="flex-col lg:flex-row lg:items-center xl:gap-24"
            >
                <section className="flex flex-col gap-16">
                    <m.div
                        variants={opacityVariants}
                        className="text-center md:text-start"
                    >
                        <div className="font-base font-medium leading-none text-secondary-foreground md:text-xl">
                            System features
                        </div>
                        <H2 className="mt-2 text-[2rem] leading-none md:text-[3.5rem]">
                            Powerful features
                        </H2>
                        <p className="mt-6 max-w-4xl text-balance md:text-xl md:leading-9">
                            Features that don&apos;t let a single ray of sun go
                            to waste.
                        </p>
                    </m.div>
                    <div className="grid grid-cols-2 gap-12 *:flex *:flex-col *:items-center *:gap-4 *:text-center max-[320px]:grid-cols-1 *:md:items-start *:md:text-start [&_p]:text-balance md:[&_p]:text-lg">
                        <m.div variants={opacityVariants}>
                            <Sun />
                            <H3>Smart Home Integration</H3>
                            <p>
                                Through our user-friendly mobile app, monitor
                                your energy production in real-time, track
                                savings, and adjust settings from anywhere in
                                the world.
                            </p>
                        </m.div>
                        <m.div variants={opacityVariants}>
                            <Battery />
                            <H3>Battery Storage Solutions</H3>
                            <p>
                                Our advanced battery storage systems capture
                                excess daytime energy for use during nighttime
                                or cloudy periods, making you less dependent on
                                the grid.
                            </p>
                        </m.div>
                        <m.div variants={opacityVariants}>
                            <UtilityPole />
                            <H3>Performance Guarantee</H3>
                            <p>
                                If your solar installation produces less energy
                                than our projections, we&apos;ll compensate you
                                for the difference.
                            </p>
                        </m.div>
                        <m.div variants={opacityVariants}>
                            <Rocket />
                            <H3>Future-Ready Design</H3>
                            <p>
                                We design every installation with future
                                expansion in mind, whether you&apos;re planning
                                to add an electric vehicle, increase your living
                                space, or integrate new energy-saving
                                technologies.
                            </p>
                        </m.div>
                    </div>
                </section>
                <div className="relative size-[60%] self-center sm:size-[60%] lg:size-[200%] xl:size-[60%]">
                    <svg
                        viewBox="0 0 1422 750"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-0 top-12 -z-10 translate-x-1/3 translate-y-1/2 -rotate-[30deg] scale-[2.2] md:scale-[2]"
                    >
                        <rect
                            width="1422"
                            height="750"
                            rx="375"
                            className="fill-[#FBBF24]"
                        />
                    </svg>
                    <Graphics.powerfulFeatures />
                </div>
            </m.section>
            <m.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.4, once: true }}
                transition={{ once: true, staggerChildren: 0.09 }}
                className="flex-col gap-16 bg-primary py-12 md:gap-20 md:py-20"
            >
                <m.div
                    variants={opacityVariants}
                    className="flex flex-col items-center gap-6 md:items-start lg:flex-row lg:justify-between"
                >
                    <div className="text-center md:text-start">
                        <div className="font-base font-medium leading-none text-muted-foreground md:text-xl">
                            Join other Sun harvesters
                        </div>
                        <H2 className="mt-2 text-[2rem] leading-none text-white max-sm:mx-auto max-sm:max-w-72 md:text-[3.5rem]">
                            Make something awesome
                        </H2>
                        <p className="mt-6 max-w-4xl text-balance text-white md:text-xl md:leading-9">
                            Join the growing community of Mallorca homeowners
                            who&apos;ve discovered the power of possibility.
                            From charming townhouses in Pollença to modern
                            villas in Puerto Portals, over 1,000 families are
                            already harvesting the Mediterranean sun with
                            Soller.
                        </p>
                    </div>
                    <Button variant="outline-secondary" size="lg" asChild>
                        <Link href="/request">
                            <span className="px-6">Request a Quote</span>
                            <Graphics.arrowRight />
                        </Link>
                    </Button>
                </m.div>
                <m.section
                    variants={opacityVariants}
                    className="md:-mr-10 lg:-mr-20"
                >
                    <TestimonialsCarousel />
                </m.section>
            </m.section>
            <m.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.4, once: true }}
                transition={{ once: true, staggerChildren: 0.09 }}
                className="relative flex-col overflow-hidden bg-primary *:mx-auto lg:bg-[#7E22CE]"
            >
                <div className="absolute bottom-0 left-0 size-[60vh] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#A855F7] lg:right-0 lg:top-0 lg:size-[100vh] lg:-translate-y-1/2 lg:translate-x-2/3 lg:bg-[#A252EE]"></div>
                <m.div
                    variants={opacityVariants}
                    className="flex max-w-screen-2xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="text-center lg:text-start">
                        <div className="font-base font-medium leading-none text-muted-foreground md:text-xl">
                            Get the Sun to power your home
                        </div>
                        <H2 className="mt-2 max-w-4xl text-[2rem] leading-none text-white md:text-[3.5rem]">
                            All the power that you need for your house is now
                            available
                        </H2>
                    </div>
                    <div className="relative max-w-screen-2xl space-y-4 text-center">
                        <Button variant="outline-secondary" size="lg" asChild>
                            <Link href="/request">
                                <span className="px-6">Request a Quote</span>
                                <Graphics.arrowRight />
                            </Link>
                        </Button>
                        <p className="text-white md:text-lg">
                            Let&apos;s have a chat!
                        </p>
                    </div>
                </m.div>
                <m.div
                    variants={opacityVariants}
                    className="relative z-30 size-full md:size-3/4"
                >
                    <Graphics.macbook />
                </m.div>
            </m.section>
        </>
    );
};

export default Home;
