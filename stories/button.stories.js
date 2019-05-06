import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/button';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Buttons', module).add('Button', () => (
  <Button disabled={boolean('Disabled', false)}>Hello Button</Button>
));
