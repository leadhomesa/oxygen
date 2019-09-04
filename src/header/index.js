import React from 'react';
import PropTypes from 'prop-types';
import deprecated from 'deprecated-prop-type';

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
  logo: deprecated(
    PropTypes.func,
    'The logo prop has been depcrecated. Please consider passing it in via children instead.'
  ),
  logoLink: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default Header;
