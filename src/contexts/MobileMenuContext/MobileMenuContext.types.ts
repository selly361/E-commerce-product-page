import { ReactNode } from "react";

export interface IProps {
    children: ReactNode
}


export interface IMobileMenuContextProps {
    isMenuOpen: boolean
    openMenu: () => void
    closeMenu: () => void
}