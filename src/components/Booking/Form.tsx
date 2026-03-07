import { useState } from "react";
import Button from "../common/Button";
import { cn } from "../../utils/cn";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import GuestsPicker from "./GuestsPicker";
import { ImSpinner8 } from "react-icons/im";

export default function Form() {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        guests: 1,
    });
    const [date, setDate] = useState({
        month: "",
        day: "",
    });
    const [time, setTime] = useState({
        hour: "09",
        minute: "00",
        period: "AM",
    });
    const [isValid] = useState({
        name: true,
        email: true,
        date: true,
        time: true,
    });

    function handleSubmit() {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setSuccess(true);
        }, 1000);
    }
    return (
        <div
            className={cn(
                "w-full lg:w-[50%] mt-0 lg:mt-[30vh] flex flex-col gap-[1.5rem]",
                "bg-neutral-50 z-10 shadow-2xl/50 px-8 py-8 text-6 text-black",
                success ? "h-[100vh] sm:h-[800px] lg:h-[50vh]" : ""
            )}
        >
            {!success && (
                <>
                    <div className="flex flex-col gap-2">
                        <Input
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                        {!isValid.name && (
                            <p className="text-red-500 text-sm">
                                {"Name is required"}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                        {!isValid.email && (
                            <p className="text-red-500 text-sm">
                                {"Email is required"}
                            </p>
                        )}
                    </div>
                    <DatePicker
                        date={date}
                        setDate={setDate}
                        isValid={isValid.date}
                    />
                    <TimePicker
                        time={time}
                        setTime={setTime}
                        isValid={isValid.time}
                    />
                    <GuestsPicker
                        guests={formData.guests}
                        setFormData={setFormData}
                    />
                </>
            )}

            {!isLoading && !success && (
                <Button
                    label="MAKE RESERVATION"
                    type="solid"
                    onClick={handleSubmit}
                    // disabled={true}
                />
            )}
            {isLoading && !success && (
                <div className="flex items-center justify-center py-2">
                    <span className="text-xl">
                        <ImSpinner8 className="animate-spin" />
                    </span>
                </div>
            )}
            {success && (
                <div className="flex items-center justify-center pt-2 h-full">
                    <p className="text-green-600 text-2-light text-center">
                        {"Reservation made successfully!"}
                    </p>
                </div>
            )}
        </div>
    );
}

function Input({
    placeholder,
    value,
    onChange,
}: {
    placeholder: string;
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
}) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full p-2 border-b-2 border-black  focus:outline-none"
        />
    );
}

// function getArray(type: "days" | "months") {
//     const base = Array.from(
//         { length: 31 },
//         (_, i) => i + 1
//     );
//     const strArray = base.map((day) => {
//         if (day < 10) {
//             return `0${day}`;
//         }
//         return day.toString();
//     });
//     if (type === "days") {
//         return strArray;
//     }
//     if (type === "months") {
//         return strArray.slice(0, 12);
//     }
// }
