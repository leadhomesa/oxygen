import styled, { css } from 'styled-components';
import colors from '../colors';

const BoxShadow = css`
  box-shadow: 0 9px 7px 0 rgba(0, 0, 0, 0.06), 0 3px 4px 0 rgba(0, 0, 0, 0.15);

  @media (hover: hover) {
    &:hover {
      bottom: 1px;
      box-shadow: 0 11px 9px -1px rgba(0, 0, 0, 0.06),
        0 5px 6px -1px rgba(0, 0, 0, 0.15);
    }
  }
`;

const Disabled = css`
  opacity: 0.5;
  cursor: not-allowed;
`;

const SmallButton = css`
  padding: 7px 12px 7px;
`;

const LargeButton = css`
  padding: 16px 20px 16px;
`;

const PrimaryButton = css`
  color: ${({ variant }) => (variant === 'flat' ? colors.white : colors.coral)};
  background-color: ${({ variant }) =>
    variant === 'flat' ? colors.coral : 'transparent'};
  border: ${({ variant }) =>
    variant !== 'text' ? `1px solid ${colors.coral}` : 'none'};
`;

const SecondaryButton = css`
  color: ${({ variant }) =>
    variant === 'flat' ? colors.white : colors.lighterStorm};
  background-color: ${({ variant }) =>
    variant === 'flat' ? colors.lighterStorm : 'transparent'};
  border: ${({ variant }) =>
    variant !== 'text' ? `1px solid ${colors.lighterStorm}` : 'none'};
`;

const WarningButton = css`
  color: ${({ variant }) =>
    variant === 'flat' ? colors.white : colors.warning};
  background-color: ${({ variant }) =>
    variant === 'flat' ? colors.warning : 'transparent'};
  border: ${({ variant }) =>
    variant !== 'text' ? `1px solid ${colors.warning}` : 'none'};
`;

const SuccessButton = css`
  color: ${({ variant }) => (variant === 'flat' ? colors.white : colors.ocean)};
  background-color: ${({ variant }) =>
    variant === 'flat' ? colors.ocean : 'transparent'};
  border: ${({ variant }) =>
    variant !== 'text' ? `1px solid ${colors.ocean}` : 'none'};
`;

const ButtonStyle = css`
  bottom: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font: 400 15px 'Source Sans Pro', sans-serif;
  line-height: 1;
  margin: 4px;
  outline: none;
  padding: 11px 16px 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 0.1s ease-out;

  ${({ variant }) => (variant !== 'text' ? BoxShadow : 'none')};

  & > svg {
    float: right;
    height: 20px;
    margin: -2px -5px -5px 2px;
    width: 20px;
  }

  ${({ disabled }) => disabled && Disabled};

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return SmallButton;
      case 'lg':
        return LargeButton;
    }
  }};

  ${({ color }) => {
    switch (color) {
      case 'secondary':
        return SecondaryButton;
      case 'warning':
        return WarningButton;
      case 'success':
        return SuccessButton;
      case 'primary':
      default:
        return PrimaryButton;
    }
  }};
`;

export const StyledLinkButton = styled.a`
  ${ButtonStyle}
`;

export const StyledButton = styled.button`
  ${ButtonStyle}
`;
