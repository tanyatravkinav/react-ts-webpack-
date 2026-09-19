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
};