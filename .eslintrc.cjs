/* eslint-env node */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: [
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'eslint:recommended',
				'plugin:react/recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:react/jsx-runtime',
				'plugin:react-hooks/recommended',
				'prettier/@typescript-eslint',
				'plugin:prettier/recommended',
			],
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json'],
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'import/prefer-default-export': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/consistent-type-imports': 'off',
	},
	root: true,
};
