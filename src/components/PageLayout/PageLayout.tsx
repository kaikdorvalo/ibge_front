import { type JSX } from "react"

interface Props {
    children: JSX.Element
}

export const PageLayout = (props: Props) => {
    return (
        <div className="w-full min-h-screen flex flex-col bg-white">
            <div className="w-full py-5 flex justify-center text-black/70 text-lg shadow-sm">
                Consumindo serviço do IBGE
            </div>
            <div className="w-full">
                {props.children}
            </div>
        </div>
    )
}