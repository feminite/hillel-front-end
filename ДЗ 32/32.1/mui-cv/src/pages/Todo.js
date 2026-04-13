import React, { useState } from 'react';
import { 
  Typography, Paper, TextField, Button, List, ListItem, 
  ListItemText, IconButton, Checkbox, Box, Divider 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const Todo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: 'Вивчити React', completed: true },
    { id: 2, text: 'Зробити сайт на MUI', completed: false },
  ]);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 500, mx: 'auto', mt: 2 }}>
      <Typography variant="h5" gutterBottom align="center">
        TODO List
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
        <TextField 
          fullWidth 
          label="Що потрібно зробити?" 
          variant="outlined" 
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <Button variant="contained" onClick={addTodo} startIcon={<AddIcon />}>
          Додати
        </Button>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <List>
        {todos.length === 0 && (
          <Typography color="text.secondary" align="center">Список порожній...</Typography>
        )}
        {todos.map((todo) => (
          <ListItem 
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => deleteTodo(todo.id)} color="error">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <Checkbox 
              checked={todo.completed} 
              onChange={() => toggleTodo(todo.id)} 
            />
            <ListItemText 
              primary={todo.text} 
              sx={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'gray' : 'inherit' }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Todo;