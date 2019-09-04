import React from 'react';
import PropTypes from 'prop-types';

import { HeaderContainer, StyledLink } from './style';

const Header = ({ logo: Logo, logoLink, children, ...rest }) => (
  <HeaderContainer {...rest}>
    {Logo && (
      <StyledLink href={logoLink}>
        <Logo />
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
