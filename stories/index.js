import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../src/input'
import Dropdown from '../src/dropdown'

import { FormFieldLabel } from '../src/form'

storiesOf('Input', module)
  .add('Default', () => (
    <>
      <FormFieldLabel>Form field label</FormFieldLabel>
      <Input input={{ value: 'hello', onChange: () => console.log('input')}} />
    </>
  ))
  .add('Placeholder', () => (
    <Input input={{ value: '', onChange: () => console.log('input')}} placeholder='Placeholder' />
  ))
  .add('Error', () => (
    <Input input={{ value: '', onChange: () => console.log('input')}} meta={{ error: 'error', touched: true }} />
  ))
  .add('Disabled', () => (
    <Input input={{ value: '', onChange: () => console.log('input')}} placeholder='Disabled' disabled />
  ))


storiesOf('Dropdown', module)
  .add('Default Dropdown', () => (
    <Dropdown input={{ value: '', onChange: () => console.log('dropdown')}} options={{ yes: 'Yes', no: 'No'}} />
  ))
