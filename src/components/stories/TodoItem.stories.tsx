// src/components/TodoItem.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'; // Add this import
import TodoItem from '../TodoItem';

const meta: Meta<typeof TodoItem> = {
  title: 'Components/TodoItem',
  component: TodoItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // Add argTypes to provide better documentation
  argTypes: {
    todo: {
      description: 'The todo item data',
      control: 'object'
    },
    onToggle: {
      description: 'Callback function when todo is toggled',
      control: { type: null }
    }
  }
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Incomplete: Story = {
  args: {
    todo: {
      id: 1,
      text: 'Buy groceries',
      completed: false,
    },
    onToggle: fn((id) => console.log('Toggled todo:', id)), // Use fn() instead
  },
};

export const Completed: Story = {
  args: {
    todo: {
      id: 2,
      text: 'Complete Storybook setup',
      completed: true,
    },
    onToggle: fn((id) => console.log('Toggled todo:', id)), // Use fn() instead
  },
};

export const LongText: Story = {
  args: {
    todo: {
      id: 3,
      text: 'This is a very long todo item text that should wrap properly and still look good in the user interface while maintaining proper alignment with the checkbox',
      completed: false,
    },
    onToggle: fn((id) => console.log('Toggled todo:', id)), // Use fn() instead
  },
};