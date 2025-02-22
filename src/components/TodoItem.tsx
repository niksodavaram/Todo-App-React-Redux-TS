import React from 'react';
import { Todo } from '../store/reducers';

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
}

function TodoItem({ todo, onToggle }: TodoItemProps): JSX.Element {
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={onToggle}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;