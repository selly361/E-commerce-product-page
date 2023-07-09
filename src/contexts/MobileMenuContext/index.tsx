import { IMobileMenuContextProps, IProps } from "./MobileMenuContext.types";
import { createContext, useEffect, useState } from "react";

import { useScreenSize } from "hooks/useScreenSize";

export const MobileMenuContext = createContext<IMobileMenuContextProps>({
  isMenuOpen: false,
  openMenu: () => {},
  closeMenu: () => {}
});

const MobileMenuContextProvider = ({ children }: IProps) => {

  const [isMenuOpen, setMenuOpen] = useState(false)


  const openMenu = () => setMenuOpen(true)
  
  const closeMenu = () => setMenuOpen(false)
  
  
  const { isDesktopSize } = useScreenSize()

  useEffect(() => {

    if(isDesktopSize){
      closeMenu()
    }
    
  }, [isDesktopSize])

  return (
    <MobileMenuContext.Provider
      value={{
        isMenuOpen,
        openMenu,
        closeMenu
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuContextProvider;
