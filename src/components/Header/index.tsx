import { Container, Logo, NavLink, NumberOfItems, ProfileImage, StyledHeader, StyledNav, UserNav, SubContainer } from "./Header.styles";

import { CartIcon } from "Icons"
import { useCartContext } from "hooks/useCartContext"

const Header = () => {

  const { onMouseOver, onMouseLeave, cart } = useCartContext()

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
        <SubContainer>
        {cart.quantity > 0 && <NumberOfItems>{cart.quantity}</NumberOfItems>}
        <CartIcon />
        </SubContainer>
        </Container>
        <ProfileImage src="images/image-avatar.png" />
      </UserNav>
    </StyledHeader>
  );
};

export default Header;
