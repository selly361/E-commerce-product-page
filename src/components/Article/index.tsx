import {
  ButtonContainer,
  Number,
  PriceContainer,
  ProductDesc,
  ProductName,
  ProductPrice,
  RetailPrice,
  SaleTag,
  StyledArticle,
  StyledFieldSet,
  Tag,
  AddToCartButton
} from "./Article.styles";
import { MinusIcon, PlusIcon, CartIcon } from "Icons"

import { useCartContext } from "hooks/useCartContext"

const Article = () => {

  const { quantity, incrementQuantity, decrementQuantity, addToCart } = useCartContext()

  
  return (
    <StyledArticle>
      <Tag>Sneaker Company</Tag>
      <ProductName>Fall Limited Edition Sneakers</ProductName>
      <ProductDesc>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </ProductDesc>
      <PriceContainer>
        <ProductPrice>$125.00</ProductPrice>
        <SaleTag>50%</SaleTag>
        <RetailPrice>$250.00</RetailPrice>
      </PriceContainer>
      <StyledFieldSet>
        <ButtonContainer>
          <PlusIcon onClick={incrementQuantity} />
          <Number>{quantity}</Number>
          <MinusIcon onClick={decrementQuantity} />
        </ButtonContainer>
        <AddToCartButton onClick={addToCart}>
          <CartIcon />
          Add to cart
        </AddToCartButton>
      </StyledFieldSet>
    </StyledArticle>
  );
};

export default Article;
