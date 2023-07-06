import { StyledOverlay } from './Overlay.styles';
import { useEffect } from 'react';
import { useImagePreviewContext } from 'hooks/useImagePreviewContext';

const Overlay = () => {
  const { previewModal } = useImagePreviewContext();

  useEffect(() => {
    if(previewModal) window.scroll(0, 0)

    document.documentElement.style.overflow = previewModal ? 'hidden' : 'auto';


    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [previewModal]);

  return <StyledOverlay className={previewModal ? 'open' : ''} />;
};

export default Overlay;
