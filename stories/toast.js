import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import Toast from '../src/toast';

const toastVariants = {
  Success: 'success',
  Warning: 'warning'
};

storiesOf('Toast', module).add('Toast', () => {
  return (
    <Toast type={select('Type', toastVariants, 'success')}>
      {text('Message', 'This is a message!')}
    </Toast>
  );
});
