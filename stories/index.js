import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../src/input';
import Dropdown from '../src/dropdown';
import Header from '../src/header';
import Footer from '../src/footer';

import { FormFieldLabel } from '../src/form';

import { ReactComponent as LeadhomeLogo } from '../assets/leadhome-logo.svg';

storiesOf('Input', module)
  .add('Default', () => (
    <>
      <FormFieldLabel>Form field label</FormFieldLabel>
      <Input input={{ value: 'hello', onChange: () => console.log('input') }} />
    </>
  ))
  .add('Placeholder', () => (
    <Input
      input={{ value: '', onChange: () => console.log('input') }}
      placeholder='Placeholder'
    />
  ))
  .add('Error', () => (
    <Input
      input={{ value: '', onChange: () => console.log('input') }}
      meta={{ error: 'error', touched: true }}
    />
  ))
  .add('Disabled', () => (
    <Input
      input={{ value: '', onChange: () => console.log('input') }}
      placeholder='Disabled'
      disabled
    />
  ));

storiesOf('Dropdown', module).add('Default Dropdown', () => (
  <Dropdown
    input={{ value: '', onChange: () => console.log('dropdown') }}
    options={{ yes: 'Yes', no: 'No' }}
  />
));

storiesOf('Header', module)
  .add('Header with LH logo', () => <Header />)
  .add('Header passed in LH logo', () => <Header logo={LeadhomeLogo} />)
  .add('Header with children', () => (
    <Header>
      <a href='#' style={{ color: 'white' }}>
        Child
      </a>
      <a href='#' style={{ color: 'white' }}>
        Child
      </a>
      <a href='#' style={{ color: 'white' }}>
        Child
      </a>
      <a href='#' style={{ color: 'white' }}>
        Child
      </a>
      <a href='#' style={{ color: 'white' }}>
        Child
      </a>
    </Header>
  ));

storiesOf('Footer', module)
  .add('Footer with text', () => <Footer>© Leadhome Pty Ltd </Footer>)
  .add('Footer with a link', () => (
    <Footer>
      <React.Fragment>
        <a href='#'>Link!</a>
      </React.Fragment>
    </Footer>
  ));
