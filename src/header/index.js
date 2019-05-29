import React from 'react';
import PropTypes from 'prop-types';

import { HeaderContainer } from './style';
import { ReactComponent as LeadhomeLogo } from '../../assets/leadhome-logo.svg';

const Header = ({ logo: Logo, children }) => (
  <HeaderContainer>
    {Logo && <Logo />}
    {!Logo && <LeadhomeLogo />}
    {children}
  </HeaderContainer>
);

Header.propTypes = {
  logo: PropTypes.func,
  children: PropTypes.node
};

export default Header;
