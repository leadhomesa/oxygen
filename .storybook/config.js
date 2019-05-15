import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import GlobalStyle from '../src/global-style';
import theme from './theme';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.js$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

const withGlobal = (cb) => (
  <React.Fragment>
    <GlobalStyle />
    {cb()}
  </React.Fragment>
);

addParameters({
  options: {
    theme: theme,
  },
});

addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator(withGlobal);
configure(loadStories, module);
