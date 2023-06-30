import { Logo, NavLink, StyledHeader, StyledNav, UserNav, ProfileImage } from "./Header.styles";

import { CartIcon } from "Icons"


const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
      <Logo />
        <NavLink href="#Collections">Collections</NavLink>
        <NavLink href="#Men">Men</NavLink>
        <NavLink href="#Women">Women</NavLink>
        <NavLink href="#About">About</NavLink>
        <NavLink href="#Contact">Contact</NavLink>
      </StyledNav>
      <UserNav>
        <CartIcon />
        <ProfileImage src="images/image-avatar.png" />
      </UserNav>
    </StyledHeader>
  );
};

export default Header;
