export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_SUCCESS = 'ADD_SUCCESS';

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';

export const TOGGLE_TODO_REQUEST = 'TOGGLE_TODO_REQUEST';
export const TOGGLE_SUCCESS = 'TOGGLE_SUCCESS';

export const EDIT_TODO_REQUEST = 'EDIT_TODO_REQUEST';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';

export const CLEAR_TODOS_REQUEST = 'CLEAR_TODOS_REQUEST';
export const CLEAR_SUCCESS = 'CLEAR_SUCCESS';


export const addTodo = (text) => ({ type: ADD_TODO_REQUEST, payload: text });
export const deleteTodo = (id) => ({ type: DELETE_TODO_REQUEST, payload: id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO_REQUEST, payload: id });
export const editTodo = (id, text) => ({ type: EDIT_TODO_REQUEST, payload: { id, text } });
export const clearTodos = () => ({ type: CLEAR_TODOS_REQUEST });
export const fetchTodos = () => ({ type: FETCH_TODOS_REQUEST });