import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import Header from '../src/header';
import { ReactComponent as LeadhomeLogo } from '../assets/leadhome-logo.svg';
import { ReactComponent as BugLogo } from '../assets/bug.svg';

const logos = { undefined, BugLogo, LeadhomeLogo };

storiesOf('Header', module).add('Header', () => {
  const logo = select('Logo', Object.keys(logos), 'BugLogo');

  console.log(logo);

  return (
    <Header logo={logos[logo]}>
      {text('child1', '1st child ')}
      {text('child2', '2nd child')}
    </Header>
  );
});
