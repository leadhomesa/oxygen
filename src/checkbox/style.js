import styled, { css } from 'styled-components';
import colors from '../colors';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Radio = css`
  border-radius: 20px;
`;

const Checkbox = css`
  border-radius: 5px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 28px;
  height: 28px;
  background: ${props =>
    props.checked ? `${colors.ocean}` : `${colors.white}`};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }

  box-shadow: inset 0 2px 4px 0 rgba(65, 65, 96, 0.18);

  ${({ type }) => type === 'radio' && Radio};
  ${({ type }) => type === 'checkbox' && Checkbox};
`;
