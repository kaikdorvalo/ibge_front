interface Props {
    label: string
    value: string
}

export const CardInfo = (props: Props) => {
    return (
        <div
            className="w-full border border-black/10 rounded-[5px] p-3 hover:bg-black/2 transition-all duration-300"
        >
            <div
                className="flex flex-col"
            >
                <span
                    className="text-black font-semibold"
                >{props.label}</span>
                <span>{props.value}</span>
            </div>
        </div>
    )
}