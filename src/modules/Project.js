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
    return this.toDos.find((toDo) => toDo.getTitle() === toDoTitle);
  }

  isOnToDoList(toDoTitle) {
    return this.toDos.some((toDo) => toDo.getTitle() === toDoTitle);
  }

  addToDo(newToDo) {
    if (!this.isOnToDoList(newToDo.getTitle())) {
      this.toDos.push(newToDo);
    }
  }

  deleteToDo(toDoTitle) {
    this.toDos = this.toDos.filter((toDo) => toDo.getTitle() !== toDoTitle);
  }
}
