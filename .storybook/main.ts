import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-onboarding"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  docs: {
    autodocs: true
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src')
        }
      }
    });
  },
  staticDirs: ['../public'],
  features: {
    // Modern supported feature flags for Storybook 8
    argTypeTargetsV7: true,
    legacyDecoratorFileOrder: false,
    disallowImplicitActionsInRenderV8: true
  }
};

export default config;   