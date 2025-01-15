# dp-node-challenges

[![TypeScript version][ts-badge]][typescript-5-7]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

Some challenges for learning getting started with Node.js and TypeScript. As well as a guide for setting up a project. This project is licensed under the [Apache v2][license] license. 

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

## Available Scripts

- `clean` - remove coverage data, cache and transpiled files,
- `prebuild` - lint source files and tests before building,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `prettier` - reformat files,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests
- `test:coverage` - run test and print out test coverage

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-5.7-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js-22-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v22.x/docs/api/
[gha-badge]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-5-7]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-7/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[gh-actions]: https://github.com/features/actions
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[sindresorhus-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[nodejs-esm]: https://nodejs.org/docs/latest-v16.x/api/esm.html
[ts47-esm]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#esm-nodejs
[editorconfig]: https://editorconfig.org
[vitest]: https://vitest.dev
