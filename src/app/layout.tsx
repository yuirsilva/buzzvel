import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";

import Footer from "@/components/nav/Footer";
import Header from "@/components/nav/Header";
import { siteConfig } from "@/config/site";

const roboto = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: {
        template: `%s — ${siteConfig.name}`,
        default: siteConfig.name,
    },
    description: siteConfig.description,
    keywords: ["Next.js", "React", "Tailwind CSS", "ShadCN", "Solar panels"],
    authors: {
        name: "Yuri Silva",
        url: "https://yvri.vercel.app",
    },
    creator: "@yidxte",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/opengraph-image.png`],
        creator: "@yidxte",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    userScalable: true,
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
                <main className="flex-1 overflow-hidden *:flex *:gap-16 *:px-4 *:py-12 *:md:gap-20 *:md:p-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
