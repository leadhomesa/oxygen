import React from 'react';
import { PropTypes } from 'prop-types';
import { CheckIcon, ToastContainer, WarningIcon } from './style';

const Toast = ({ children, type }) => (
  <ToastContainer>
    {type === 'warning' && <WarningIcon />}
    {type === 'success' && <CheckIcon />}
    {children}
  </ToastContainer>
);

Toast.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning'])
};

Toast.defaultProps = {
  type: 'success'
};

export default Toast;
