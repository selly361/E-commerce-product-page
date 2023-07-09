import styled from "styled-components";

export const StyledImagePreview = styled.div`
  width: 445px;

  display: grid;
  grid-template: 445px 88px / repeat(5, 88px);
  row-gap: 32px;
  column-gap: 31px;

  @media (max-width: 900px) {
    & {
      display: static;
      width: 375px;
      height: 300px;
    }
  }
`;

export const StyledImage = styled.img`
  width: 445px;
  height: 445px;
  border-radius: 15px;
`;

export const ImageThumbnail = styled.img`
  width: 88px;
  height: 88px;
  grid-row: 2;
  border-radius: 10px;
  cursor: pointer;
  grid-row: 2;
  filter: grayscale(80%);
  transition: 1s ease filter, 1s ease border;
  border: 2px solid transparent;

  &.active {
    border-color: #ff7e1b;
    filter: grayscale(0%);
  }

  &:hover {
    filter: grayscale(0%);
  }
`;

export const Container = styled.div`
  width: max-content;
  height: 300px;
  position: relative;

  svg {
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  svg:nth-child(1) {
    left: 40px;
  }

  svg:nth-child(3) {
    right: 40px;
  }
`;

export const MobileImage = styled.img`
  width: 375px;
  height: 300px;
  object-fit: contain;
`;
