import React from 'react';
import { PropTypes } from 'prop-types';
import StyledPill from './style';

const Pill = ({ children }) => <StyledPill>{children}</StyledPill>;

Pill.propTypes = {
  children: PropTypes.string.isRequired
};

export default Pill;
