import { MenuButton } from "./MenuButton/MenuButton"

export const SideMenu = () => {
    return (
        <aside className="bg-[#123456] w-[300px] h-full">
            <div className="w-full px-4 mb-10">
                <div className="h-[80px] flex justify-center items-center font-bold text-xl">
                    <span className="text-white/70">Clonador de Cartão</span>
                </div>
                <ul className="py-6 flex flex-col gap-3">
                    <MenuButton action={() => { }} label="Ranking">
                        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7H27" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <circle cx="5" cy="4" r="1" fill="currentColor" />
                            <circle cx="8" cy="4" r="1" fill="currentColor" />
                            <circle cx="11" cy="4" r="1" fill="currentColor" />
                            <path d="M7 23H1V1H27V23H21" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 13V17C10 19.2 11.8 21 14 21C16.2 21 18 19.2 18 17V13H10Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 13H6V14.5C6 17 8 19 10.5 19" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18 13H22V14.5C22 17 20 19 17.5 19" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 25H16" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14 25V21" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </MenuButton>

                    <MenuButton action={() => { }} label="Ranking por localidade">
                        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7H27" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <circle cx="5" cy="4" r="1" fill="currentColor" />
                            <circle cx="8" cy="4" r="1" fill="currentColor" />
                            <circle cx="11" cy="4" r="1" fill="currentColor" />
                            <path d="M7 23H1V1H27V23H21" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 13V17C10 19.2 11.8 21 14 21C16.2 21 18 19.2 18 17V13H10Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 13H6V14.5C6 17 8 19 10.5 19" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18 13H22V14.5C22 17 20 19 17.5 19" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 25H16" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14 25V21" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </MenuButton>

                    <MenuButton action={() => { }} label="Comparação de nomes">
                        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7H27" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <circle cx="5" cy="4" r="1" fill="currentColor" />
                            <circle cx="8" cy="4" r="1" fill="currentColor" />
                            <circle cx="11" cy="4" r="1" fill="currentColor" />
                            <path d="M7 23H1V1H27V23H21" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 13V17C10 19.2 11.8 21 14 21C16.2 21 18 19.2 18 17V13H10Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 13H6V14.5C6 17 8 19 10.5 19" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18 13H22V14.5C22 17 20 19 17.5 19" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 25H16" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14 25V21" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </MenuButton>
                </ul>
            </div>
        </aside>
    )
}