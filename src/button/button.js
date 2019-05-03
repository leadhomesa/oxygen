import styled from 'styled-components';
import colors from '../colors';
import Button from './style';
import PropTypes from 'prop-types';

Button.propTypes = {
  /** Description of prop "size".
   *
   * Size of the button. Options are small, medium and large.
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

Button.defaultProps = {
  size: 'md'
};

export default styled(Button)`
  color: ${colors.white};
  background-color: ${colors.coral};
  border: 1px solid ${colors.coral};
`;
