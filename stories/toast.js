import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs';
import { Button, Toast } from '../src';

const toastVariants = {
  Success: 'success',
  Warning: 'warning'
};

const ToastContainer = ({ displayTime, text, type }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, displayTime + 1000); // NB if you change the fadeout time you need to change this to accommodate
    }
  }, [show]);
  return (
    <>
      <Button
        onClick={() => {
          setShow(true);
        }}
      >
        Open Toast
      </Button>
      {show && (
        <Toast displayTime={displayTime} type={type}>
          {text}
        </Toast>
      )}
    </>
  );
};

ToastContainer.propTypes = {
  text: PropTypes.string.isRequired,
  displayTime: PropTypes.number,
  type: PropTypes.oneOf(['success', 'warning'])
};

storiesOf('Toast', module).add('Toast', () => {
  return (
    <ToastContainer
      displayTime={number('Display Time', 5000)}
      type={select('Type', toastVariants, 'success')}
      text={text('Message', 'This is a message!')}
    />
  );
});
