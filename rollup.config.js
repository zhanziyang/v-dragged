const json = require('rollup-plugin-json')
const resolve = require('rollup-plugin-node-resolve')
const commentjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const eslint = require('rollup-plugin-eslint')
const uglify = require('rollup-plugin-uglify')
const { version } = require('./package.json')

let production = /^production/.test(process.env.BUILD)
let min = process.env.BUILD === 'production-min'

module.exports = {
  entry: 'src/main.js',
  dest: `${production ? 'dist' : 'docs/src/VDragged'}/v-dragged${min ? '.min' : ''}.js`,
  format: 'umd',
  moduleName: 'VDragged',
  sourceMap: production ? false : 'inline',
  banner: `\
/*
 * v-dragged v${version}
 * https://github.com/zhanziyang/v-dragged
 * 
 * Copyright (c) 2017 zhanziyang
 * Released under the ISC license
 */
  `,
  plugins: [
    commentjs(),
    resolve(),
    json(),
    (production && eslint()),
    babel({
      presets: [
        [
          'es2015',
          {
            'modules': false
          }
        ]
      ],
      plugins: [
        'external-helpers'
      ],
      exclude: 'node_modules/**'
    }),
    (min && uglify({
      output: {
        comments: /zhanziyang/
      }
    }))
  ]
}