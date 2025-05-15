import { useLocation } from "react-router-dom";
import { MenuButton } from "./MenuButton/MenuButton"
import type { MenuRoute } from "./types/MenuRoute";
import { menuItens } from "./config/menu-itens";

export const SideMenu = () => {
    const location = useLocation();

    function renderRoutes(routes: MenuRoute[]) {
        return routes.map((route) => {
            const currentPath = location.pathname.split('/')[1];
            const routeActive = `/${currentPath}` == route.path;
            return (
                <li key={route.path}>
                    <MenuButton action={() => { }} active={routeActive} label={route.label} icon={route.icon} />
                </li>
            )
        })
    }

    return (
        <aside className="bg-black/5 w-[300px] h-full border-e border-black/10">
            <div className="w-full px-4 mb-10">
                <div className="h-[80px] flex justify-center items-center font-bold text-xl">
                    <span className="text-black/70">Clonador de Cartão</span>
                </div>
                <ul className="py-6 flex flex-col gap-3">
                    {renderRoutes(menuItens)}
                </ul>
            </div>
        </aside>
    )
}