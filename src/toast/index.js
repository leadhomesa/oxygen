import React from 'react';
import { PropTypes } from 'prop-types';
import { CheckIcon, ToastContainer, WarningIcon } from './style';

const Toast = ({ children, displayTime, type }) => {
  return (
    <ToastContainer displayTime={displayTime}>
      {type === 'warning' && <WarningIcon />}
      {type === 'success' && <CheckIcon />}
      {children}
    </ToastContainer>
  );
};

Toast.propTypes = {
  children: PropTypes.string.isRequired,
  displayTime: PropTypes.number,
  type: PropTypes.oneOf(['success', 'warning'])
};

Toast.defaultProps = {
  displayTime: 5000,
  type: 'success'
};

export default Toast;
