import React from 'react';
import PropTypes from 'prop-types';
import InlineFormWrapper from './style';

const InlineForm = ({ children, ...rest }) => (
  <InlineFormWrapper {...rest}>{children}</InlineFormWrapper>
);

InlineForm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default InlineForm;
