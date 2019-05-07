import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../src/footer';

storiesOf('Footer', module)
  .add('Footer with text', () => <Footer>© Leadhome Pty Ltd </Footer>)
  .add('Footer with a link', () => (
    <Footer>
      <React.Fragment>
        <a href='#'>Link!</a>
      </React.Fragment>
    </Footer>
  ));
