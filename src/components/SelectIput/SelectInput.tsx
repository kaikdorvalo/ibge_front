import { useCallback, useEffect, type ChangeEvent } from "react"
import type { SelectValue } from "../../models/select-value"

interface Props {
    id: string
    data: SelectValue[]
    value: string
    setValue: (value: string) => void
    label: string
}

export const SelectInput = (props: Props) => {

    function changeValue(event: ChangeEvent<HTMLSelectElement>) {
        props.setValue(event.currentTarget.value)
    }

    useEffect(() => {
        if (props.value === '') {
            props.setValue(props.data[0].value);
        }
    })

    return (
        <div
            className="w-full flex flex-col"
        >
            <label
                htmlFor={props.id}
                className="text-black/70"
            >{props.label}</label>
            <select
                id={props.id}
                className="border border-black/20 mt-2 outline-none rounded-[5px] text-md px-4 py-2 w-full"
                onChange={changeValue}
                value={props.value}
            >
                {
                    props.data.map((location) => {
                        return (
                            <option value={location.value}>{location.label}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}