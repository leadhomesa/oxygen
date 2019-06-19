import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Tag from '../src/tag';

storiesOf('Tag', module)
  .add('Tag', () => {
    return (
      <Tag onRemove={() => console.log('remove tag')}>
        {text('Label', 'hello!')}
      </Tag>
    );
  })
  .add('Slim', () => {
    return (
      <Tag slim onRemove={() => console.log('remove tag')}>
        {text('Label', 'hello!')}
      </Tag>
    );
  })
  .add('Dark', () => {
    return (
      <Tag dark onRemove={() => console.log('remove tag')}>
        {text('Label', 'hello!')}
      </Tag>
    );
  });
