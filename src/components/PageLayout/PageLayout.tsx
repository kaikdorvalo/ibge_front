import { type JSX } from "react"
import { SideMenu } from "../SideMenu/SideMenu"
import { useLocation } from "react-router-dom"

interface Props {
    children: JSX.Element
}

export const PageLayout = (props: Props) => {

    return (
        <div className="w-full min-h-screen flex bg-white">
            <div className="flex-grow">
                <SideMenu />
            </div>
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-[80px] flex justify-center items-center text-black/70 text-lg shadow-sm bg-black/2">
                    Consumindo serviço do IBGE
                </div>
                <div className="w-full min-h-full overflow-x-hidden overflow-y-auto p-6">
                    {props.children}
                </div>
            </div>
        </div>
    )
}