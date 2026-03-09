import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Logo({
    link = false,
}: {
    link?: boolean;
}) {
    const navigate = useNavigate();
    const title = useSelector(
        (state: RootState) => state.content.title
    );
    function handleClick() {
        if (link) {
            navigate("/");
        }
    }
    return (
        <h1
            className={`text-white text-5xl font-bold ${
                link ? "cursor-pointer" : ""
            }`}
            onClick={handleClick}
        >
            {title}
        </h1>
    );
}
