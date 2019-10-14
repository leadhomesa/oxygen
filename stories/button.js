import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Button, LinkButton } from '../src';

import { FiveHundredPx } from 'styled-icons/boxicons-logos/FiveHundredPx';

const buttonSizes = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg'
};

const buttonColours = {
  Primary: 'primary',
  Secondary: 'secondary',
  Warning: 'warning',
  Success: 'success'
};

const buttonTargets = {
  Self: '_self',
  Parent: '_parent',
  Blank: '_blank',
  Top: '_top'
};

const buttonVariants = {
  Flat: 'flat',
  Outlined: 'outlined',
  Text: 'text'
};

storiesOf('Buttons', module)
  .add('Button', () => (
    <Button
      color={select('Colour', buttonColours, 'primary')}
      disabled={boolean('Disabled', false)}
      loading={boolean('Loading', false)}
      onClick={() => {
        alert('You would handle the onClick correctly, yeah?');
      }}
      size={select('Size', buttonSizes, 'md')}
      variant={select('Variant', buttonVariants, 'flat')}
      style={{ width: 400 }}
    >
      {text('Label', 'Hello Button')}
      <FiveHundredPx />
    </Button>
  ))
  .add('Link Button', () => (
    <LinkButton
      color={select('Colour', buttonColours, 'primary')}
      disabled={boolean('Disabled', false)}
      download={boolean('Download', false)}
      href={text('href', 'https://www.leadhome.co.za')}
      loading={boolean('Loading', false)}
      size={select('Size', buttonSizes, 'md')}
      target={select('Target', buttonTargets, '_self')}
      variant={select('Variant', buttonVariants, 'flat')}
    >
      {text('Label', 'Hello Button')}
    </LinkButton>
  ));
