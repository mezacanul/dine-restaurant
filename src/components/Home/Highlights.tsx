const content = {
    title: "A few highlights from our menu",
    description:
        "We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season.",
    items: [
        {
            title: "Seared Salmon Fillet",
            description:
                "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
            img: "/images/homepage/salmon-mobile@2x.jpg",
        },
        {
            title: "Rosemary Filet Mignon",
            description:
                "Our prime beef served to your taste with a delicious choice of seasonal sides.",
            img: "/images/homepage/beef-mobile@2x.jpg",
        },
        {
            title: "Summer Fruit Chocolate Mousse",
            description:
                "Creamy mousse combined with summer fruits and dark chocolate shavings.",
            img: "/images/homepage/chocolate-mobile@2x.jpg",
        },
    ],
};
export default function Highlights() {
    return (
        <div className="px-container relative flex flex-col lg:grid lg:grid-cols-2 gap-[5rem] bg-neutral-900 text-white pt-[5rem] sm:pt-[8rem] lg:pt-[15rem] pb-[7rem] sm:pb-[10rem]">
            <div className="flex flex-col items-center w-[90%] mx-auto lg:mx-0 lg:w-full lg:items-start gap-[2rem] pe-0 lg:pe-[4rem] relative">
                <img
                    className="lg:absolute relative lg:-top-20 left-0 w-[100px] object-cover"
                    src="/images/patterns/pattern-divide.svg"
                />
                <h2 className="text-2-bold text-center lg:text-left">
                    {content.title}
                </h2>
                <p className="text-[18px] sm:text-[23px] font-light text-center lg:text-left">
                    {content.description}
                </p>
            </div>

            <div className="flex flex-col">
                {content.items.map((item, index) => (
                    <div
                        key={item.title}
                        className={`flex flex-col sm:flex-row gap-[5rem] items-center relative ${
                            index < 2
                                ? "border-b-2 border-neutral-700 pb-[2rem]"
                                : ""
                        } ${index > 0 ? "mt-[2rem]" : ""}`}
                    >
                        {/* Divider  */}
                        <img
                            className="hidden sm:block absolute top-5 left-22 w-[100px] object-cover z-0"
                            src="/images/patterns/pattern-divide.svg"
                        />
                        {/* Image  */}
                        <img
                            className="w-full sm:w-[150px] object-cover z-10"
                            src={item.img}
                            alt={item.title}
                        />
                        <div className="flex flex-col gap-[1rem] w-[80%] sm:w-full">
                            <h3 className="text-4-bold text-center sm:text-left">
                                {item.title}
                            </h3>
                            <p className="text-6 text-center sm:text-left">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
