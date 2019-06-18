import React from 'react';
import { storiesOf } from '@storybook/react';

import Autocomplete from '../src/autocomplete';

import { FormFieldLabel } from '../src/form';

const emailSuggestions = [
  'test@leadhome.co.za',
  'jameel@gmail.com',
  'dev@yahoo.com'
];

storiesOf('Autocomplete', module)
  .add('Default', () => {
    let values = ['hello'];
    const onChange = val => {
      console.log('changing: ', val);
      values = val;
    };
    return (
      <>
        <FormFieldLabel>Form field label</FormFieldLabel>
        <Autocomplete
          input={{
            value: values,
            onChange
          }}
          suggestions={emailSuggestions}
        />
      </>
    );
  })
  .add('allowCustomInput', () => {
    let values = ['hello'];
    const onChange = val => {
      console.log('changing: ', val);
      values = val;
    };
    return (
      <>
        <FormFieldLabel>Form field label</FormFieldLabel>
        <Autocomplete
          allowCustomInput
          input={{
            value: values,
            onChange
          }}
          suggestions={emailSuggestions}
        />
      </>
    );
  });
