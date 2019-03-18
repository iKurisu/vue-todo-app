export class TodoList {
  constructor(name, dueDate, todos, id) {
    this.name = name;
    this.dueDate = dueDate;
    this.todos = todos;
    this.id = id;
  }
}

export class Todo {
  constructor(name, id) {
    this.name = name;
    this.checked = false;
    this.id = id;
  }
}