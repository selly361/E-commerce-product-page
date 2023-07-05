import { ICartContextProps, IProps } from "./CartContext.types";
import { createContext, useEffect, useState } from "react";

const cart = {
  quantity: 0,
  name: "Fall Limited Edition Sneakers",
  price: 125,
  totalPrice: 0,
};

export const CartContext = createContext<ICartContextProps>({
  cart,
  isCartOpen: false,
  quantity: 0,
  isCartEmpty: true,
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  onMouseOver: () => {},
  onMouseLeave: () => {},
  addToCart: () => {},
  deleteItem: () => {}
});

const CartContextProvider = ({ children }: IProps) => {
  const [cart, setCart] = useState({
    quantity: 2,
    name: "Fall Limited Edition Sneakers",
    price: 125,
    totalPrice: 250,
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
    }));

    if (cart.quantity < 0) {
      setCart((e) => ({ ...e, quantity: 0 }));
    }
  }

  function deleteItem(){
    setCart(e => ({...e, quantity: e.quantity - 1}))
  }



  useEffect(() => {
    setCart(e => ({...e, totalPrice: e.quantity * e.price}))
  }, [cart.quantity])

  const isCartEmpty = cart.quantity == 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        isCartEmpty,
        quantity,
        incrementQuantity,
        decrementQuantity,
        onMouseOver,
        onMouseLeave,
        addToCart,
        deleteItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
