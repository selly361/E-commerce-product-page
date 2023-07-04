import {
  Container,
  Divider,
  EmptyCartMsg,
  ItemImage,
  StyledButton,
  StyledCart,
  Text,
  Title,
  TotalPrice,
} from "./Cart.styles";
import React, { useEffect } from "react";

import { DeleteIcon } from "Icons";
import { useCartContext } from "hooks/useCartContext";

function Cart() {
  const { isCartOpen, isCartEmpty, cart, deleteItem, onMouseOver, onMouseLeave } = useCartContext();

  if (!isCartOpen) {
    return null;
  }

  return (
    <StyledCart onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <Title>Cart</Title>
      <Divider />
      <Container className={!isCartEmpty ? "not-empty" : ""}>
        {isCartEmpty ? (
          <EmptyCartMsg>Your cart is empty.</EmptyCartMsg>
        ) : (
          <>
            <ItemImage src="images/image-product-1-thumbnail.jpg" />
            <Text>
              {cart.name} {`$${cart.price} x ${cart.quantity}`}{" "}
              <TotalPrice>${cart.totalPrice}</TotalPrice>
            </Text>
            <DeleteIcon onClick={deleteItem} />
            <StyledButton>Checkout</StyledButton>
          </>
        )}
      </Container>
    </StyledCart>
  );
}

export default Cart;
