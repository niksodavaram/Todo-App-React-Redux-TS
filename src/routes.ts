import React from 'react';
import TodoList from './components/TodoList';

interface Route {
  path: string;
  element: React.ReactNode;
}

const routes: Route[] = [
  {
    path: '/',
    element: <TodoList />,
  },
  // Add more routes as needed
];

export default routes;