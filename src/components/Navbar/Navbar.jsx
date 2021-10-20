import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  NavContainer,
  RightLink,
  LeftLink,
  MenuBar,
  Menu,
  MenuLink,
  LinksContainer,
} from "components/Navbar/nav-bar-style";

/**
 * Render a <Navbar> component
 *
 * @param {Array} props.links Array of the links.
 */
const NavBar = ({ links }) => {
  const [menu, setMenu] = useState(false);
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default NavBar;

NavBar.propTypes = {
  links: PropTypes.arrayOf(Object),
};
