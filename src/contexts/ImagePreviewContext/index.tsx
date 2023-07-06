import { createContext, useEffect, useState } from "react";

import { IImagePreviewContextProps } from "./ImagePreviewContext.types";
import { IProps } from "contexts/CartContext/CartContext.types";

const slides = [
  {
    image: "images/image-product-1.jpg",
    thumbnail: "images/image-product-1-thumbnail.jpg",
  },
  {
    image: "images/image-product-2.jpg",
    thumbnail: "images/image-product-2-thumbnail.jpg",
  },

  {
    image: "images/image-product-3.jpg",
    thumbnail: "images/image-product-3-thumbnail.jpg",
  },

  {
    image: "images/image-product-4.jpg",
    thumbnail: "images/image-product-4-thumbnail.jpg",
  },
];

export const ImagePreviewContext = createContext<IImagePreviewContextProps>({
  slides,
  currentSlide: slides[0],
  previewModal: false,
  openPreviewModal: () => {},
  closePreviewModal: () => {},
  setSlide: (index: number) => {},
  nextSlide: () => {},
  prevSlide: () => {},
  active: (index: number) => "",
});

const ImagePreviewContextProvider = ({ children }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [previewModal, setPreviewModal] = useState(false);

  const openPreviewModal = () => setPreviewModal(true);

  const closePreviewModal = () => setPreviewModal(false);

  const setSlide = (index: number) => setCurrentIndex(index);

  const nextSlide = () => setCurrentIndex((e) => e + 1);

  const prevSlide = () => setCurrentIndex((e) => e - 1);

  const active = (index: number) => (currentIndex == index ? "active" : "");
  
  const currentSlide = slides[currentIndex];

  if (currentIndex > 3) setCurrentIndex(0);
  else if (currentIndex < 0) setCurrentIndex(3);


  return (
    <ImagePreviewContext.Provider
      value={{
        currentSlide,
        previewModal,
        openPreviewModal,
        closePreviewModal,
        setSlide,
        nextSlide,
        prevSlide,
        active,
        slides
      }}
    >
      {children}
    </ImagePreviewContext.Provider>
  );
};

export default ImagePreviewContextProvider;
