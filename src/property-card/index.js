import React from 'react';
import { CardContainer, StyledPropertyCard } from './style';
import { PropTypes } from 'prop-types';

const PropertyCard = ({ children, ...rest }) => (
  <CardContainer>
    <StyledPropertyCard {...rest}>{children}</StyledPropertyCard>
  </CardContainer>
);

PropertyCard.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired
};

export default PropertyCard;
