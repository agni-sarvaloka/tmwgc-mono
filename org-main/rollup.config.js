import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

import css from 'rollup-plugin-import-css'
import tsx from 'rollup-plugin-tsx'

const packageJson = require('./package.json')

export default [
	{
		input: 'src/lib/layouts/hero.tsx',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			dts,
			css(),
			tsx(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
		],
	},
]
