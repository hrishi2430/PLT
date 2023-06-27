module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
  ],
  setupFiles: ['<rootDir>/node_modules/react-native/jest/setup.js'],
  testEnvironment: 'node',
};
