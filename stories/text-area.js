import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from '../src/text-area';

storiesOf('TextArea', module)
  .add('TextArea', () => {
    return <TextArea placeholder='Hello'>Hello am text area</TextArea>;
  })
  .add('TextArea placeholder text', () => {
    return <TextArea placeholder='Hello' />;
  })
  .add('TextArea disabled', () => {
    return <TextArea disabled placeholder='Disabled' />;
  })
  .add('TextArea read only', () => {
    return <TextArea readOnly placeholder='Read Only' />;
  });
