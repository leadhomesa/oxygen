import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import HeaderWithBreadcrumbs from '../src/header-with-breadcrumbs';

const crumbs = ['Address', 'Time', 'Details'];

storiesOf('HeaderWithBreadcrumbs', module).add('Default', () => {
  return <HeaderWithBreadcrumbs crumbs={crumbs} />;
});

storiesOf('HeaderWithBreadcrumbs', module).add('WithActiveIndex', () => (
  <HeaderWithBreadcrumbs crumbs={crumbs} activeIndex={number('activeIndex')} />
));
