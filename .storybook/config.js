import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import * as React from 'react';
import GlobalStyle from '../src/global-style';

const req = require.context('../stories', true, /\.js$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

const withGlobal = (cb) => (
  <React.Fragment>
    <GlobalStyle />
    {cb()}
  </React.Fragment>
);

addDecorator(withInfo);
addDecorator(withGlobal);
configure(loadStories, module);