import { LogoIcon } from "Icons";
import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 112px;
  width: calc(100vw - 330px);
  margin: auto;
  border-bottom: 1px solid #E4E9F2;;

  display: flex;
  justify-content: space-between;
`;

export const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Logo = styled(LogoIcon)`
  margin-right: 24.5px;
`;

export const NavLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 4px solid transparent;
  transition: 0.5s ease border, 0.5s ease color;

  &:hover {
    border-bottom-color: #ff7e1b;
    color: #1d2026;
  }
`;

export const UserNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 46px;

  * {
    cursor: pointer;
  }
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: 500ms ease border;


  &:hover {
    border-color: #FF7E1B;
  }
`;

export const Container = styled.div`
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
`