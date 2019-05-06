import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/button';
import { boolean, select } from '@storybook/addon-knobs';

const buttonSizes = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg'
};

const buttonColours = {
  Primary: 'primary',
  Secondary: 'secondary',
  Warning: 'warning',
  Success: 'success'
};

storiesOf('Buttons', module).add('Button', () => (
  <Button
    color={select('Colour', buttonColours, 'primary')}
    disabled={boolean('Disabled', false)}
    size={select('Size', buttonSizes, 'md')}
  >
    Hello Button
  </Button>
));
