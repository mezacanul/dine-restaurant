import { cn } from "../utils/cn";

export default function Home() {
    const cns = {
        container: cn(
            "px-container",
            "bg-[url('/images/homepage/hero-bg-desktop@2x.jpg')] bg-cover bg-center",
            "h-screen w-full flex items-center text-white"
        ),
        content: cn(
            "w-[500px] flex flex-col gap-[1.5rem] items-start"
        ),
        title: cn("text-1"),
        description: cn("text-4-regular"),
        button: cn(
            "text-4-regular py-[1rem] px-[3rem] border border-white"
        ),
    };
    return (
        <div className={cns.container}>
            <div className={cns.content}>
                <h1 className={cns.title}>
                    {"Exquisite dining since 1989"}
                </h1>
                <p className={cns.description}>
                    {
                        "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
                    }
                </p>
                <button className={cns.button}>
                    {"BOOK A TABLE"}
                </button>
            </div>
        </div>
    );
}
