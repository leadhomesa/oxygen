import React from 'react';
import { StyledButton } from './style';
import PropTypes from 'prop-types';
import Loading from './loading.svg';

const Button = ({ children, loading, ...rest }) => (
  <StyledButton {...rest}>
    {children}
    {loading && <Loading />}
  </StyledButton>
);

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'success']),
  children: PropTypes.any.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['flat', 'outlined', 'text'])
};

Button.defaultProps = {
  color: 'primary',
  loading: false,
  size: 'md',
  variant: 'flat'
};

export default Button;
