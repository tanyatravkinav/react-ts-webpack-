const path = require("path");

module.exports = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  modulePaths: [
    '<rootDir>src/'
  ],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.svg': path.resolve(__dirname, "jestEmptyComponent.tsx"),
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};