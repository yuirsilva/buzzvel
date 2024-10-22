import Graphics from "@/components/Graphics";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex flex-col items-stretch justify-between gap-6 bg-background px-4 py-6 *:items-center md:flex-row md:px-20">
            <div className="flex flex-col justify-center gap-6 md:flex-row">
                <Graphics.logo />
                <p className="text-center">
                    @ 2023 Soller, Inc. All rights reserved.
                </p>
            </div>
            <nav className="flex justify-center gap-6">
                <Link href="/terms">Terms</Link>
                <Link href="/privacy">Privacy</Link>
                <Link href="/support">Support</Link>
            </nav>
        </footer>
    );
};

export default Footer;
