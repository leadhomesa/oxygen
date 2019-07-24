import React from 'react';
import StyledBaseCard from './style';
import PropTypes from 'prop-types';

const BaseCard = ({ children, className, shadow, ...rest }) => (
  <StyledBaseCard className={className} shadow={shadow} {...rest}>
    {children}
  </StyledBaseCard>
);

BaseCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
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
