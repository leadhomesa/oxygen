import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import Card from '../src/card';

const cardShadows = {
  'Diffuse (Default)': 'diffuse',
  Standard: 'standard',
  Long: 'long-shadow',
  'Hard Long': 'hard-long',
  'Thick Shadow (Dark Backgrounds)': 'thick',
  'Hard Thick (Floating Object)': 'hard-thick'
};

storiesOf('Cards', module).add('Card', () => (
  <Card shadow={select('Shadow', cardShadows, 'diffuse')}>
    {text('Label', 'This is a card 🎉')}
  </Card>
));
