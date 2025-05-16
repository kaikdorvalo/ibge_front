import { useCallback, useRef, type ChangeEvent } from "react"
import CalendarIcon from '../../assets/icons/calendar.svg'

interface Props {
    value: string
    setValue: (event: ChangeEvent<HTMLInputElement>) => void
    id: string
    label: string
}

export const DateInput = (props: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleShowPicker = useCallback(() => {
        inputRef.current?.showPicker();
        inputRef.current?.focus();
    }, []);

    return (
        <div className="w-full">
            <label
                htmlFor={props.id}
                className="text-black/70"
            >{props.label}</label>
            <div className="w-full relative mt-2">
                <button
                    type="button"
                    className="absolute w-full h-full flex justify-end items-center pe-4 cursor-pointer text-black/50"
                    onClick={handleShowPicker}
                >
                    <CalendarIcon />
                </button>
                <input
                    id={props.id}
                    ref={inputRef}
                    className="w-full text-center z-10 rounded-[5px] text-md px-4 py-2 border border-black/20 outline-none"
                    onChange={props.setValue}
                    type="date"
                    value={props.value}
                ></input>
            </div>
        </div>
    )
}