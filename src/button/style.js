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

const IconPlacement = css`
  margin: ${({ iconPlacement }) =>
    iconPlacement === 'left' ? '0 4px 0 0' : '0 0 0 4px'};
`;

const ButtonHover = css`
  color: ${({ variant, color }) =>
    variant === 'flat' || variant === 'shadow'
      ? colors.white
      : getHoverColor(color)};
  background-color: ${({ variant, color }) =>
    variant === 'flat' || variant === 'shadow'
      ? getHoverColor(color)
      : 'transparent'};
  border: ${({ variant, color }) =>
    variant === 'outlined' ? `1px solid ${getHoverColor(color)}` : 'none'};
`;

const ButtonActive = css`
  color: ${({ variant, color }) =>
    variant === 'flat' || variant === 'shadow'
      ? colors.white
      : getActiveColor(color)};
  background-color: ${({ variant, color }) =>
    variant === 'flat' || variant === 'shadow'
      ? getActiveColor(color)
      : 'transparent'};
  border: ${({ variant, color }) =>
    variant === 'outlined' ? `1px solid ${getActiveColor(color)}` : 'none'};
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

  &:hover {
    text-decoration: none;
  }

  > svg {
    margin: 0 0 0 4px;
    top: calc(50% - 10px);
    height: 20px;
    width: 20px;
  }
`;

export const StyledLinkButton = styled(Link)`
  ${ButtonStyle}
  text-decoration: none;
`;

export const StyledButton = styled.button`
  ${ButtonStyle}
  color: ${({ variant, color }) =>
    variant === 'flat' || variant === 'shadow'
      ? colors.white
      : getColor(color)};
  background-color: ${({ variant, color }) =>
    variant === 'flat' || variant === 'shadow'
      ? getColor(color)
      : 'transparent'};
  border: ${({ variant, color }) =>
    variant === 'outlined' ? `1px solid ${getColor(color)}` : 'none'};
  height: ${({ size }) =>
    size === 'sm' ? '38px' : size === 'lg' ? '55px' : '44px'};
  padding: ${({ size }) =>
    size === 'sm' ? '0 12px' : size === 'lg' ? '0 24px' : '0 16px'};
  ${({ variant }) => variant === 'shadow' && BoxShadow}
  ${({ disabled }) => disabled && Disabled}

  > svg {
    ${({ icon, iconPlacement }) => IconPlacement}
  }

  &:hover {
    ${({ disabled }) => !disabled && ButtonHover}
  }

  &:active {
    ${({ disabled }) => !disabled && ButtonActive}
  }
`;

const getColor = colorScheme => {
  switch (colorScheme) {
    case 'secondary':
      return colors.storm;
    case 'warning':
      return colors.warning;
    case 'success':
      return colors.ocean;
    case 'primary':
    default:
      return colors.coral;
  }
};

// TODO: change all of these to a light versions of the color once complete color set is available
const getHoverColor = colorScheme => {
  switch (colorScheme) {
    case 'secondary':
      return colors.lightStorm;
    case 'warning':
      return colors.warning;
    case 'success':
      return colors.lightOcean;
    case 'primary':
    default:
      return colors.coral;
  }
};

// TODO: change all of these to a darker versions of the color once complete color set is available
const getActiveColor = colorScheme => {
  switch (colorScheme) {
    case 'secondary':
      return colors.darkStorm;
    case 'warning':
      return colors.warning;
    case 'success':
      return colors.ocean;
    case 'primary':
    default:
      return colors.darkCoral;
  }
};
