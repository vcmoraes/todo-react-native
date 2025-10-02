module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^react-native$': 'react-native-web',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/App.js',
    '!src/**/components/**',
    '!src/**/styles.js',
    '!src/**/theme/**',
    '!src/**/styles/**',
    '!src/**/providers/**',
    '!src/**/constants/**',
    '!src/**/index.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
};
