interface Props {
    text: string
    action: () => void
}

export const ActionButton = (props: Props) => {
    return (
        <button
            onClick={props.action}
            type="button"
            className="bg-[#3b70a2] w-full h-full text-white rounded-[5px] cursor-pointer hover:bg-[#174580] active:bg-[#174580]"
        >
            {props.text}
        </button>
    )
}