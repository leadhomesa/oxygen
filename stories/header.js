import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import Header from '../src/header';
import { ReactComponent as BugLogo } from '../assets/bug.svg';

const logos = { undefined, BugLogo };
const stories = storiesOf('Header', module);
stories.addDecorator(StoryRouter());
stories.add('Default', () => <Header />);

stories.add('WithChildren', () => {
  return (
    <Header>
      {text('child1', '1st child ')}
      {text('child2', '2nd child')}
    </Header>
  );
});

stories.add('WithCustomLogo', () => {
  const logo = select('Logo', Object.keys(logos), 'BugLogo');
  return <Header logo={logos[logo]} />;
});

stories.add('WithLogoLink', () => {
  const link = text('LogoLink', 'https://leadhome.co.za');
  return <Header logoLink={link} />;
});
