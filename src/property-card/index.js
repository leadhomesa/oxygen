import React from 'react';
import { AspectRatio, CardContainer, StyledPropertyCard } from './style';
import { PropTypes } from 'prop-types';

const PropertyCard = ({ children, className, ...rest }) => (
  <CardContainer className={className}>
    <AspectRatio>
      <StyledPropertyCard {...rest}>{children}</StyledPropertyCard>
    </AspectRatio>
  </CardContainer>
);

PropertyCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.isRequired
};

export default PropertyCard;
