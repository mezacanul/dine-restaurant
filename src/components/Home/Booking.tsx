import { useState } from "react";
import BookTableButton from "../common/BookTableButton";

const bookingOptions = [
    {
        title: "Family Gathering",
        description:
            "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.",
        image: "/images/homepage/family-gathering-desktop@2x.jpg",
    },
    {
        title: "Special Events",
        description:
            "Wether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal.",
        image: "/images/homepage/special-events-desktop@2x.jpg",
    },
    {
        title: "Social Events",
        description:
            "Are you looking to have a larger social event? No problem! We're quite more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.",
        image: "/images/homepage/social-events-desktop@2x.jpg",
    },
];

export default function Booking() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="px-container relative grid grid-cols-2 py-[10rem] bg-neutral-50">
            {/* Patterns  */}
            <img
                src="/images/patterns/pattern-curve-top-right.svg"
                alt="Booking Background"
                className="absolute top-0 left-0 w-[35%] object-cover"
            />
            <img
                src="/images/patterns/pattern-lines.svg"
                alt="Booking Background"
                className="absolute top-[12%] left-[7%] w-[10%] object-cover"
            />

            {/* Content  */}
            <img
                className="w-full h-full object-cover shadow-xl/40 z-10"
                src={bookingOptions[currentIndex].image}
                alt={bookingOptions[currentIndex].title}
            />
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-start gap-[3.5rem] ps-[7rem]">
                    <div className="flex flex-col gap-[1rem]">
                        <h3 className="text-2-bold">
                            {
                                bookingOptions[currentIndex]
                                    .title
                            }
                        </h3>
                        <p className="text-4-regular text-neutral-600">
                            {
                                bookingOptions[currentIndex]
                                    .description
                            }
                        </p>
                    </div>

                    <BookTableButton type="solid" />

                    <BookingMenu
                        options={bookingOptions}
                        activeIndex={currentIndex}
                        setActiveIndex={setCurrentIndex}
                    />
                </div>
            </div>
        </div>
    );
}

function BookingMenu({
    options,
    activeIndex,
    setActiveIndex,
}: {
    options: typeof bookingOptions;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}) {
    return (
        <div className="flex flex-col gap-[1rem] relative">
            {options.map((option, index) => (
                <div
                    className="relative"
                    key={option.title}
                >
                    <img
                        src="/images/patterns/pattern-divide.svg"
                        className={`${
                            activeIndex === index
                                ? "opacity-100"
                                : "opacity-0"
                        } absolute top-[0.4rem] -left-[10rem] w-[100px] object-cover transition-all duration-300`}
                    />
                    <p
                        onClick={() =>
                            setActiveIndex(index)
                        }
                        className={`text-6 uppercase transition-all duration-300 cursor-pointer ${
                            activeIndex === index
                                ? "text-neutral-950"
                                : "text-neutral-400"
                        }`}
                    >
                        {option.title}
                    </p>
                </div>
            ))}
        </div>
    );
}
