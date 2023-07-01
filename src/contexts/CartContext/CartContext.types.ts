import { ReactNode } from "react";

export interface IProps {
    children: ReactNode
}

interface ICart {
    quantity: number
    name: string
    price: number
    totalPrice: number
}

export interface ICartContextProps {
    cart: ICart
    isCartOpen: boolean
    isCartEmpty: boolean
    incrementQuantity: () => void
    decrementQuantity: () => void
    onMouseOver: () => void
    onMouseLeave: () => void
    addToCart: () => void
}