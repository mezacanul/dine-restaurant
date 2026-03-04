import { Outlet } from "react-router-dom";

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
            <h1 className="text-white text-5xl font-bold">
                {"dine"}
            </h1>
        </div>
    );
}

function Footer() {
    return (
        <div className="w-full px-container">
            <h1>{"Footer"}</h1>
        </div>
    );
}
