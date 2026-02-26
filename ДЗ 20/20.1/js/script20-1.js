$(document).ready(function() {
    let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

    function renderTasks() {
        const $wrapper = $('.js--todos-wrapper');
        $wrapper.empty();

        tasks.forEach((task, index) => {
            const checkedClass = task.completed ? 'todo-item--checked' : '';
            const isChecked = task.completed ? 'checked' : '';
            
            const item = `
                <li class="todo-item list-group-item d-flex align-items-center ${checkedClass}" data-index="${index}">
                    <input type="checkbox" class="js--complete-btn me-2" ${isChecked}>
                    <span class="todo-item__description flex-grow-1">${task.text}</span>
                    <button class="todo-item__delete btn btn-danger ms-2">Видалити</button>
                </li>`;
            $wrapper.append(item);
        });
        
        localStorage.setItem('myTasks', JSON.stringify(tasks));
    }

    $('.js--form').on('submit', function(e) {
        e.preventDefault();
        const $input = $('.js--form__input');
        const val = $input.val().trim();
        if (val) {
            tasks.push({ text: val, completed: false });
            $input.val('');
            renderTasks();
        }
    });

    $('.js--todos-wrapper').on('click', '.todo-item__delete', function(e) {
        e.stopPropagation();
        const index = $(this).closest('li').data('index');
        tasks.splice(index, 1);
        renderTasks();
    });

    $('.js--todos-wrapper').on('change', '.js--complete-btn', function() {
        const index = $(this).closest('li').data('index');
        tasks[index].completed = $(this).is(':checked');
        renderTasks();
    });

    $('.js--todos-wrapper').on('click', '.todo-item__description', function() {
        const index = $(this).closest('li').data('index');
        const textToDisplay = tasks[index].text;
        
        $('#modalTaskText').text(textToDisplay); 
        $('#taskModal').modal('show');
    });

    renderTasks();
});