import { createContext, useState } from "react";
import { ICartContextProps, IProps } from "./CartContext.types";

const cart = {
  quantity: 0,
  name: "Fall Limited Edition Sneakers",
  price: 125,
  totalPrice: 0,
};

export const CartContext = createContext<ICartContextProps>({
  cart,
  isCartOpen: false,
  isCartEmpty: false,
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  onMouseOver: () => {},
  onMouseLeave: () => {},
  addToCart: () => {},
});

const CartContextProvider = ({ children }: IProps) => {
  const [cart, setCart] = useState({
    quantity: 0,
    name: "Fall Limited Edition Sneakers",
    price: 125,
    totalPrice: 0,
  });

  const [quantity, setQuantity] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const incrementQuantity = () => setQuantity((e) => e + 1);
  const decrementQuantity = () => setQuantity((e) => e - 1);

  const onMouseOver = () => setIsCartOpen(true);
  const onMouseLeave = () => setIsCartOpen(false);

  function addToCart() {
    setCart((e) => ({
      ...e,
      quantity: e.quantity + quantity,
      totalPrice: e.quantity * e.price,
    }));

    if (cart.quantity < 0) {
      setCart((e) => ({ ...e, quantity: 0, totalPrice: e.quantity * e.price }));
    }
  }

  const isCartEmpty = cart.quantity == 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        isCartEmpty,
        incrementQuantity,
        decrementQuantity,
        onMouseOver,
        onMouseLeave,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
