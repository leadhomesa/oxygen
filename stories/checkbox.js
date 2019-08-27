import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../src/checkbox';
import { select, boolean } from '@storybook/addon-knobs';

const checkboxVariants = {
  Radio: 'radio',
  CheckBox: 'checkbox'
};

storiesOf('CheckBox', module).add('Checked checkbox', () => {
  return (
    <Checkbox
      type={select('Type', checkboxVariants, 'checkbox')}
      checked={boolean('Checked', true)}
      onClick={() => console.log('Checked checkbox')}
    />
  );
});
