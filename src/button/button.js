import React from 'react';
import { StyledButton } from './style';
import PropTypes from 'prop-types';
import Loading from './loading.svg';

const Button = ({ children, loading, icon, iconPlacement, ...rest }) => (
  <StyledButton icon={!!icon} iconPlacement={iconPlacement} {...rest}>
    {iconPlacement === 'left' && getIcon(loading, icon)}
    {children}
    {iconPlacement !== 'left' && getIcon(loading, icon)}
  </StyledButton>
);

const getIcon = (loading, icon) => {
  return loading ? <Loading /> : icon;
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'success']),
  children: PropTypes.any.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.any,
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['flat', 'outlined', 'text', 'shadow'])
};

Button.defaultProps = {
  color: 'primary',
  loading: false,
  icon: false,
  iconPlacement: 'right',
  size: 'md',
  variant: 'flat'
};

export default Button;
