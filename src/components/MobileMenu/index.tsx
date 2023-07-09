import React from "react";
import { StyledMobileMenu, CloseMenuIcon, Nav } from "./MobileMenu.styles";
import { useMobileMenuContext } from "hooks/useMobileMenuContext"


const MobileMenu = () => {


    const { isMenuOpen, closeMenu} = useMobileMenuContext()


    if(!isMenuOpen) return null

  return (
    <StyledMobileMenu>
      <CloseMenuIcon onClick={closeMenu} />

      <Nav href="#Collections">Collections</Nav>
      <Nav href="#Men">Men</Nav>
      <Nav href="#Women">Women</Nav>
      <Nav href="#About">About</Nav>
      <Nav href="#Contact">Contact</Nav>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
