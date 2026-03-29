import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const TodoListFormik = () => {
  const [todos, setTodos] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  // validate
  const validate = (values) => {
    const errors = {};
    if (!values.todoText) {
      errors.todoText = "Поле порожнє";
    } else if (values.todoText.length < 5) {
      errors.todoText = "Мінімум 5 символів!";
    }
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    const newTodo = { id: Date.now(), text: values.todoText };
    setTodos([...todos, newTodo]);
    resetForm();
  };

  // select task
  const toggleSelection = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // delete task
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
  };

  return (
    <div className="todo-container">
      <h2>Todo List (Formik)</h2>
      
      <Formik
        initialValues={{ todoText: '' }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form className='form'>
          <Field 
            className="form__input"
            name="todoText" 
            placeholder="Що плануєте?" />
          <button type="submit" className="form__btn">
            Додати
          </button>
          <ErrorMessage 
            name="todoText" 
            component="div" 
            className="form__error"
          />
        </Form>
      </Formik>

      <ul>
        {todos.map(todo => {
          const isSelected = selectedIds.includes(todo.id);
          return (
            <li key={todo.id} className="todo-item">
              <div className="todo-item__description">
                <input 
                  type="checkbox" 
                  checked={isSelected} 
                  className="todo-item--checkbox"
                  onChange={() => toggleSelection(todo.id)} 
                  autoComplete='off'
                />
                <span style={{ 
                  textDecoration: isSelected ? 'line-through' : 'none',
                  color: isSelected ? '#aaa' : '#000'
                }}>
                  {todo.text}
                </span>
              </div>

              <button 
                onClick={() => deleteTodo(todo.id)} 
                className="todo-item__delete"
              >
                Видалити
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoListFormik;