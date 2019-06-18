import styled, { css } from 'styled-components';
import Close from '../../assets/close.svg';

const DarkBg = css`
  background-color: #f0f0f8;
`;

const HideBorder = css`
  border: none;
`;

export const Container = styled.div`
  text-decoration: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  text-align: center;
  line-height: 1;
  padding: ${props => (props.slim ? '6px 12px' : '12px 18px')};
  background: #fff;
  border: 1px solid #d1d1e8;
  font-size: 15px;
  font-weight: 600;
  position: relative;
  bottom: 0;
  transition: all 0.1s ease-out;
  margin: 4px;
  color: #8280b0;
  cursor: default;
  width: min-content;
  ${({ dark }) => dark && DarkBg};
  ${({ hideBorder }) => hideBorder && HideBorder};
`;

export const CloseButton = styled.a`
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButtonIcon = styled(Close)`
  width: 20px;
  height: 20px;
  fill: #ff6a70;
  padding-top: 2px;
  cursor: pointer !important;
`;

export const Loader = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.3;
  font-weight: bold;
`;
