import { MobileMenuContext } from "contexts/MobileMenuContext";
import { useContext } from "react";

export const useMobileMenuContext = () => {
  const context = useContext(MobileMenuContext);

  if (context === undefined) {
    throw new Error("useMobileMenuContext must be used within a MobileMenuContextProvider");
  }

  return context
};

