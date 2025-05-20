import { useCallback } from "react"
import { ActionButton } from "../ActionButton/ActionButton"

interface Props {
    id: string
    label: string
    value: string
    buttonAction: (action: string, value: string, setValue: (value: string) => void) => void
    setValue: (value: string) => void
}

export const DecadeInput = (props: Props) => {

    const handleDecadeButton = useCallback((action: string) => {
        props.buttonAction(action, props.value, props.setValue);
    }, [props.value])


    return (
        <div className="w-full">
            <label
                className="text-black/70"
                htmlFor={props.id}
            >{props.label}</label>
            <div className="w-full flex gap-10 mt-2">
                <div className="w-[150px] shrink-1">
                    <ActionButton
                        action={() => { handleDecadeButton('decrement') }}
                        text={"<"}
                    ></ActionButton>
                </div>
                <input
                    id={props.id}
                    disabled={true}
                    className="text-center border border-black/20 outline-none rounded-[5px] text-md px-4 py-2 w-full"
                    type="text"
                    value={props.value}
                ></input>
                <div className="w-[150px] shrink-1">
                    <ActionButton
                        action={() => { handleDecadeButton('increment') }}
                        text={">"}
                    ></ActionButton>
                </div>
            </div>
        </div>
    )
}  