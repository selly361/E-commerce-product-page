import { styled } from "styled-components";

export const StyledImageModal = styled.div`
  width: 400px;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: start;

  position: absolute;
  inset: 0;
  margin: auto;
  z-index: 1000;

  img {
  }
`;

export const CloseModalContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: end;

  svg {
    cursor: pointer;
    transform: scale(1.5);
  }

  path {
    fill: white;

    &:hover {
      fill: #ff7e1b;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  margin-bottom: 16px;

  svg {
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    margin: auto;
  }



  svg:nth-child(1) {
    left: -28px;
  }

  svg:nth-child(3) {
    right: -28px;
  }
`;

export const StyledImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 15px;
`;

export const ImageThumbnailContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const ImageThumbnail = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  cursor: pointer;

  filter: grayscale(80%);
  transition: 1s ease filter, 1s ease border;
  border: 4px solid transparent;

  &.active {
    border-color: #ff7e1b;
    filter: grayscale(0%);
  }

  &:hover {
    filter: grayscale(0%);
  }
`;


