import React from 'react';
import PropTypes from 'prop-types';

import { HeaderContainer } from './style';
import { ReactComponent as LeadhomeLogo } from '../../assets/leadhome-logo.svg';

const Header = ({ children }) => (
  <HeaderContainer>
    <LeadhomeLogo />
    {children}
  </HeaderContainer>
);

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default Header;
