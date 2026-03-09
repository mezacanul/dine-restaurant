import { useNavigate } from "react-router-dom";

export default function Logo({
    link = false,
}: {
    link?: boolean;
}) {
    const navigate = useNavigate();
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
            {"dine"}
        </h1>
    );
}
