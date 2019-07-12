import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { CheckIcon, ToastContainer, WarningIcon } from './style';

const Toast = ({ children, displayTime, type }) => {
  const [hide, setHide] = useState(false);

  const hideToast = () => {
    setHide(true);
  };

  useEffect(() => {
    setTimeout(hideToast, displayTime);
  });
  return (
    <ToastContainer hide={hide}>
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
