import { cn } from "../../utils/cn";
import { useNavigate } from "react-router-dom";

type ButtonType = "outline" | "solid";

export default function BookTableButton({
    type = "outline",
}: {
    type?: ButtonType;
}) {
    const navigate = useNavigate();
    const classes = cn(
        "text-4-regular py-[1rem] px-[3rem] cursor-pointer transition-all duration-300",
        type === "outline"
            ? "border border-white hover:bg-white hover:text-neutral-950"
            : "bg-neutral-950 text-white border-2 border-transparent hover:bg-white hover:text-neutral-950 hover:border-neutral-950 hover:border-2"
    );
    return (
        <button
            className={classes}
            onClick={() => navigate("/booking")}
        >
            {"BOOK A TABLE"}
        </button>
    );
}
