const API_URL = 'http://localhost:3000/todos';

async function loadTodos() {
    const res = await fetch(API_URL);
    const todos = await res.json();
    const list = document.getElementById('list');
    list.innerHTML = '';
    todos.forEach(todo => {
        list.innerHTML += `
            <li>
                <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                    onclick="toggleTodo('${todo._id}', ${todo.completed})">
                ${todo.text}
                <button onclick="deleteTodo('${todo._id}')">Видалити</button>
            </li>`;
    });
}

async function addTodo() {
    const text = document.getElementById('todoInput').value;
    await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ text })
    });
    loadTodos();
}

async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadTodos();
}

loadTodos();