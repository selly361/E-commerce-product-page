import { CartIcon, MenuIcon } from "Icons";
import {
  Container,
  Logo,
  NavLink,
  NumberOfItems,
  ProfileImage,
  StyledHeader,
  StyledNav,
  SubContainer,
  UserNav,
} from "./Header.styles";

import { useCartContext } from "hooks/useCartContext";
import { useMobileMenuContext } from "hooks/useMobileMenuContext";
import { useScreenSize } from "hooks/useScreenSize";

const Header = () => {
  const { onMouseOver, onMouseLeave, cart } = useCartContext();
  const { isDesktopSize } = useScreenSize();
  const { openMenu } = useMobileMenuContext();

  return (
    <StyledHeader>
      <StyledNav>
        {isDesktopSize ? (
          <>
            <Logo />
            <NavLink href="#Collections">Collections</NavLink>
            <NavLink href="#Men">Men</NavLink>
            <NavLink href="#Women">Women</NavLink>
            <NavLink href="#About">About</NavLink>
            <NavLink href="#Contact">Contact</NavLink>
          </>
        ) : (
          <>
            <MenuIcon onClick={openMenu} />
            <Logo />
          </>
        )}
      </StyledNav>
      <UserNav>
        <Container onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
          <SubContainer>
            {cart.quantity > 0 && (
              <NumberOfItems>{cart.quantity}</NumberOfItems>
            )}
            <CartIcon />
          </SubContainer>
        </Container>
        <ProfileImage src="images/image-avatar.png" />
      </UserNav>
    </StyledHeader>
  );
};

export default Header;
