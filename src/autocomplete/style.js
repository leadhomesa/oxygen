import styled, { css } from 'styled-components';

const DarkBg = css`
  background-color: #f0f0f8;
`;

export const Container = styled.div``;

export const SuggestionList = styled.ul`
  background-color: #fff;
  list-style-type: none;
  width: min-content;
  padding: 8px;
  position: absolute;
  z-index: 1;
  margin-top: 14;
  top: ${props => (props.top ? `${props.top}px` : '10px')};
  left: ${props => (props.left ? `${props.left}px` : '10px')};
  box-shadow: 0 9px 12px 0 rgba(7, 0, 37, 0.07),
    0 2px 4px 0 rgba(7, 0, 37, 0.06);
`;

export const SuggestionItem = styled.li`
  padding: 4px 0;
  ${({ selected }) => selected && DarkBg};
`;
