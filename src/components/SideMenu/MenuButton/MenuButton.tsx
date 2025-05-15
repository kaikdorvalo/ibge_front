interface Props {
    label: string
    action: () => void
    icon: any
    active: boolean
}

export const MenuButton = (porps: Props) => {
    return (
        <button onClick={porps.action} className={`w-full text-black/70 rounded-[8px] flex  gap-6 transition-all duration-300 cursor-pointer border border-black/10 ${porps.active ? "bg-[#174580] text-white" : 'bg-white text-black'} shadow-sm px-4 py-3 hover:bg-[#174580] hover:text-white`} >
            < div >
                <porps.icon />
            </div >
            {porps.label}
        </button >
    )
}