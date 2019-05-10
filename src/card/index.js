import React from 'react';
import StyledCard from './style';
import PropTypes from 'prop-types';

const Card = ({ children, shadow }) => (
  <StyledCard shadow={shadow}>{children}</StyledCard>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  shadow: PropTypes.oneOf([
    'standard',
    'diffuse',
    'long',
    'hard-long',
    'thick',
    'dark-thick'
  ])
};

export default Card;
