import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import BaseCard from '../src/base-card';
import PropertyCard from '../src/property-card';
import CardFooter from '../src/card-footer/index';

const cardShadows = {
  'Diffuse (Default)': 'diffuse',
  Standard: 'standard',
  Long: 'long-shadow',
  'Hard Long': 'hard-long',
  'Thick Shadow (Dark Backgrounds)': 'thick',
  'Hard Thick (Floating Object)': 'hard-thick'
};

const propertyCardVariants = {
  Sold: 'sold',
  Reserved: 'reserved',
  'For Sale': 'for-sale'
};

storiesOf('Cards', module)
  .add('Base Card', () => (
    <BaseCard shadow={select('Shadow', cardShadows, '')}>
      {text(
        'Label',
        'This is a base card 🎉 You generally would not use it directly.'
      )}
    </BaseCard>
  ))
  .add('Property Card', () => (
    <PropertyCard shadow={select('Shadow', cardShadows, 'diffuse')}>
      <CardFooter
        variant={select('Variant', propertyCardVariants, 'for-sale')}
        suburb={text('Suburb', 'Ferndale')}
      >
        <strong>Reserved.</strong>
      </CardFooter>
    </PropertyCard>
  ));
