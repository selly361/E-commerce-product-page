import { Logo, NavLink, StyledHeader, StyledNav, UserNav, ProfileImage, Container } from "./Header.styles";
import { useCartContext } from "hooks/useCartContext"

import { CartIcon } from "Icons"


const Header = () => {

  const { onMouseOver, onMouseLeave } = useCartContext()

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
        <Container onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        <CartIcon />
        </Container>
        <ProfileImage src="images/image-avatar.png" />
      </UserNav>
    </StyledHeader>
  );
};

export default Header;
