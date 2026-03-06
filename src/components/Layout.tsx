import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import { useResponsive } from "../hooks/useResponsive";
import { cn } from "../utils/cn";

export default function Layout() {
    return (
        <div className="relative">
            {useResponsive([null, null, <Header />])}
            {/* <Header /> */}
            <Outlet />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <div className="absolute top-0 left-0 w-full px-container py-[3rem] z-10">
            <Logo />
        </div>
    );
}

function Footer() {
    return (
        <div
            className={cn(
                "w-full flex flex-col items-center gap-[2rem] lg:gap-0 lg:items-start lg:grid lg:grid-cols-3",
                "px-container py-[3rem] pb-[5rem] lg:py-[5rem] bg-neutral-900 text-white"
            )}
        >
            <Logo />

            <div className="flex flex-col items-center lg:items-start gap-2">
                <p>{"Marthwaite, Sedbergh"}</p>
                <p>{"Cumbria"}</p>
                <p>{"+00 44 123 4567"}</p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2">
                <p>{"Open Times"}</p>
                <p>{"Mon - Fri: 09:00 AM - 10:00 PM"}</p>
                <p>{"Sat - Sun: 09:00 AM - 04:00 PM"}</p>
            </div>
        </div>
    );
}
