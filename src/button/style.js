import styled, { css } from 'styled-components';
import Link from '../link';
import colors from '../colors';

const BoxShadow = css`
  box-shadow: 0 9px 7px 0 rgba(0, 0, 0, 0.06), 0 3px 4px 0 rgba(0, 0, 0, 0.15);

  @media (hover: hover) {
    &:hover {
      transform: translateY(-1px);
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
  height: 38px;
  padding: 0 12px;

  > svg {
    right: 12px;
  }
`;

const LargeButton = css`
  height: 55px;
  padding: 0 24px;

  > svg {
    right: 24px;
  }
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

export const ButtonStyle = css`
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  line-height: 19px;
  outline: none;
  height: 44px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-decoration: none;
  transform: translateY(0);
  transition: transform 0.1s ease-out;
  max-width: 380px;

  ${({ variant }) => (variant !== 'text' ? BoxShadow : 'none')};

  > svg {
    position: absolute;
    right: 16px;
    top: calc(50% - 20px);
    height: 20px;
    width: 20px;
  }

  &:hover {
    text-decoration: none;

    ${({ color }) => {
    /* eslint-disable */
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
    }} /* eslint-enable */
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

export const StyledLinkButton = styled(Link)`
  ${ButtonStyle}
  text-decoration: none;
`;

export const StyledButton = styled.button`
  ${ButtonStyle}
`;
