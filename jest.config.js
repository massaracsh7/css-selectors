// jest.config.js
/** @type {import('<rootDir>/node_modules/ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  testEnvironment: "jest-environment-jsdom",
  roots: ['<rootDir>/src'],
  testMatch: ['**/tests/**/*.+(ts|js)'],
  transform: {
    '^.+\\.ts?$': '<rootDir>/node_modules/ts-jest',
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
    '^.+\\.js?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/fileTransformer.js',
  },
  modulePaths: [
    "<rootDir/src>"
  ],
  "resetMocks": false,
  "setupFiles": ["jest-localstorage-mock"]
}
