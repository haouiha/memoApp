import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ['next/typescript', 'prettier', 'next/core-web-vitals'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'import/no-anonymous-default-export': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
		},
	}),
];

export default eslintConfig;
