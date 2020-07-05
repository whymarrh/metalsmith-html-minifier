module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 93,
      statements: 93,
    },
  },
  testEnvironment: 'node',
  testRegex: [
    '\\.test\\.js$',
  ],
  testTimeout: 5000,
};
