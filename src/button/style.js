import styled, { css } from 'styled-components';

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

export default styled.button`
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  text-align: center;
  line-height: 1;
  cursor: pointer;
  padding: 11px 16px 10px;
  margin: 4px;
  font-size: 15px;
  box-shadow: 0 9px 7px 0 rgba(0, 0, 0, 0.06), 0 3px 4px 0 rgba(0, 0, 0, 0.15);
  position: relative;
  bottom: 0;
  transition: all 0.1s ease-out;
  outline: none;

  @media (hover: hover) {
    &:hover {
      bottom: 1px;
      box-shadow: 0 11px 9px -1px rgba(0, 0, 0, 0.06),
        0 5px 6px -1px rgba(0, 0, 0, 0.15);
    }
  }

  & > svg {
    margin: -7px;
  }

  ${({ disabled }) => disabled && Disabled};
  ${({ size }) => size === 'sm' && SmallButton};
  ${({ size }) => size === 'lg' && LargeButton};
`;
