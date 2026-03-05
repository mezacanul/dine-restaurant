import { cn } from "../../utils/cn";
import BookTableButton from "../common/BookTableButton";

export default function Hero() {
    const cns = {
        container: cn(
            "px-container relative",
            "bg-[url('/images/homepage/hero-bg-desktop@2x.jpg')] bg-cover bg-center",
            "h-screen w-full flex items-center text-white"
        ),
        backdrop: cn(
            "absolute inset-0 bg-neutral-950 w-[530px] h-full"
        ),
        content: cn(
            "w-[500px] flex flex-col gap-[1.5rem] items-start z-10"
        ),
        title: cn("text-1"),
        description: cn("text-4-regular"),
    };
    return (
        <div className={cns.container}>
            <div className={cns.backdrop} />
            <div className={cns.content}>
                <h1 className={cns.title}>
                    {"Exquisite dining since 1989"}
                </h1>
                <p className={cns.description}>
                    {
                        "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
                    }
                </p>
                <BookTableButton />
            </div>
        </div>
    );
}
