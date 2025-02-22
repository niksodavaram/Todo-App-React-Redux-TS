// src/components/__tests__/TodoList.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoList from './TodoList';
import { addTodo, toggleTodo } from '../../store/reducers';

const mockStore = configureStore([]);

describe('TodoList', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      todos: [
        { id: 1, text: 'Test Todo 1', completed: false },
        { id: 2, text: 'Test Todo 2', completed: true },
      ],
    });
    store.dispatch = jest.fn();
  });

  it('renders todo list with items', () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    );

    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
  });

  it('adds new todo when input is filled and add button is clicked', () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    );

    const input = screen.getByPlaceholderText('Enter a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(addTodo('New Todo'));
  });

  it('does not add empty todo', () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    );

    const addButton = screen.getByText('Add Todo');
    fireEvent.click(addButton);

    expect(store.dispatch).not.toHaveBeenCalled();
  });

  it('handles todo toggle', () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    );

    const firstTodoCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(firstTodoCheckbox);

    expect(store.dispatch).toHaveBeenCalledWith(toggleTodo(1));
  });
});
