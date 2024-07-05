import React, { useEffect } from 'react';
import './App.css';
import { useTodos } from './hooks/useTodos';

function App() {
  const { getTodos, todos } = useTodos();

  useEffect(() => getTodos, []);

  return (
    <div className="App">
      <h1>Todoリスト</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>
            {todo.title}<br />
            {todo.is_completed ? "完了" : "未着手"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
