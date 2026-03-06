import { useResponsive } from "../../hooks/useResponsive";
import { cn } from "../../utils/cn";

const content = [
    {
        title: "Enjoyable place for all the family",
        description:
            "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the garden before your meal.",
        image: {
            desktop:
                "/images/homepage/enjoyable-place-desktop@2x.jpg",
            tablet: "/images/homepage/enjoyable-place-tablet@2x.jpg",
            mobile: "/images/homepage/enjoyable-place-mobile@2x.jpg",
        },
    },
    {
        title: "The most locally sourced food",
        description:
            "All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.",
        image: {
            desktop:
                "/images/homepage/locally-sourced-desktop@2x.jpg",
            tablet: "/images/homepage/locally-sourced-tablet@2x.jpg",
            mobile: "/images/homepage/locally-sourced-mobile@2x.jpg",
        },
    },
];

export default function Presentation() {
    const cns = {
        content: cn(
            "w-full flex flex-col lg:grid lg:grid-cols-2 gap-[5rem] relative"
        ),
        image: cn(
            "w-full h-[500px] sm:h-[400px] lg:h-[800px] object-cover shadow-2xl/60"
        ),
        description: {
            container: cn(
                "flex justify-center items-center"
            ),
            inner: cn(
                "flex flex-col items-center lg:items-start w-full sm:w-[60%] lg:w-full gap-[2rem] lg:gap-[3rem]"
            ),
            title: cn(
                "text-2-bold text-center w-[80%] sm:w-full lg:text-left"
            ),
            description: cn(
                "text-4-regular text-center lg:text-left"
            ),
        },
    };
    return (
        <div className="px-container relative flex flex-col gap-[5rem] bg-neutral-100 z-10">
            <Patterns />
            {/* Content  */}
            <div className={cns.content}>
                <img
                    className={cn(
                        cns.image,
                        "-mt-[5rem]"
                    )}
                    src={useResponsive<string>([
                        content[0].image.mobile,
                        content[0].image.tablet,
                        content[0].image.desktop,
                    ])}
                    alt={content[0].title}
                />
                <div
                    className={cn(
                        cns.description.container,
                        "lg:ps-[6rem]"
                    )}
                >
                    <div className={cns.description.inner}>
                        {/* Divider  */}
                        <img
                            className="w-[100px]"
                            src="/images/patterns/pattern-divide.svg"
                            alt="Enjoyable place icon"
                        />
                        <h2
                            className={
                                cns.description.title
                            }
                        >
                            {content[0].title}
                        </h2>
                        <p
                            className={
                                cns.description.description
                            }
                        >
                            {content[0].description}
                        </p>
                    </div>
                </div>
            </div>

            <div
                className={cn(
                    cns.content,
                    "flex-col-reverse mb-[5rem] lg:mb-0"
                )}
            >
                <div
                    className={cn(
                        cns.description.container,
                        "lg:pe-[6rem]"
                    )}
                >
                    <div className={cns.description.inner}>
                        {/* Divider  */}
                        <img
                            className="w-[100px]"
                            src="/images/patterns/pattern-divide.svg"
                            alt="Enjoyable place icon"
                        />
                        <h2
                            className={
                                cns.description.title
                            }
                        >
                            {content[1].title}
                        </h2>
                        <p
                            className={
                                cns.description.description
                            }
                        >
                            {content[1].description}
                        </p>
                    </div>
                </div>

                <img
                    className={cn(
                        cns.image,
                        "lg:-mb-[5rem]"
                    )}
                    src={useResponsive<string>([
                        content[1].image.mobile,
                        content[1].image.tablet,
                        content[1].image.desktop,
                    ])}
                    alt={content[1].title}
                />
            </div>
        </div>
    );
}

function Patterns() {
    return (
        <>
            {/* Patterns  */}
            <img
                className="hidden sm:block absolute top-[20%] left-0 w-[65%] object-cover"
                src="/images/patterns/pattern-curve-top-right.svg"
            />

            <img
                className="hidden sm:block absolute bottom-[30%] lg:bottom-[25%] right-[5%] w-[20%] lg:w-[10%] object-cover z-10"
                src="/images/patterns/pattern-lines.svg"
            />

            <img
                className="hidden sm:block absolute bottom-0 right-0 w-[65%] object-cover"
                src="/images/patterns/pattern-curve-top-left.svg"
            />
        </>
    );
}
