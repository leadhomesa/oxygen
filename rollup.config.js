import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import reactSvg from 'rollup-plugin-react-svg';

import pkg from './package.json';

const externalDeps = [
  'styled-components',
  'react',
  'react-dom',
  'prop-types',
  'styled-icons'
];

export default {
  input: 'src/index.js',
  external: externalDeps,
  plugins: [
    reactSvg(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      dedupe: externalDeps
    })
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ]
};
