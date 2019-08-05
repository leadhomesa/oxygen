import styled, { css, keyframes } from 'styled-components';
import { EASE_OUT_EXPO } from '../easing';
import colors from '../colors';

const TextInputDisabled = css`
  box-shadow: none;
  color: ${colors.disabled};
  cursor: default;
`;

const TextInputReadOnly = css`
  box-shadow: none;
  cursor: default;
`;

export const TextInput = styled.input`
  font-size: 15px;
  width: 100%;
  padding: 10px 15px;
  outline: none;
  color: ${colors.lightStorm};
  flex-grow: 1;
  border: none;
  z-index: 1;
  background: transparent;

  &::placeholder {
    font-size: 15px;
    color: ${colors.ghost};
  }

  ${({ disabled }) => disabled && TextInputDisabled};
  ${({ readOnly }) => readOnly && TextInputReadOnly};
`;

const ContainerWarning = css`
  border-color: ${colors.warning};
`;

const ContainerActive = css`
  border-color: ${colors.lighterStorm};
`;

const ContainerDisabled = css`
  border-color: ${colors.grey};
  background-color: ${colors.lightgrey};
  color: ${colors.disabled};
`;

export const Container = styled.div`
  border: ${({ noBorder }) => (noBorder ? 'none' : `1px solid ${colors.grey}`)};
  border-radius: 4px;
  display: flex;
  box-shadow: inset 0 1px 1px 0 rgba(65, 65, 96, 0.18);
  background-color: ${colors.white};

  flex-grow: ${({ flexGrow }) => flexGrow || '0'};
  ${({ active }) => active && ContainerActive};
  ${({ disabled }) => disabled && ContainerDisabled};
  ${({ warning }) => warning && ContainerWarning};
`;

export const AddOnContainer = styled.div`
  padding: ${({ sm }) => (sm ? '0 13px' : '0 18px')};
  display: flex;
  align-items: center;
  border-right: 1px solid ${colors.grey};
  color: ${colors.storm};
`;

export const AffixContainer = styled.div`
  padding: ${({ sm }) => (sm ? '0 13px' : '0 18px')};
  display: flex;
  align-items: center;
  border-left: 1px solid ${colors.grey};
  color: ${colors.storm};
`;

const ErrorIn = keyframes`
  from {
    height: 0.1em;
  }
  to {
    height: 1em;
  }
`;

export const ErrorMessage = styled.div`
  color: ${colors.warning};
  font-size: 12px;
  font-weight: 600;
  animation: ${ErrorIn} 0.3s ${EASE_OUT_EXPO} forwards;
`;

export const IconRegion = styled.span`
  display: flex;
  align-items: center;
  padding: 0 7px 0 0;

  & > * {
    height: 20px;
  }
`;
