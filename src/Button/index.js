// @flow
import styled from 'react-emotion'

import { body } from '../fonts'
import { primary } from '../colours'

export default styled('button')`
  font-family: ${body};
  appearance: none;
  background-color: ${primary};
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  color: white;
  font-size: 1.1rem;
`
