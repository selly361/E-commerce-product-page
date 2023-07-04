import styled from "styled-components";

export const StyledCart = styled.div`
  width: 360px;
  height: 256px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
  position: absolute;
  top: 94px;
  right: 89px;

  display: grid;
  grid-template: 67px 1px 1fr / 1fr;
`;

export const Title = styled.p`
  font-weight: 700;
  color: #1d2026;
  padding: 24px 0px 27px 24px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e4e9f2;
`;

export const Container = styled.div`
  padding: 24px 24px 32px 24px;
  display: grid;

  &.not-empty {
    grid-template: 50px 56px / 50px 1fr 14px;
    row-gap: 26px;
    column-gap: 16px;
    align-items: center;
  }

  svg {
    cursor: pointer;
  }
`;

export const EmptyCartMsg = styled.p`
  font-weight: 700;
  align-self: center;
  justify-self: center;
`;

export const ItemImage = styled.img`
  height: 50px;
  width: 50px;

  grid-area: 1/1/1/1;
`;


export const TotalPrice = styled.span`
  color: #1d2026;
  font-size: 16px;
  font-family: Kumbh Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  margin-left: 6px;
`;

export const Text = styled.p`
  grid-area: 1/2/1/2;
  width: 213px;
  align-self: flex-start;
`;

export const StyledButton = styled.button`
  width: 312px;
  height: 56px;
  border-radius: 10px;
  background-color: #ff7e1b;

  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  grid-area: 2/1/3/4;
  cursor: pointer;



`;

