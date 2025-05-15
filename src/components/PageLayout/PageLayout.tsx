import { type JSX } from "react"
import { SideMenu } from "../SideMenu/SideMenu"

interface Props {
    children: JSX.Element
}

export const PageLayout = (props: Props) => {
    return (
        <div className="w-full min-h-screen flex bg-[#141414]">
            <div className="flex-grow">
                <SideMenu />
            </div>
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-[80px] flex justify-center items-center text-white/70 text-lg shadow-sm bg-[#1C1C1C]">
                    Consumindo serviço do IBGE
                </div>
                <div className="w-full min-h-full overflow-x-hidden overflow-y-auto p-6">
                    {props.children}
                </div>
            </div>
        </div>
    )
}