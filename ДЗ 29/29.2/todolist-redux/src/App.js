import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './store';

export default function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          className="form-input"
          placeholder="Назва завдання..."
        />
        <button type="submit" className="form-btn">Додати</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <footer className="footer">
        Кількість завдань: {todos.length}
      </footer>
    </div>
  );
}