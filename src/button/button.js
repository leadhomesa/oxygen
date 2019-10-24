import React from 'react';
import { StyledButton } from './style';
import PropTypes from 'prop-types';
import Loading from './loading.svg';

const Button = ({ children, loading, icon, ...rest }) => (
  <StyledButton loading icon={!!icon} {...rest}>
    {children}
    {!loading && icon}
    {loading && <Loading />}
  </StyledButton>
);

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'success']),
  children: PropTypes.any.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['flat', 'outlined', 'text', 'shadow'])
};

Button.defaultProps = {
  color: 'primary',
  loading: false,
  icon: false,
  size: 'md',
  variant: 'flat'
};

export default Button;
