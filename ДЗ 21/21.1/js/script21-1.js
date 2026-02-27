class TodoApp {
    constructor() {
        this.$wrapper = $('.js--todos-wrapper');
        this.$form = $('.js--form');
        this.$input = $('.js--form__input');
        this.modal = new bootstrap.Modal('#todoModal');
        
        // Початкові дані
        this.todos = JSON.parse(localStorage.getItem('todos')) || [
            { text: "Вивчити Babel", checked: false },
            { text: "Написати код на класах", checked: true }
        ];

        this.init();
    }

    init() {
        this.render();
        
        // Використовуємо стрілочні функції, щоб зберегти контекст 'this'
        this.$form.on('submit', (e) => this.handleAddTodo(e));
        
        this.$wrapper.on('click', '.todo-item__delete', (e) => this.handleDelete(e));
        this.$wrapper.on('change', '.js--todo-check', (e) => this.handleToggle(e));
        this.$wrapper.on('click', '.todo-item', (e) => this.handleShowModal(e));
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    render() {
        this.$wrapper.empty();
        this.todos.forEach(({ text, checked }, index) => {
            const checkedClass = checked ? 'todo-item--checked' : '';
            this.$wrapper.append(`
                <li class="todo-item ${checkedClass} list-group-item d-flex align-items-center" data-index="${index}">
                    <input type="checkbox" class="js--todo-check me-2" ${checked ? 'checked' : ''}>
                    <span class="todo-item__description flex-grow-1">${text}</span>
                    <button class="todo-item__delete btn btn-danger btn-sm">Видалити</button>
                </li>
            `);
        });
        this.save();
    }

    handleAddTodo(e) {
        e.preventDefault();
        const text = this.$input.val().trim();
        if (text) {
            this.todos.push({ text, checked: false });
            this.$input.val('');
            this.render();
        }
    }

    handleDelete(e) {
        e.stopPropagation();
        const index = $(e.target).closest('.todo-item').data('index');
        this.todos.splice(index, 1);
        this.render();
    }

    handleToggle(e) {
        const index = $(e.target).closest('.todo-item').data('index');
        this.todos[index].checked = $(e.target).is(':checked');
        this.render();
    }

    handleShowModal(e) {
        if (!$(e.target).closest('button, input').length) {
            const index = $(e.currentTarget).data('index');
            $('.js--modal-content').text(this.todos[index].text);
            this.modal.show();
        }
    }
}


$(document).ready(() => {
    new TodoApp();
});
