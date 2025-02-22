// src/components/Test.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

interface TestProps {
  label: string;
}

const Test: React.FC<TestProps> = ({ label }) => (
  <div className="test">{label}</div>
);

const meta = {
  title: 'Test',
  component: Test,
  args: {
    label: 'Test Component',
  },
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof Test>;

export const Default: Story = {};