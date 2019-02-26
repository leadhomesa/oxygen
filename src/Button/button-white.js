import styled from 'styled-components';
import colors from '../colors';
import Button from './style';

export default styled(Button)`
  color: ${colors.coral};
  background-color: ${colors.white};
  border: 1px solid #d1d1e8;
  white-space: nowrap;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.06);
`;
