import React from 'react';
import StyledCardFooter from './style';
import { PropTypes } from 'prop-types';

const CardFooter = ({ children, variant }) => (
  <StyledCardFooter variant={variant}>{children}</StyledCardFooter>
);

CardFooter.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string
};

export default CardFooter;
