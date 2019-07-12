import styled from 'styled-components';
import colors from '../colors';

export default styled.div`
  align-items: center;
  background-color: ${colors.lightGallery};
  border-radius: 4px;
  box-shadow: 0 9px 12px 0 rgba(7, 0, 37, 0.07),
    0 2px 4px 0 rgba(7, 0, 37, 0.06);
  color: ${colors.lightStorm};
  display: block;
  font-weight: bold;
  font-size: 11px;
  padding: 7px 12px;
  text-transform: uppercase;
`;
