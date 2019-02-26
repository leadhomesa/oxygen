import styled from 'styled-components';
import colors from '../colors';
import { KeyboardArrowDown } from 'styled-icons/material';

export const DropdownContainer = styled.div`
  cursor: pointer;
`;

export const SelectedOption = styled.div`
  color: ${colors.lightStorm};
  height: 43px;
  width: 100%;
  border-radius: 4px;
  box-shadow: inset 0 2px 4px 0 rgba(65, 65, 96, 0.18);

  border: 1px solid ${colors.grey};
  border-radius: 4px;
  display: flex;
  flex-grow: 0;

  font-size: 15px;
  padding: 12px 15px;
`;

export const Options = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  border: 1px solid ${colors.grey};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0 0 4px 4px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0 0 4px 4px;
  background-color: ${({ active }) =>
    active ? `${colors.lightOcean}` : `${colors.white}`};

  width: 100%;
  height: 40px;
  color: ${colors.lightStorm};
  font-size: 15px;

  padding-left: 16px;
  padding-right: 16px;

  &:hover {
    background-color: ${colors.gallery};
  }
`;

export const ArrowIcon = styled(KeyboardArrowDown)`
  margin-left: auto;
  margin-top: -2px;
  fill: ${colors.lighterStorm};
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
  float: right;
  width: 24px;
  height: 24px;
`;
