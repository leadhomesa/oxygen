import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import svg from 'rollup-plugin-svg';

import pkg from './package.json'

export default {
  input: 'src/index.js',
  external: ['styled-components'],
  globals: { 'styled-components': 'styled' },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve({
      jsnext: true
    }),
    commonjs(),
    svg()
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
}
