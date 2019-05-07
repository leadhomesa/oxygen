import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Input from '../src/input';
import Dropdown from '../src/dropdown';

import { FormFieldLabel } from '../src/form';

storiesOf('Forms', module)
  .add('Input', () => (
    <>
      <FormFieldLabel>Form field label</FormFieldLabel>
      <Input
        input={{ value: '', onChange: () => action('input') }}
        disabled={boolean('Disabled', false)}
      />
    </>
  ))
  .add('Placeholder', () => (
    <Input
      input={{ value: '', onChange: () => console.log('input') }}
      placeholder='Placeholder'
    />
  ))
  .add('Error', () => (
    <Input
      input={{ value: '', onChange: () => console.log('input') }}
      meta={{ error: 'error', touched: true }}
    />
  ))
  .add('Disabled', () => (
    <Input
      input={{ value: '', onChange: () => console.log('input') }}
      placeholder='Disabled'
      disabled
    />
  ));
