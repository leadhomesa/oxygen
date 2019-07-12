import styled, { css } from 'styled-components';
import colors from '../colors';
import breakpoints from '../breakpoints';
import { CheckCircle } from 'styled-icons/material/CheckCircle';
import { Warning } from 'styled-icons/material/Warning';

const Icon = css`
  margin-right: 7px;
  width: 19px;

  @media (min-width: ${breakpoints.small}) {
    width: 22px;
  }
`;

const HideToast = css`
  display: none;
`;

export const CheckIcon = styled(CheckCircle)`
  ${Icon}
  color: ${colors.ocean};
`;

export const WarningIcon = styled(Warning)`
  ${Icon}
  color: ${colors.warning};
`;

export const ToastContainer = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 9px 12px 0 rgba(7, 0, 37, 0.07),
    0 2px 4px 0 rgba(7, 0, 37, 0.06);
  color: ${colors.lightStorm};
  display: flex;
  flex-direction: row;
  font: 600 14px/18px 'Source Sans Pro';
  height: auto;
  left: 0;
  margin: 20px;
  padding: 5px 10px;
  position: fixed;
  right: 0;
  top: 0;

  ${({ hide }) => hide && HideToast} 

  @media (min-width: ${breakpoints.small}) {
    bottom: 0;
    font-size: 16px;
    left: auto;
    top: auto;
  }
`;
