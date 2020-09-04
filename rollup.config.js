import babel from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'

const year = new Date().getFullYear()

const banner = (formBuilderName) => `/*!
 * Client Side Validations Yup JS (${formBuilderName}) - v${pkg.version} (https://github.com/DavyJonesLocker/client_side_validations-yup)
 * Copyright (c) ${year} Geremia Taglialatela
 * Licensed under MIT (https://opensource.org/licenses/mit-license.php)
 */
`

const umdModuleConfig = (inputFileName, outputModuleFileName, outputVendorFileName, formBuilderName) => ({
  input: `src/${inputFileName}`,
  external: ['jquery', '@client-side-validations/client-side-validations'],
  output: [
    {
      file: outputModuleFileName,
      banner: banner(formBuilderName),
      format: 'umd',
      globals: {
        jquery: '$',
        '@client-side-validations/client-side-validations': 'ClientSideValidations'
      }
    }
  ],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    copy({
      targets: [
        { src: outputModuleFileName, dest: 'vendor/assets/javascripts/', rename: outputVendorFileName }
      ],
      hook: 'writeBundle',
      verbose: true
    })
  ]
})

const esModuleConfig = (inputFileName, outputModuleFileName, formBuilderName) => ({
  input: `src/${inputFileName}`,
  external: ['jquery', '@client-side-validations/client-side-validations'],
  output: [
    {
      file: outputModuleFileName,
      banner: banner(formBuilderName),
      format: 'es'
    }
  ],
  plugins: [
    babel({ babelHelpers: 'bundled' })
  ]
})

export default [
  umdModuleConfig('main.js', pkg.main, 'rails.validations.yup.js', 'Default'),
  esModuleConfig('main.js', pkg.module, 'Default')
]
