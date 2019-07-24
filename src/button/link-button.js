import React from 'react';
import { StyledLinkButton } from './style';
import PropTypes from 'prop-types';
import Loading from './loading.svg';

const LinkButton = ({ children, loading, ...rest }) => (
  <StyledLinkButton {...rest}>
    {children}
    {loading && <Loading />}
  </StyledLinkButton>
);

LinkButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'success']),
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['flat', 'outlined', 'text'])
};

LinkButton.defaultProps = {
  color: 'primary',
  loading: false,
  size: 'md',
  variant: 'flat'
};

export default LinkButton;
