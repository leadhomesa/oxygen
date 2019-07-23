import styled from 'styled-components';
import Header from '../header';

import Colors from '../colors';

export const StyledHeader = styled(Header)`
  padding: 0.5rem;
`;

const getStepBackground = (completed, active) => {
  const background = (completed && Colors.monteCarlo) || Colors.darkerStorm;
  return (active && Colors.ocean) || background;
};

const getStepColor = (completed, active) => {
  const color = (completed && Colors.paradiso) || Colors.lighterStorm;
  return (active && Colors.white) || color;
};

export const Crumbs = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  height: 25px;
  width: 100%;
  max-width: 860px;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const Step = styled.div`
  line-height: 25px;
  font-size: 10px;
  text-align: center;
  background-color: ${({ completed, active }) =>
    getStepBackground(completed, active)};
  color: ${({ completed, active }) => getStepColor(completed, active)};
  width: 100%;
  margin-right: 1px;
  font-weight: 600;

  :first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  :last-child {
    margin-right: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;
