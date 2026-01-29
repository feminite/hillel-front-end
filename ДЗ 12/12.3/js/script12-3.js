const taskList = document.querySelector('#taskList');
const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', () => {
  const value = taskInput.value.trim();
  if (value) {
    const li = document.createElement('li');
    li.innerHTML = `${value} <button class="del-btn">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('del-btn')) {
    e.target.closest('li').remove();
  }
});