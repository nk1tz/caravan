const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  env: {
    browser: true,
    jasmine: true,
    node: true,
    jest: true,
  },
  plugins: ['prettier', 'import', 'react', '@typescript-eslint'],
  extends: [
    'prettier',
    'plugin:testing-library/recommended',
    'plugin:jest-dom/recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'import/no-unresolved': 'error',
    'prettier/prettier': 'error',
    quotes: 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-bind': 'off',
    'react/forbid-prop-types': 'off',
  },
  settings: {
    'import/core-modules': ['test-utils'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true,
        project,
      },
    },
    react: {
      version: "detect"
    }
  }
}
