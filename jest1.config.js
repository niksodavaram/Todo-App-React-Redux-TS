module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',

    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testMatch: [
        '../src/components/**/*.test.{ts,tsx}',
        '../src/**/__tests__/**/*.{ts,tsx}'
      ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'json', 'html'],
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/**/*.stories.{js,jsx,ts,tsx}',
      '!src/**/*.d.ts',
      '!src/main.tsx',
      '!src/vite-env.d.ts',
    ],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },

    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },

  };