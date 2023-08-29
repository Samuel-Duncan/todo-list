// Generate project constructor class
// - properties: name, todos
// - methods: get/set project name, get/set todos, add/delete todos

export default class Project {
  constructor(name) {
    this.name = name;
    this.toDos = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getToDos() {
    return this.toDos;
  }

  setToDos(toDos) {
    this.toDos = toDos;
  }

  getToDo(toDoTitle) {
    return this.toDos.find((toDo) => toDo.getName() === toDoTitle);
  }

  isOnToDoList(toDoTitle) {
    return this.toDos.some((toDo) => toDo.title === toDoTitle.title);
  }

  addToDo(newToDo) {
    if (!this.isOnToDoList(newToDo)) {
      this.toDos.push();
    }
  }

  deleteToDo(toDoTitle) {
    this.toDos = this.toDos.filter((toDo) => toDo.title !== toDoTitle.title);
  }
}
