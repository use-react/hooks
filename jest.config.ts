import type { Config } from 'jest';

const projectsCommons = {
  preset: 'ts-jest',
  resolver: 'ts-jest-resolver',
};

const cfg: Config = {
  preset: 'ts-jest',
  resolver: 'ts-jest-resolver',
  projects: [
    {
      ...projectsCommons,
      displayName: 'dom',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/src/**/__tests__/dom.[jt]s?(x)'],
      setupFiles: ['./src/__tests__/setup.ts'],
    },

    {
      ...projectsCommons,
      displayName: 'ssr',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/**/__tests__/ssr.[jt]s?(x)'],
    },

    // needed for output bundle testing
    {
      ...projectsCommons,
      displayName: 'dom-package',
      transformIgnorePatterns: [],
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/src/**/__tests__/dom.[jt]s?(x)'],
      setupFiles: ['./src/__tests__/setup.ts'],
      moduleNameMapper: {
        '^../..$': '<rootDir>',
      },
    },
  ],
  collectCoverage: false,
  coverageDirectory: './coverage',
  collectCoverageFrom: ['./src/**/*.{ts,js,tsx,jsx}', '!**/__tests__/**', '!**/__docs__/**'],
};

// eslint-disable-next-line import/no-default-export
export default cfg;
