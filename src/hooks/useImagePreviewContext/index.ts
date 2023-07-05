import { useContext } from "react";
import { ImagePreviewContext } from "contexts/ImagePreviewContext";

export const useImagePreviewContext = () => {
  const context = useContext(ImagePreviewContext);

  if (context === undefined) {
    throw new Error("useImagePreviewContext must be used within a ImagePreviewContexProvider");
  }

  return context
};

