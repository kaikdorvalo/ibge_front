import type { ChangeEvent } from "react"

interface Props {
    placeHolder: string
    value: string
    setValue: (event: ChangeEvent<HTMLInputElement>) => void
    id: string
    label: string
}

export const SearchInput = (props: Props) => {
    return (
        <div className="w-full">
            <label
                htmlFor={props.id}
                className="text-black/70"
            >{props.label}</label>
            <input
                id={props.id}
                className="border border-black/20 mt-2 outline-none rounded-[5px] text-md px-4 py-2 w-full"
                placeholder={props.placeHolder}
                onChange={props.setValue}>
            </input >
        </div>
    )
}