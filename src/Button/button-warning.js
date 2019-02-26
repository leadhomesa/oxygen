import styled from 'styled-components';
import colors from '../colors';
import Button from './style';

export default styled(Button)`
  color: ${colors.white};
  background-color: ${colors.warning};
  border: 1px solid ${colors.warning};
`;
