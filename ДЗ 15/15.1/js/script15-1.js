const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

let tasks = JSON.parse(localStorage.getItem('myTodos')) || [];

function saveToLocalStorage() {
  localStorage.setItem('myTodos', JSON.stringify(tasks));
}

function renderTasks() {
  todosWrapper.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = `todo-item ${task.checked ? 'todo-item--checked' : ''}`;

    li.innerHTML = `
      <input type="checkbox" ${task.checked ? 'checked' : ''}>
      <span class="todo-item__description">${task.text}</span>
      <button class="todo-item__delete">Видалити</button>
    `;

    const checkbox = li.querySelector('input');
    checkbox.addEventListener('change', () => {
      tasks[index].checked = checkbox.checked;
      saveToLocalStorage();
      renderTasks();
    });

    const deleteBtn = li.querySelector('.todo-item__delete');
    deleteBtn.addEventListener('click', () => {
      tasks.splice(index, 1);
      saveToLocalStorage();
      renderTasks();
    });

    todosWrapper.append(li);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const val = input.value.trim();
  if (val) {
    tasks.push({
      text: val,
      checked: false
    });

    saveToLocalStorage();
    renderTasks();
    input.value = '';
  }
});

renderTasks();
