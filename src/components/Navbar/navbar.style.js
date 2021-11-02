import MenuImage from 'assets/images/MenuBar.svg';
import { NavLink } from 'react-router-dom';
import colors from 'style/colors';
import mediaQueries from 'style/media-queries';
import styled, { keyframes } from 'styled-components';

const animationMove = keyframes`
from {height:0},
to {height:100%}
`;

export const NavContainer = styled.div`
  color: rgba(0, 0, 0, 0.3);
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 3fr auto auto auto;
  margin: 1rem 7rem;

  @media (max-width: ${mediaQueries.mobile}) {
    grid-template-columns: 3fr auto;
    margin: 1rem 0rem;
  }
`;

export const RightLink = styled(NavLink)`
  color: ${colors.lightGrayishBlue};
  text-decoration: none;

  &:hover {
    color: ${colors.veryDarkGrayishBlue2};
  }

  @media (max-width: ${mediaQueries.mobile}) {
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

  @media (min-width: ${mediaQueries.mobile2}) {
    display: none;
  }
`;

export const LeftLink = styled(NavLink)`
  color: ${colors.moderateLimeGreen};
  font-weight: 1000;
  text-decoration: none;

  @media (max-width: ${mediaQueries.mobile}) {
    font-size: 1.5rem;
    margin-left: 2.5rem;
  }
`;

export const Menu = styled.div`
  align-items: center;
  animation: ${animationMove} 0.15s;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;

  @media (min-width: ${mediaQueries.mobile2}) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const MenuLink = styled.div``;
