// src/routes.ts
import React from 'react';
import TodoList from './components/TodoList/TodoList';

interface Route {
  path: string;
  element: React.ReactNode;
}

const routes: Route[] = [
  {
    path: '/',
    element: <TodoList />,
  },
];

export default routes;
