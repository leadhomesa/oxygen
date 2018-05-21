// @flow

import styled from 'react-emotion'

import { passive } from '../colours'

const centerWith = value => props => props.centerContent && value

export default styled('div')`
  width: 13rem;
  height: 14rem;
  box-shadow: 0 3px 13px rgba(100, 100, 100, 0.1);
  display: ${centerWith('flex')};
  flex-direction: ${centerWith('column')};
  justify-content: ${centerWith('center')};
  align-items: ${centerWith('center')};
  text-align: ${centerWith('center')};
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: ${passive};
`
