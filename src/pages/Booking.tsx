import { cn } from "../utils/cn";
import Form from "../components/Booking/Form";
import { useResponsive } from "../hooks/useResponsive";
import Logo from "../components/Logo";

export default function Booking() {
    const bgClass =
        "bg-[url('/images/booking/hero-bg-desktop@2x.jpg')]";
    return (
        <div
            className={cn(
                // bgClass,
                "h-[110vh] sm:h-[90vh] lg:h-screen w-full bg-cover bg-center"
            )}
        >
            <div
                className={cn(
                    "flex lg:flex-row flex-col justify-between items-center",
                    "w-full h-[60vh] bg-cover bg-center px-container text-white",
                    bgClass,
                    "gap-[3rem] sm:gap-[4rem] lg:gap-0 py-[5rem] lg:py-0"
                )}
            >
                <div className="w-full lg:w-[45%] flex flex-col gap-5 items-center lg:items-start">
                    {useResponsive([
                        <Logo />,
                        <Logo />,
                        null,
                    ])}
                    <h1 className="text-1 text-center lg:text-left">
                        {"Reservations"}
                    </h1>
                    <p className="text-4-regular text-light text-center lg:text-left">
                        {
                            "We can't wait to host you. If you have any special requirements please feel free to call on the phone number below. We'll be happy to accommodate you."
                        }
                    </p>
                </div>

                <Form />
            </div>
            <div className="bg-neutral-50 relative h-[50vh] sm:h-[30vh] lg:h-[40vh]">
                <img
                    src="/images/patterns/pattern-lines.svg"
                    alt="Booking Table"
                    className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <img
                    src="/images/patterns/pattern-curve-bottom-right.svg"
                    alt="Booking Background"
                    className="absolute top-0 left-0 h-full w-[65%] object-fill"
                />
            </div>
        </div>
    );
}
