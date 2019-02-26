import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import reactSvg from "rollup-plugin-react-svg";

import pkg from './package.json'

export default {
  input: 'src/index.js',
  external: ['styled-components'],
  globals: { 'styled-components': 'styled' },
  plugins: [
    reactSvg(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true
    }),
    commonjs()
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
