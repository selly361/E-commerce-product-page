import { StyledOverlay } from './Overlay.styles';
import { useEffect } from 'react';
import { useImagePreviewContext } from 'hooks/useImagePreviewContext';
import { useMobileMenuContext } from 'hooks/useMobileMenuContext';

const Overlay = () => {
  const { previewModal } = useImagePreviewContext();
  const { isMenuOpen, closeMenu } = useMobileMenuContext()
  
  useEffect(() => {
    if(previewModal) window.scroll(0, 0)

    document.documentElement.style.overflow = (previewModal || isMenuOpen) ? 'hidden' : 'auto';


    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [previewModal, isMenuOpen]);

  return <StyledOverlay onClick={closeMenu} className={(previewModal || isMenuOpen) ? 'open' : ''} />;
};

export default Overlay;
