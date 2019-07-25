import styled from 'styled-components';
import BaseCard from '../base-card';

export const CardContainer = styled.div`
  height: 0;
  max-width: 420px;
  min-width: 260px;
  padding-bottom: 73.68421053%;
  position: relative;
  width: 100%;
`;

export const StyledPropertyCard = styled(BaseCard)`
  && {
    bottom: 0;
    flex-direction: column;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
