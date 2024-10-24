"use client";

import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("@/lib/features").then((res) => res.default);

export default function MotionWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
