import type { ChangeEvent } from "react"

interface Props {
    placeHolder: string
    value: string
    setValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = (props: Props) => {
    return (
        <input
            className="border border-black/20 outline-none rounded-[5px] text-lg px-4 py-2 w-full"
            placeholder={props.placeHolder}
            onChange={props.setValue}>
        </input >
    )
}