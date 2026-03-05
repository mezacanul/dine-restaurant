const content = [
    {
        title: "Enjoyable place for all the family",
        description:
            "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the garden before your meal.",
        image: "/images/homepage/enjoyable-place-desktop@2x.jpg",
    },
    {
        title: "The most locally sourced food",
        description:
            "All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.",
        image: "/images/homepage/locally-sourced-desktop@2x.jpg",
    },
];

export default function Presentation() {
    return (
        <div className="px-container relative flex flex-col gap-[5rem] bg-neutral-100 z-10">
            {/* Patterns  */}
            <img
                className="absolute top-[20%] left-0 w-[65%] object-cover"
                src="/images/patterns/pattern-curve-top-right.svg"
            />

            <img
                className="absolute bottom-[25%] right-[5%] w-[10%] object-cover z-10"
                src="/images/patterns/pattern-lines.svg"
            />

            <img
                className="absolute bottom-0 right-0 w-[65%] object-cover"
                src="/images/patterns/pattern-curve-top-left.svg"
            />

            {/* Content  */}
            <div className="w-full  grid grid-cols-2 gap-[5rem] relative">
                <img
                    className="w-full h-[800px] object-cover shadow-2xl/60 -mt-[5rem]"
                    src={content[0].image}
                    alt={content[0].title}
                />
                <div className="flex justify-center items-center ps-[8rem]">
                    <div className="flex flex-col gap-[3rem]">
                        <img
                            className="w-[100px] "
                            src="/images/patterns/pattern-divide.svg"
                            alt="Enjoyable place icon"
                        />
                        <h2 className="text-2-bold">
                            {content[0].title}
                        </h2>
                        <p className="text-4-regular">
                            {content[0].description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full  grid grid-cols-2 gap-[5rem] relative">
                <div className="flex justify-center items-center pe-[8rem]">
                    <div className="flex flex-col gap-[3rem]">
                        <img
                            className="w-[100px] "
                            src="/images/patterns/pattern-divide.svg"
                            alt="Enjoyable place icon"
                        />
                        <h2 className="text-2-bold">
                            {content[1].title}
                        </h2>
                        <p className="text-4-regular">
                            {content[1].description}
                        </p>
                    </div>
                </div>

                <img
                    className="w-full h-[800px] object-cover shadow-2xl/60 -mb-[5rem]"
                    src={content[1].image}
                    alt={content[1].title}
                />
            </div>
        </div>
    );
}
