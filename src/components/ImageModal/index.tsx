import {
  CloseModalContainer,
  ImageContainer,
  ImageThumbnailContainer,
  StyledImage,
  StyledImageModal,
  ImageThumbnail,
} from "./ImageModal.styles";
import { NextIcon, PreviousIcon, CloseIcon } from "Icons";

import { useRef, useEffect } from "react";
import { useImagePreviewContext } from "hooks/useImagePreviewContext";

const ImageModal = () => {
  const {
    slides,
    currentSlide,
    nextSlide,
    prevSlide,
    closePreviewModal,
    previewModal,
    setSlide,
    active
  } = useImagePreviewContext();





  if (!previewModal) return null;
  

  return (
    <StyledImageModal>
      <CloseModalContainer>
        <CloseIcon onClick={closePreviewModal} />
      </CloseModalContainer>
      <ImageContainer>
        <PreviousIcon onClick={prevSlide} />
        <StyledImage src={currentSlide.image} />
        <NextIcon onClick={nextSlide} />
      </ImageContainer>
      <ImageThumbnailContainer>
        {slides.map((slide, i) => (
          <ImageThumbnail className={active(i)} onClick={() => setSlide(i)} src={slide.thumbnail} />
        ))}
      </ImageThumbnailContainer>
    </StyledImageModal>
  );
};

export default ImageModal;
