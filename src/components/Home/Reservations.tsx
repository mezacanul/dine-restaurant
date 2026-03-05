import BookTableButton from "../common/BookTableButton";
import { cn } from "../../utils/cn";

export default function Reservations() {
    const bgClass =
        "bg-[url('/images/homepage/ready-bg-desktop@2x.jpg')]";
    return (
        <div
            className={cn(
                bgClass,
                "px-container bg-cover bg-center text-white py-[5rem] flex items-center justify-between"
            )}
        >
            <h2 className="text-2-bold">
                {"Ready to make a reservation?"}
            </h2>
            <BookTableButton />
        </div>
    );
}
