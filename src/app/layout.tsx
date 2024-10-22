import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";

const roboto = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: {
        template: "%s | Soller",
        default: "Soller",
    },
    description: "A performant site built with Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} flex flex-col font-sans antialiased`}
            >
                <Header />
                <main className="flex-1 px-4 py-2 md:px-10 md:py-4 lg:px-20 lg:py-6">
                    {children}
                </main>
                {/* <Footer /> */}
            </body>
        </html>
    );
}
