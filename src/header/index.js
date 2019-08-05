import React from 'react';
import PropTypes from 'prop-types';

import {
  HeaderContainer,
  LeadhomeLogo,
  SmallLeadhomeLogo,
  StyledLink
} from './style';

const Header = ({ logo: Logo, children, ...rest }) => (
  <HeaderContainer {...rest}>
    {Logo && <Logo />}
    {!Logo && (
      <StyledLink to='/'>
        <SmallLeadhomeLogo />
        <LeadhomeLogo />
      </StyledLink>
    )}
    {children}
  </HeaderContainer>
);

Header.propTypes = {
  logo: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default Header;
