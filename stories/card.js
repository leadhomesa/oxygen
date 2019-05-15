import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import BaseCard from '../src/base-card';
import PropertyCard from '../src/property-card';
import CardFooter from '../src/card-footer/index';
import CardBody from '../src/card-body/index';
import Pill from '../src/pill';
import colors from '../src/colors';
import styled from 'styled-components';

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

const StyledPill = styled(Pill)`
  background: ${colors.darkCoral};
  color: ${colors.white};
`;

const Meta = () => <StyledPill>Under Offer</StyledPill>;

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
      <CardBody
        image='https://s3-eu-west-1.amazonaws.com/leadhome-listing-photos/a25a6edf-2dd0-4538-99ef-8f79267d8932-md.jpg'
        meta={<Meta />}
        price='R599,000,00'
        description='This is a stunning home with beautiful views.'
      />
      <CardFooter
        variant={select('Variant', propertyCardVariants, 'for-sale')}
        suburb={text('Suburb', 'Ferndale')}
      >
        <strong>Reserved.</strong>
      </CardFooter>
    </PropertyCard>
  ));
