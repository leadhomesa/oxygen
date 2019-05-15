import React from 'react';
import StyledBaseCard from './style';
import PropTypes from 'prop-types';

const BaseCard = ({ children, className, shadow }) => (
  <StyledBaseCard className={className} shadow={shadow}>
    {children}
  </StyledBaseCard>
);

BaseCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
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
