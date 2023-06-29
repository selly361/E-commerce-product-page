import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [isTabletSize, setIsTabletSize] = useState(false);
  const [isDesktopSize, setIsDesktopSize] = useState(false);

  useEffect(() => {
    const handleMediaChange = () => {
      setIsMobileSize(window.innerWidth >= 320 && window.innerWidth <= 767);
      setIsTabletSize(window.innerWidth >= 768 && window.innerWidth <= 1023);
      setIsDesktopSize(window.innerWidth >= 1024);
    };

    handleMediaChange();

    window.addEventListener("resize", handleMediaChange);

    return () => window.removeEventListener("resize", handleMediaChange);
  }, []);

  return { isMobileSize, isTabletSize, isDesktopSize };
};
