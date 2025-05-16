import { type JSX } from "react"
import { SideMenu } from "../SideMenu/SideMenu"

interface Props {
    children: JSX.Element
    title: string
}

export const PageLayout = (props: Props) => {

    return (
        <div className="w-full min-h-dvh flex bg-white">
            <div className="flex-grow">
                <SideMenu />
            </div>
            <div className="w-full flex-grow flex flex-col">
                <div className="w-full h-[80px] flex justify-center items-center text-black/70 text-lg shadow-sm bg-black/2">
                    {props.title}
                </div>
                <div className="w-full h-full overflow-x-hidden overflow-y-auto p-10">
                    {props.children}
                </div>
            </div>
        </div>
    )
}