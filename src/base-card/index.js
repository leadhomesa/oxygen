import React from 'react';
import StyledBaseCard from './style';
import PropTypes from 'prop-types';

const BaseCard = ({ children, shadow }) => (
  <StyledBaseCard shadow={shadow}>{children}</StyledBaseCard>
);

BaseCard.propTypes = {
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

export default BaseCard;
