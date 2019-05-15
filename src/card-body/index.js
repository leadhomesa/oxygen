import React from 'react';
import StyledCardBody, {
  BodyMeta,
  BodyData,
  BodyPrice,
  BodyDescription
} from './style';
import { PropTypes } from 'prop-types';

const CardBody = ({ description, image, meta, price }) => (
  <StyledCardBody image={image}>
    <BodyMeta>{meta}</BodyMeta>
    <BodyData>
      <BodyPrice>{price}</BodyPrice>
      <BodyDescription>{description}</BodyDescription>
    </BodyData>
  </StyledCardBody>
);

CardBody.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  meta: PropTypes.elementType.isRequired,
  price: PropTypes.string.isRequired
};

export default CardBody;
