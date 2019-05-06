import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/button';
import { boolean, select } from '@storybook/addon-knobs';

const buttonSizes = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg'
};

storiesOf('Buttons', module).add('Button', () => (
  <Button
    disabled={boolean('Disabled', false)}
    size={select('Size', buttonSizes, 'md')}
  >
    Hello Button
  </Button>
));
