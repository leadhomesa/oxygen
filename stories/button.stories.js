import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import Button from '../src/button';

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

const buttonVariants = {
  Flat: 'flat',
  Outlined: 'outlined',
  Text: 'text'
};

storiesOf('Buttons', module).add('Button', () => (
  <Button
    color={select('Colour', buttonColours, 'primary')}
    disabled={boolean('Disabled', false)}
    loading={boolean('Loading', false)}
    size={select('Size', buttonSizes, 'md')}
    variant={select('Variant', buttonVariants, 'flat')}
  >
    {text('Label', 'Hello Button')}
  </Button>
));
