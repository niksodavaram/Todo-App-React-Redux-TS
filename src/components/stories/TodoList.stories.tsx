// src/components/TodoList.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import TodoList from '../TodoList';
import todosReducer from '../../store/reducers';
import React from 'react';
import type { RootState } from '../../store/types'; // Adjust the import path

// Create a mock store creator for better reusability
const createMockStore = (initialTodos: RootState['todos'] = []) => 
  configureStore({
    reducer: {
      todos: todosReducer,
    },
    preloadedState: {
      todos: initialTodos,
    },
  });

// Default mock store
const mockStore = createMockStore([
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Learn Redux', completed: true },
  { id: 3, text: 'Learn Storybook', completed: false },
]);

// Wrapper component with proper typing
const WithStore = ({ children, store = mockStore }: {
  children: React.ReactNode;
  store?: ReturnType<typeof createMockStore>;
}) => (
  <Provider store={store}>
    {children}
  </Provider>
);

const meta = {
  title: 'Components/TodoList',
  component: TodoList,
  decorators: [(Story) => (
    <WithStore>
      <Story />
    </WithStore>
  )],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A Redux-connected list of todo items that displays the current todos from the store.',
      },
    },
    controls: { hideNoControlsWarning: true },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TodoList>;

export default meta;