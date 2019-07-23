import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Input from '../src/input';

import { FormFieldLabel } from '../src/form';
import InlineForm from '../src/inline-form/index';
import { Button } from '../src';

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
  ))
  .add('Inline Form', () => (
    <InlineForm>
      <Input
        input={{ value: '', onChange: () => console.log('input') }}
        placeholder='Placeholder'
      />
      <Button>Search</Button>
    </InlineForm>
  ));
