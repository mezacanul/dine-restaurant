import { useState } from "react";
import Button from "../common/Button";

export default function Form() {
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
    return (
        <div className="w-[50%] mt-[30vh] flex flex-col gap-[1.5rem] bg-neutral-50 z-10 shadow-2xl/50 text-black px-8 py-8 text-6">
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

            <DatePicker date={date} setDate={setDate} />
            <TimePicker time={time} setTime={setTime} />
            <GuestsPicker
                guests={formData.guests}
                setFormData={setFormData}
            />

            <Button
                label="MAKE RESERVATION"
                type="solid"
                onClick={() => {}}
                disabled={true}
            />
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

function DatePicker({
    date,
    setDate,
}: {
    date: { month: string; day: string };
    setDate: (date: { month: string; day: string }) => void;
}) {
    const inputClass =
        "p-2 border-b-2 border-black  focus:outline-none text-center";
    return (
        <div className="w-full grid grid-cols-4 gap-4 items-center">
            <p className="w-full me-[4rem]">
                {"Pick a date"}
            </p>
            <input
                type="text"
                placeholder="MM"
                value={date.month}
                onChange={(e) =>
                    setDate({
                        ...date,
                        month: e.target.value,
                    })
                }
                className={inputClass}
            />
            <input
                type="text"
                placeholder="DD"
                value={date.day}
                onChange={(e) =>
                    setDate({
                        ...date,
                        day: e.target.value,
                    })
                }
                className={inputClass}
            />
            <input
                type="text"
                // placeholder="YYYY"
                value={"2026"}
                className={inputClass}
            />
        </div>
    );
}

function TimePicker({
    time,
    setTime,
}: {
    time: { hour: string; minute: string; period: string };
    setTime: (time: {
        hour: string;
        minute: string;
        period: string;
    }) => void;
}) {
    const inputClass =
        "p-2 border-b-2 border-black  focus:outline-none text-center";
    return (
        <div className="w-full grid grid-cols-4 gap-4 items-center">
            <p className="w-full me-[4rem]">
                {"Pick a time"}
            </p>
            <input
                type="text"
                placeholder="09"
                value={time.hour}
                className={inputClass}
                onChange={(e) =>
                    setTime({
                        ...time,
                        hour: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="00"
                value={time.minute}
                className={inputClass}
                onChange={(e) =>
                    setTime({
                        ...time,
                        minute: e.target.value,
                    })
                }
            />
            <input
                type="text"
                // placeholder="YYYY"
                value={"AM"}
                className={inputClass}
                onChange={(e) =>
                    setTime({
                        ...time,
                        period: e.target.value,
                    })
                }
            />
        </div>
    );
}

function GuestsPicker({
    guests,
    setFormData,
}: {
    guests: number;
    setFormData: (data: any) => void;
}) {
    const handleDecrement = () => {
        if (guests > 1) {
            setFormData((prev: any) => ({
                ...prev,
                guests: prev.guests - 1,
            }));
        }
    };
    const handleIncrement = () => {
        if (guests < 25) {
            setFormData((prev: any) => ({
                ...prev,
                guests: prev.guests + 1,
            }));
        }
    };
    return (
        <div className="w-full flex items-center justify-between pb-3 border-b-2 border-black px-6">
            <span
                className="cursor-pointer text-xl"
                onClick={handleDecrement}
            >
                {"-"}
            </span>
            <span className="font-bold">{guests}</span>
            <span
                className="cursor-pointer text-xl"
                onClick={handleIncrement}
            >
                {"+"}
            </span>
        </div>
    );
}
