import { useLocation, useNavigate } from "react-router";
import { MenuButton } from "./MenuButton/MenuButton"
import type { MenuRoute } from "./types/MenuRoute";
import { menuItens } from "./config/menu-itens";
import MenuIcon from "../../assets/icons/menu.svg";
import { useState } from "react";

export const SideMenu = () => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    const location = useLocation();
    const navigation = useNavigate();

    function renderRoutes(routes: MenuRoute[]) {
        return routes.map((route) => {
            const currentPath = location.pathname.split('/')[1];
            const routeActive = `/${currentPath}` == route.path;
            return (
                <li key={route.path}>
                    <MenuButton action={() => { navigation(route.path) }} active={routeActive} label={route.label} icon={route.icon} />
                </li>
            )
        })
    }

    function toggleMenu() {
        setMenuVisible(!menuVisible)
    }

    return (
        <div className="h-full relative z-50">
            <button
                onClick={toggleMenu}
                className={`text-black w-[40px] h-[40px] flex justify-center items-center bg-white border border-black/20 cursor-pointer hover:bg-black/5 rounded-[8px] fixed ${menuVisible ? "ms-[310px]" : "ms-[10px]"} lg:hidden mt-4 transition-all duration-300`}
            >
                <MenuIcon />
            </button>
            <aside className={`fixed lg:static bg-[#f7f7f7] w-[300px] ${menuVisible ? "ms-[0px]" : "ms-[-300px]"} lg:ms-[0px] h-full border-e border-black/10 transition-all duration-300`}>
                <div className="w-full px-4 mb-10">
                    <div className="h-[80px] flex justify-center items-center font-bold text-xl">
                        <span className="text-black/70">Clonador de Cartão</span>
                    </div>
                    <ul className="py-6 flex flex-col gap-3">
                        {renderRoutes(menuItens)}
                    </ul>
                </div>
            </aside>
        </div>
    )
}