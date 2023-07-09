import { CloseIcon } from "Icons";
import styled from "styled-components";

export const StyledMobileMenu = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;

  width: 250px;
  background-color: white;
  padding: 24.78px 0 0 25px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CloseMenuIcon = styled(CloseIcon)`
  margin-bottom: 33px;
`;

export const Nav = styled.a`
  color: #1d2026;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
`;
