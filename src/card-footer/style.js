import styled, { css } from 'styled-components';
import colors from '../colors';

const ForSaleFooter = css`
  background: ${colors.white};
  color: ${colors.storm};
`;

const ReservedFooter = css`
  background: ${colors.white};
  color: ${colors.coral};
`;

const SoldFooter = css`
  background: ${colors.coral};
  color: ${colors.white};
`;

export default styled.div`
  align-items: center;
  color: ${colors.storm};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  padding: 0 20px;
  width: 100%;

  ${({ variant }) => {
    switch (variant) {
      case 'reserved':
        return ReservedFooter;
      case 'sold':
        return SoldFooter;
      case 'for-sale':
      default:
        return ForSaleFooter;
    }
  }};
`;
