interface Props {
    text: string
    action: () => void
}

export const ActionButton = (props: Props) => {
    return (
        <button
            className="bg-[#3b70a2] w-full px-6 h-full text-white rounded-[5px] cursor-pointer hover:bg-[#174580]"
        >
            {props.text}
        </button>
    )
}