import type { JSX } from "react"

interface Props {
    label: string
    action: () => void
    children: JSX.Element
}

export const MenuButton = (porps: Props) => {
    return (
        <button onClick={porps.action} className="w-full rounded-[8px] flex  gap-6 transition-all duration-300 cursor-pointer border border-white/70 px-4 py-3 hover:bg-white hover:text-black" >
            <div>
                {porps.children}
            </div>
            {porps.label}
        </button>
    )
}