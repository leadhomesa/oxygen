import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../colors';
import StyledCardFooter from './style';
import { PropTypes } from 'prop-types';
import Pill from '../pill';

const SoldPill = css`
  background: ${colors.darkCoral};
  color: ${colors.white};
`;

const StyledPill = styled(Pill)`
  ${({ variant }) => {
    return variant === 'sold' && SoldPill;
  }};
`;

const CardFooter = ({ children, suburb, variant }) => (
  <StyledCardFooter variant={variant} suburb={suburb}>
    {children}
    <StyledPill variant={variant}>{suburb}</StyledPill>
  </StyledCardFooter>
);

CardFooter.propTypes = {
  children: PropTypes.node,
  suburb: PropTypes.string.isRequired,
  variant: PropTypes.string
};

export default CardFooter;
