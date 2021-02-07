module.exports = {
    testEnvironment: 'node',
    reporters: [
        'default', 'jest-html-reporters',
    ],
    moduleFileExtensions: ['js', 'json'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/specs/*.spec.*'],
    globals: {
        testTimeout: 50000,
    },
    verbose: true,
};
