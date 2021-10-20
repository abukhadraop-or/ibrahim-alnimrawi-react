import { NavLink } from "react-router-dom";
import MenuImage from "assets/images/MenuBar.svg";
import styled, { keyframes } from "styled-components";

export const NavContainer = styled.div`
  color: rgba(0, 0, 0, 0.3);
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 3fr auto auto auto;
  margin: 1rem 7rem;
  @media (max-width: 550px) {
    grid-template-columns: 3fr auto;
    margin: 1rem 0rem;
  }
`;
export const RightLink = styled(NavLink)`
  color: #b8c3e0;
  text-decoration: none;
  &:hover {
    color: #404b59;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
export const MenuBar = styled.div`
  background-image: url(${MenuImage});
  background-size: cover;
  cursor: pointer;
  height: 2.5rem;
  margin-right: 1.5rem;
  width: 2.5rem;
  @media (min-width: 551px) {
    display: none;
  }
`;
export const LeftLink = styled(NavLink)`
  color: #5cb85c;
  font-weight: 1000;
  text-decoration: none;
  @media (max-width: 550px) {
    font-size: 1.5rem;
    margin-left: 2.5rem;
  }
`;
const animationMove = keyframes`
from {height:0},
to {height:100%}
`;
export const Menu = styled.div`
  align-items: center;
  animation: ${animationMove} 0.15s;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
  @media (min-width: 551px) {
    display: none;
  }
`;
export const LinksContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const MenuLink = styled(NavLink)`
  color: #5cb85c;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
`;
