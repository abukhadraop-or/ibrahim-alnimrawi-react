import {
  LeftLink,
  LinksContainer,
  Menu,
  MenuBar,
  MenuLink,
  NavContainer,
  RightLink,
} from 'components/Navbar/navbar.style';
import React, { useState } from 'react';

/**
 * Render a <Navbar> component
 *
 * @return {JSX.Element}
 */
const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const links = [
    { name: 'Home', to: '/Home' },
    { name: 'Sign in', to: '/SignIn' },
    { name: 'Sign up', to: '/SignUp' },
  ];

  return (
    <>
      <NavContainer>
        <LeftLink to="/"> Conduit </LeftLink>
        {links.map((link) => (
          <RightLink key={link.to} to={link.to}>
            {link.name}
          </RightLink>
        ))}
        <MenuBar onClick={() => setMenu(!menu)} />
      </NavContainer>
      {menu && (
        <LinksContainer>
          <Menu>
            {links.map((link) => (
              <MenuLink
                key={link.to}
                onClick={() => setMenu(!menu)}
                to={link.to}
              >
                {link.name}
              </MenuLink>
            ))}
          </Menu>
        </LinksContainer>
      )}
    </>
  );
};

export default NavBar;
