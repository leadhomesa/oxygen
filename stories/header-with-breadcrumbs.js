import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import HeaderWithBreadcrumbs from '../src/header-with-breadcrumbs';

const crumbs = ['Address', 'Time', 'Details'];

const stories = storiesOf('HeaderWithBreadcrumbs', module);
stories.addDecorator(StoryRouter());
stories.add('Default', () => <HeaderWithBreadcrumbs crumbs={crumbs} />);
stories.add('WithActiveIndex', () => (
  <HeaderWithBreadcrumbs crumbs={crumbs} activeIndex={number('activeIndex')} />
));
