import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  addTodo, deleteTodo, toggleTodo, 
  editTodo, clearTodos, fetchTodos 
} from './redux/actions';

function App() {
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  
  const { items: todos, loading } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    dispatch(editTodo(id, editText));
    setEditingId(null);
  };

  return (
    <div className='container'>
      <h2>Todo List</h2>
      <div className="form-container">
        <input 
          value={text} 
          className="form-input"
          onChange={(e) => setText(e.target.value)} 
          placeholder="Що потрібно зробити?"
        />
        <button className="form-btn" onClick={handleAdd}>Додати</button>
        <button className="btn-delete" onClick={() => dispatch(clearTodos())}>Очистити все</button>
      </div>


        {loading ? (
          <p>⏳ Завантаження ваших справ...</p>
        ) : (
          <>
            <ul className="todo-list">
              {todos.map(todo => (
                <li key={todo.id}>
                  <div className="todo-item">
                    {editingId === todo.id ? (
                      <>
                        <input 
                          value={editText} 
                          className="form-input"
                          onChange={(e) => setEditText(e.target.value)} 
                        />
                        <button className="form-btn" onClick={() => saveEdit(todo.id)}>Зберегти</button>
                      </>
                    ) : (
                      <>
                        <span 
                          onClick={() => dispatch(toggleTodo(todo.id))}
                          className="todo-text"
                          style={{ 
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer'
                          }}
                        >
                          {todo.text}
                        </span>
                        <button className='form-btn' onClick={() => startEdit(todo)}>Редагувати</button>
                        <button className='btn-delete' onClick={() => dispatch(deleteTodo(todo.id))}>Вилучити</button>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
    </div>
  );
}

export default App;