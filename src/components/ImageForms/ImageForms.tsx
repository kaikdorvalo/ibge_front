import type { JSX } from "react"

interface Props {
    image: string
    children: JSX.Element
}

export const ImageForms = (props: Props) => {
    return (
        <div className="flex flex-wrap justify-center gap-5 md:gap-20">
            <div className="w-[300px] md:w-[400px]">
                <img className="" src={props.image} />
            </div>

            <form className="w-[300px] md:w-[400px] shrink-1 flex flex-col justify-center">
                {props.children}
            </form>
        </div>
    )
}