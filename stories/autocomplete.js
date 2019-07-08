import React from 'react';
import { storiesOf } from '@storybook/react';

import AutoComplete from '../src/autocomplete';

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
      values = val;
    };
    return (
      <>
        <FormFieldLabel>Form field label</FormFieldLabel>
        <AutoComplete
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
      values = val;
    };
    return (
      <>
        <FormFieldLabel>Form field label</FormFieldLabel>
        <AutoComplete
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
