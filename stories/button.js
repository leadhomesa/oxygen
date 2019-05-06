import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Button,
  ButtonPrimary,
  ButtonSecondary,
  ButtonWhite,
  ButtonPill,
  ButtonWarning,
  ButtonOcean,
  ButtonDark
} from '../src/button';

storiesOf('Buttons', module)
  .add('Button', () => <Button>Hello Button</Button>)
  .add('Primary Button', () => <ButtonPrimary>Hello Button</ButtonPrimary>)
  .add('Secondary Button', () => (
    <ButtonSecondary>Hello Button</ButtonSecondary>
  ))
  .add('White Button', () => <ButtonWhite>Hello Button</ButtonWhite>)
  .add('Warning Button', () => <ButtonWarning>Hello Button</ButtonWarning>)
  .add('Success Button', () => <ButtonOcean>Hello Button</ButtonOcean>)
  .add('Dark Button', () => <ButtonDark>Hello Button</ButtonDark>)
  .add('Pill Button', () => <ButtonPill>Hello Button</ButtonPill>)
  .add('Large Button', () => <ButtonPrimary lg>Hello Button</ButtonPrimary>)
  .add('Medium Button', () => <ButtonPrimary>Hello Button</ButtonPrimary>)
  .add('Small Button', () => <ButtonPrimary sm>Hello Button</ButtonPrimary>)
  .add('Disabled Button', () => (
    <ButtonPrimary disabled>Hello Button</ButtonPrimary>
  ));
