import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderWithBreadcrumbs from '../src/header-with-breadcrumbs';

const crumbs = ['Address', 'Time', 'Details'];

storiesOf('HeaderWithBreadcrumbs', module).add('Default', () => {
  return <HeaderWithBreadcrumbs crumbs={crumbs} />;
});

storiesOf('HeaderWithBreadcrumbs', module).add('WithActiveIndex', () => {
  return <HeaderWithBreadcrumbs crumbs={crumbs} activeIndex={1} />;
});
