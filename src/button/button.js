import styled from 'styled-components';
import colors from '../colors';
import ButtonStyled from './style';
import PropTypes from 'prop-types';

const Button = styled(ButtonStyled)`
  color: ${colors.white};
  background-color: ${colors.coral};
  border: 1px solid ${colors.coral};
`;

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['flat', 'outlined', 'text'])
};

Button.defaultProps = {
  color: 'primary',
  size: 'md',
  variant: 'flat'
};

export default Button;
