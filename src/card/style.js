import styled, { css } from 'styled-components';
import colors from '../colors';

const StandardShadow = css`
  box-shadow: 0 9px 12px 0 rgba(7, 0, 37, 0.07),
    0 2px 4px 0 rgba(7, 0, 37, 0.06);
`;

const DiffuseShadow = css`
  box-shadow: 8px 13px 18px 0 rgba(7, 0, 37, 0.05);
`;

const LongShadow = css`
  box-shadow: 0 13px 17px 0 rgba(7, 0, 37, 0.09);
`;

const HardLongShadow = css`
  box-shadow: 0 15px 20px 0 rgba(7, 0, 37, 0.15);
`;

const ThickShadow = css`
  box-shadow: 0 16px 21px 0 rgba(7, 0, 37, 0.22);
`;

const HardThickShadow = css`
  box-shadow: 10px 25px 30px 0 rgba(7, 0, 37, 0.4);
`;

export default styled.div`
  background: ${colors.white};
  border-radius: 4px;
  display: flex;
  justify-content: center;

  ${({ shadow }) => {
    switch (shadow) {
      case 'standard':
        return StandardShadow;
      case 'long':
        return LongShadow;
      case 'hard-long':
        return HardLongShadow;
      case 'thick':
        return ThickShadow;
      case 'hard-thick':
        return HardThickShadow;
      case 'diffuse':
      default:
        return DiffuseShadow;
    }
  }};
`;
