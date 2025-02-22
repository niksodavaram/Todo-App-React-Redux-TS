import type { TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  async preRender(page) {
    // Add any setup before stories render
  },
  async postRender(page) {
    // Add any checks after stories render
  },
};

export default config;