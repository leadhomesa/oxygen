import React from 'react';
import StyledPropertyCard from './style';
import { PropTypes } from 'prop-types';

const PropertyCard = ({ children, ...rest }) => (
  <StyledPropertyCard {...rest}>{children}</StyledPropertyCard>
);

PropertyCard.propTypes = {
  children: PropTypes.node
};

export default PropertyCard;
