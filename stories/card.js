import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import BaseCard from '../src/base-card';

const cardShadows = {
  'Diffuse (Default)': 'diffuse',
  Standard: 'standard',
  Long: 'long-shadow',
  'Hard Long': 'hard-long',
  'Thick Shadow (Dark Backgrounds)': 'thick',
  'Hard Thick (Floating Object)': 'hard-thick'
};

storiesOf('Cards', module).add('Base Card', () => (
  <BaseCard shadow={select('Shadow', cardShadows, '')}>
    {text(
      'Label',
      'This is a base card 🎉 You generally would not use it directly.'
    )}
  </BaseCard>
));
