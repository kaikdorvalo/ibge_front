import type { ChangeEvent } from "react"

interface Props {
    value: string
    setValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export const DateInput = (props: Props) => {
    return (
        <input
            className="w-full text-center px-6 border border-black/20 outline-none"
            onChange={props.setValue}
            type="date"
        ></input>
    )
}