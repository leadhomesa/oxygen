import styled, { css } from 'styled-components';

const ActiveMenu = css`
  display: block;
`;

export default styled.nav`
  text-align: right;
  width: 100%;

  & a {
    cursor: pointer;
  }

  & div {
    display: none;

    ${({ showMenu }) => showMenu && ActiveMenu};
  }
`;
