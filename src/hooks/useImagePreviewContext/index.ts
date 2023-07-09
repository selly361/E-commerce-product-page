import { ImagePreviewContext } from "contexts/ImagePreviewContext";
import { useContext } from "react";

export const useImagePreviewContext = () => {
  const context = useContext(ImagePreviewContext);

  if (context === undefined) {
    throw new Error("useImagePreviewContext must be used within a ImagePreviewContextProvider");
  }

  return context
};

