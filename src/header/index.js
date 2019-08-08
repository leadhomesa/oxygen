import React from 'react';
import PropTypes from 'prop-types';

import {
  HeaderContainer,
  LeadhomeLogo,
  SmallLeadhomeLogo,
  StyledLink
} from './style';

const Header = ({ logo: Logo, logoLink, children, ...rest }) => (
  <HeaderContainer {...rest}>
    {Logo && <Logo />}
    {!Logo && (
      <StyledLink href={logoLink}>
        <SmallLeadhomeLogo />
        <LeadhomeLogo />
      </StyledLink>
    )}
    {children}
  </HeaderContainer>
);

Header.defaultProps = {
  logoLink: '/'
};

Header.propTypes = {
  logo: PropTypes.func,
  logoLink: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default Header;
