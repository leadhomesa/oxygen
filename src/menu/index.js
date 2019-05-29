import React from 'react';
import StyledMenu from './style';
import { PropTypes } from 'prop-types';
import MenuIcon from 'styled-icons/boxicons-regular/Menu';
import CloseIcon from 'styled-icons/evil/Close';

const Menu = ({ children, setShowMenu, showMenu }) => (
  <StyledMenu showMenu={showMenu}>
    <div>{children}</div>

    <a onPress={() => setShowMenu(!showMenu)}>
      {!showMenu && <MenuIcon />}
      {showMenu && <CloseIcon />}
    </a>
  </StyledMenu>
);

Menu.propTypes = {
  children: PropTypes.node,
  setShowMenu: PropTypes.func.isRequired,
  showMenu: PropTypes.bool
};

Menu.defaultProps = {
  showMenu: false
};

export default Menu;
