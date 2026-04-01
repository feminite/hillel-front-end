import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, clearTodos, fetchCharacter } from './store';

function App() {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleFetchSwapi = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    dispatch(fetchCharacter(randomId));
  };

  return (
    <div className="container">
      <h2>TodoList & SWAPI</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input 
          value={input} 
          className="form-input"
          onChange={(e) => setInput(e.target.value)} 
        />
        <button
          type="submit" 
          className="form-btn"
          onClick={() => { dispatch(addTodo(input)); setInput(''); }}
        >Додати своє</button>
        <button 
          className="btn-swap"
          onClick={handleFetchSwapi}
        >Завантажити з SWAPI</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>

      <footer className="footer">
        <p>Кількість завдань: {todos.length}</p>
        <button 
          className="btn-clear"
          onClick={() => dispatch(clearTodos())}
        >
          ОЧИСТИТИ ВСЕ
        </button>
      </footer>
    </div>
  );
}

export default App;
