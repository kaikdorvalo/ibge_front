interface Props {
    text: string
    action: () => void
    fill: boolean
}

export const ActionButton = (props: Props) => {
    return (
        <button
            onClick={props.action}
            type="button"
            className={`w-full h-full border-2 rounded-[5px] cursor-pointer hover:bg-[#174580] active:bg-[#174580] transition-all duration-300 ${props.fill ? 'bg-[#3b70a2] border-transparent text-white' : 'bg-transparent border-[#3b70a2] text-black/70 hover:text-white'}`}
        >
            {props.text}
        </button>
    )
}