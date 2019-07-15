import styled, { css, keyframes } from 'styled-components';
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

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const slideInTop = keyframes`
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`;

const slideInRight = keyframes`
  0% {
    -webkit-transform: translateX(600px);
            transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(64px);
            transform: translateX(64px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(24px);
            transform: translateX(24px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
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

  @media (min-width: ${breakpoints.small}) {
    animation: ${slideInRight} 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both,
      ${fadeOut} 0.5s linear ${({ displayTime }) => `${displayTime}ms`} 1
        forwards;
    bottom: 0;
    font-size: 16px;
    left: auto;
    top: auto;
  }

  @media (max-width: ${breakpoints.small}) {
    animation: ${slideInTop} 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both,
      ${fadeOut} 0.5s linear ${({ displayTime }) => `${displayTime}ms`} 1
        forwards;
  }
`;
