import { LogoIcon } from "Icons";
import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 112px;
  width: calc(100vw - 330px);
  margin: auto;
  border-bottom: 1px solid #e4e9f2;

  display: flex;
  justify-content: space-between;


  @media (max-width: 1123px){
    & {
  width: calc(100vw - 50px);

    }
  }
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
    border-color: #ff7e1b;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 50px;
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SubContainer = styled.div`
  width: 22px;
  height: 22px;
  position: relative;
`;

export const NumberOfItems = styled.div`
  width: 22px;
  height: 16px;
  border-radius: 6.5px;
  background-color: #ff7e1b;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  line-height: normal;

  display: grid;
  place-items: center;

  position: absolute;
  top: calc(-16px / 2);
  right: calc(-22px / 2);
`;
