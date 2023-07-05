import { styled } from "styled-components";

export const StyledArticle = styled.article`
  width: 445px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Tag = styled.p`
  color: #ff7e1b;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const ProductName = styled.h1``;

export const ProductDesc = styled.p``;

export const PriceContainer = styled.div`
  max-width: 173px;
  max-height: 68px;
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 16px;
  row-gap: 10px;
`;

export const ProductPrice = styled.h2`
  color: #1d2026;
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
`;

export const RetailPrice = styled.p`
  text-decoration-line: line-through;
  color: #b6bcc8;
`;

export const SaleTag = styled.div`
  width: 51px;
  height: 28px;
  border-radius: 6px;
  background: #ffeee2;

  color: #ff7e1b;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;

  display: grid;
  place-items: center;

  grid-column: 2;
`;

export const StyledFieldSet = styled.fieldset`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.button`
  width: 157px;
  height: 56px;
  border-radius: 10px;
  background: #f6f8fd;

  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  justify-content: space-around;
`;

export const Number = styled.p`
  color: #1d2026;
  font-weight: 700;
`;

export const AddToCartButton = styled.button`
  width: 272px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15.54px;

  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;

  border-radius: 10px;
  background: #ff7e1b;
  box-shadow: 0px 20px 50px -20px #ff7e1b;
  cursor: pointer;
  transition: 1s ease background;

  &:hover {
    background: #ffab6a;
  }

  svg path {
    fill: white;
  }
`;
