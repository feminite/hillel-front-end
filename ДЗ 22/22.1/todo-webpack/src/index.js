import './style.scss';

const state = {
  todos: []
};

const input = document.querySelector('#todo-input');
const btn = document.querySelector('#add-btn');
const list = document.querySelector('#todo-list');

function render() {
  list.innerHTML = state.todos
    .map((todo, index) => `
      <li class="${todo.completed ? 'done' : ''}">
        <span onclick="window.toggleTodo(${index})">${todo.text}</span>
        <button class="form-btn" onclick="window.deleteTodo(${index})">Видалити</button>
      </li>
    `)
    .join('');
}

window.addTodo = () => {
  if (input.value.trim()) {
    state.todos.push({ text: input.value, completed: false });
    input.value = '';
    render();
  }
};

window.toggleTodo = (index) => {
  state.todos[index].completed = !state.todos[index].completed;
  render();
};

window.deleteTodo = (index) => {
  state.todos.splice(index, 1);
  render();
};


render();