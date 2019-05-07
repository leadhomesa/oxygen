import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import Button from '../src/button';
import Loading from '../src/button/loading.svg';

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

const buttonIcons = {
  None: null,
  Loading: Loading
};

storiesOf('Buttons', module).add('Button', () => (
  <Button
    color={select('Colour', buttonColours, 'primary')}
    disabled={boolean('Disabled', false)}
    icon={select('Icon', buttonIcons, null)}
    loading={boolean('Loading', false)}
    size={select('Size', buttonSizes, 'md')}
    variant={select('Variant', buttonVariants, 'flat')}
  >
    {text('Label', 'Hello Button')}
  </Button>
));
