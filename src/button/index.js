import Button from './style';
import PropTypes from 'prop-types';

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'success']),
  loading: PropTypes.bool,
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
