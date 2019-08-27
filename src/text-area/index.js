import styled, { css } from 'styled-components';
import colors from '../colors';

const TextAreaDisabled = css`
  box-shadow: none;
  color: ${colors.disabled};
  cursor: not-allowed;
`;

const TextAreaReadOnly = css`
  box-shadow: none;
  cursor: default;
`;

const TextArea = styled.textarea`
  border-radius: 4px;
  font-size: 15px;
  width: 100%;
  padding: 10px 15px;
  outline: none;
  color: ${colors.lightStorm};
  flex-grow: 1;
  border: 1px solid ${colors.grey};
  z-index: 1;

  &::placeholder {
    font-size: 15px;
    color: ${colors.ghost};
  }

  ${({ disabled }) => disabled && TextAreaDisabled};
  ${({ readOnly }) => readOnly && TextAreaReadOnly};
`;

export default TextArea;
