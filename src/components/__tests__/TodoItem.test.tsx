// src/components/__tests__/TodoItem.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../TodoItem';

describe('TodoItem', () => {
  const mockTodo = {
    id: 1,
    text: 'Test Todo',
    completed: false,
  };

  const mockOnToggle = jest.fn();

  it('renders todo item correctly', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} />);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('renders completed todo with checked checkbox', () => {
    const completedTodo = { ...mockTodo, completed: true };
    render(<TodoItem todo={completedTodo} onToggle={mockOnToggle} />);

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('calls onToggle when checkbox is clicked', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledWith(mockTodo.id);
  });

  it('applies completed style when todo is completed', () => {
    const completedTodo = { ...mockTodo, completed: true };
    render(<TodoItem todo={completedTodo} onToggle={mockOnToggle} />);

    const todoText = screen.getByText('Test Todo');
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });
});