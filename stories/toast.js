import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs';
import Toast from '../src/toast';

const toastVariants = {
  Success: 'success',
  Warning: 'warning'
};

storiesOf('Toast', module).add('Toast', () => {
  return (
    <Toast
      displayTime={number('Display Time', 5000)}
      type={select('Type', toastVariants, 'success')}
    >
      {text('Message', 'This is a message!')}
    </Toast>
  );
});
