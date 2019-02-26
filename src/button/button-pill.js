import styled from 'styled-components';
import colors from '../colors';
import Button from './style';

export default styled(Button)`
  border-radius: 15px;
  padding: 7px 12px;
  color: ${colors.lighterStorm};
  background: transparent;
  border: 1px solid ${colors.lighterStorm};
`;
