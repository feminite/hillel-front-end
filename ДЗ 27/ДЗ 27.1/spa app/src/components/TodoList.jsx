import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue, isChecked: false }]);
    setInputValue('');
  };

  const toggleCheck = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>TODO List</h2>
      
      <form className="form js--form" onSubmit={addTodo}>
        <input 
          type="text" 
          className="form__input js--form__input" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Що потрібно зробити?"
        />
        <button type="submit" className="form__btn">Додати</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} className="todo-item ">
              <input 
                type="checkbox" 
                className="js--complete-btn"
                checked={todo.isChecked} 
                onChange={() => toggleCheck(todo.id)} 
              />
              <span className="todo-item__description" style={{ textDecoration: todo.isChecked ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
            <button className="todo-item__delete" onClick={() => deleteTodo(todo.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;