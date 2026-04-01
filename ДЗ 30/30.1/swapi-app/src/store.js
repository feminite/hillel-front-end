import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacter = createAsyncThunk('todos/fetchCharacter', async (id) => {
  const response = await axios.get(`https://swapi.dev{id}/`);
  return response.data.name;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => { state.push(action.payload); },
    clearTodos: () => []
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacter.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const { addTodo, clearTodos } = todoSlice.actions;
export const store = configureStore({ reducer: { todos: todoSlice.reducer } });