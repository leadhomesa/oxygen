import styled from 'styled-components';
import Close from '../../assets/close.svg';
import Colors from '../colors';

const DarkBg = `
  background-color: ${Colors.darkbg};
`;

const HideBorder = `
  border: none;
`;

export const Container = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  text-align: center;
  line-height: 1;
  padding: ${props => (props.slim ? '6px 12px' : '12px 18px')};
  background: ${Colors.white};
  border: 1px solid ${Colors.grey};
  font-size: 15px;
  font-weight: 600;
  position: relative;
  bottom: 0;
  transition: all 0.1s ease-out;
  margin: 4px;
  color: ${Colors.lightStorm};
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
  fill: ${Colors.coral};
  padding-top: 2px;
  cursor: pointer;
`;

export const Loader = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.3;
  font-weight: bold;
`;
