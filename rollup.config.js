import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import reactSvg from 'rollup-plugin-react-svg';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  external: ['styled-components', 'react', 'react-dom', 'prop-types'],
  globals: { 'styled-components': 'styled' },
  plugins: [
    reactSvg(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true
    }),
    commonjs({
      include: /node_modules/
    })
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    },
    {
      file: pkg.browser,
      name: 'realib',
      format: 'umd'
    }
  ]
};
