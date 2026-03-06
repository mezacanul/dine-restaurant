import { cn } from "../utils/cn";
import Form from "../components/Booking/Form";

export default function Booking() {
    const bgClass =
        "bg-[url('/images/booking/hero-bg-desktop@2x.jpg')]";
    return (
        <div
            className={cn(
                // bgClass,
                "h-screen w-full bg-cover bg-center"
            )}
        >
            <div
                className={cn(
                    "flex justify-between items-center",
                    "w-full h-[60vh] bg-cover bg-center px-container text-white",
                    bgClass
                )}
            >
                <div className="w-[45%] flex flex-col gap-5">
                    <h1 className="text-1">
                        {"Reservations"}
                    </h1>
                    <p className="text-4-regular text-light">
                        {
                            "We can't wait to host you. If you have any special requirements please feel free to call on the phone number below. We'll be happy to accommodate you."
                        }
                    </p>
                </div>

                <Form />
            </div>
            <div className="bg-neutral-50 relative h-[40vh]">
                <img
                    src="/images/patterns/pattern-lines.svg"
                    alt="Booking Table"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
