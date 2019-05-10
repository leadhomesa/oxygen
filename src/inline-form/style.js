import styled from 'styled-components';

export default styled.form`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;

  & div {
    border-radius: 4px 0 0 4px;
    & input {
      padding: 9px 15px;
    }
  }

  & button {
    border-radius: 0 4px 4px 0;
    box-shadow: none;
    height: 100%;
    margin: 0;
    &:hover {
      bottom: 0;
      box-shadow: none;
    }
  }
`;
