import {
  StyledImagePreview,
  StyledImage,
  ImageThumbnail,
  Container,
} from "./ImagePreview.styles";
import { useImagePreviewContext } from "hooks/useImagePreviewContext";

const ImagePreview = () => {
  const { currentSlide, slides, setSlide, active } = useImagePreviewContext();

  return (
    <StyledImagePreview>
      <StyledImage src={currentSlide.image} />
      {slides.map((slide, i) => (
          <ImageThumbnail
            className={active(i)}
            onClick={() => setSlide(i)}
            src={slide.thumbnail}
          />
      ))}
    </StyledImagePreview>
  );
};

export default ImagePreview;
