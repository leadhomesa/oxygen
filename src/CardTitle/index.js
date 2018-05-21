// @flow
import React from 'react'
import styled from 'react-emotion'

import { body } from '../fonts'
import { primary } from '../colours'

const Text = styled('span')`
  font-family: ${body};
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
`

const Container = styled('div')`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${primary};
`

export default props => (
  <Container>
    <Text {...props} />
  </Container>
)
