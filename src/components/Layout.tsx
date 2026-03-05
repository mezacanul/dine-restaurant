import { Outlet } from "react-router-dom";
import Logo from "./Logo";

export default function Layout() {
    return (
        <div className="relative">
            <Header />
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
        <div className="w-full grid grid-cols-3 px-container items-start py-[5rem] bg-neutral-900 text-white">
            <Logo />
            
            <div className="flex flex-col gap-2">
                <p>{"Marthwaite, Sedbergh"}</p>
                <p>{"Cumbria"}</p>
                <p>{"+00 44 123 4567"}</p>
            </div>
            
            <div className="flex flex-col gap-2">
                <p>{"Open Times"}</p>
                <p>{"Mon - Fri: 09:00 AM - 10:00 PM"}</p>
                <p>{"Sat - Sun: 09:00 AM - 04:00 PM"}</p>
            </div>
        </div>
    );
}
