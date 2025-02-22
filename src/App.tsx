// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import routes from './routes';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;