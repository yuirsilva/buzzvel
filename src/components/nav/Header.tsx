import Link from "next/link";

import Graphics from "@/components/Graphics";
import { Button } from "@/components/ui/button";

const Header = () => {
    return (
        <header className="sticky px-4 py-2 md:px-10 md:py-4 lg:px-20 lg:py-6">
            <div className="flex justify-between">
                <div className="flex items-center gap-[2.375rem]">
                    <Link href="/" className="text-[2rem] font-bold">
                        Soller
                    </Link>
                    <nav className="hidden items-center gap-4 font-medium md:flex">
                        <Link href="/products">Products</Link>
                        <Link href="/solutions">Solutions</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/configure">Configure</Link>
                    </nav>
                </div>
                <div className="hidden items-center gap-4 xl:flex">
                    <Button variant="ghost" className="gap-4">
                        <Graphics.headset />
                        <span className="text-base text-tertiary-foreground">
                            555 818 282
                        </span>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/request">
                            <span className="px-6">Request a Quote</span>
                            <Graphics.arrowRight />
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;