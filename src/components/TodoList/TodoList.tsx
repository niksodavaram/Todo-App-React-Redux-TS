// src/components/TodoList.tsx
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../../store/reducers';
import TodoItem from '../TotoItem/TodoItem';

const TodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          className="flex-1 p-2 border rounded"
        />
        <button onClick={handleAddTodo} className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Todo
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} onToggle={(id) => dispatch(toggleTodo(id))} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
