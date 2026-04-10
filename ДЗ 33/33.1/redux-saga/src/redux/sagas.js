import { put, takeEvery, all, select } from 'redux-saga/effects';
import * as types from './actions';

const getTodos = (state) => state.items;

function* saveToLocalStorage() {
  const todos = yield select(getTodos);
  localStorage.setItem('my_todos', JSON.stringify(todos));
}

function* fetchTodosWorker() {
  const data = localStorage.getItem('my_todos');
  const todos = data ? JSON.parse(data) : [];
  yield put({ type: types.FETCH_SUCCESS, payload: todos });
}

function* addTodoWorker(action) {
  const newTodo = { id: Date.now(), text: action.payload, completed: false };
  yield put({ type: types.ADD_SUCCESS, payload: newTodo });
  yield saveToLocalStorage();
}

function* deleteTodoWorker(action) {
  yield put({ type: types.DELETE_SUCCESS, payload: action.payload });
  yield saveToLocalStorage();
}

function* toggleTodoWorker(action) {
  yield put({ type: types.TOGGLE_SUCCESS, payload: action.payload });
  yield saveToLocalStorage();
}

function* editTodoWorker(action) {
  yield put({ type: types.EDIT_SUCCESS, payload: action.payload });
  yield saveToLocalStorage();
}

function* clearTodosWorker() {
  yield put({ type: types.CLEAR_SUCCESS });
  localStorage.removeItem('my_todos');
}

export function* rootSaga() {
  yield all([
    takeEvery(types.FETCH_TODOS_REQUEST, fetchTodosWorker),
    takeEvery(types.ADD_TODO_REQUEST, addTodoWorker),
    takeEvery(types.DELETE_TODO_REQUEST, deleteTodoWorker),
    takeEvery(types.TOGGLE_TODO_REQUEST, toggleTodoWorker),
    takeEvery(types.EDIT_TODO_REQUEST, editTodoWorker),
    takeEvery(types.CLEAR_TODOS_REQUEST, clearTodosWorker),
  ]);
}