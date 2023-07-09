import {
  StyledImagePreview,
  StyledImage,
  ImageThumbnail,
  Container,
  MobileImage
} from "./ImagePreview.styles";
import { useImagePreviewContext } from "hooks/useImagePreviewContext";
import { useScreenSize } from "hooks/useScreenSize";
import {  PreviousIcon, NextIcon } from "Icons"
const ImagePreview = () => {
  const { currentSlide, slides, setSlide, active, openPreviewModal, nextSlide, prevSlide } = useImagePreviewContext();


  const { isDesktopSize } = useScreenSize()

  return (
    <StyledImagePreview>
      {isDesktopSize ? (<><StyledImage onClick={openPreviewModal} src={currentSlide.image} />
      {slides.map((slide, i) => (
          <ImageThumbnail
            className={active(i)}
            onClick={() => setSlide(i)}
            src={slide.thumbnail}
          />
      ))}</>) : <Container>
        <PreviousIcon onClick={prevSlide} />
        <MobileImage src={currentSlide.image} />
        <NextIcon onClick={nextSlide} />
        </Container>}
    </StyledImagePreview>
  );
};

export default ImagePreview;
