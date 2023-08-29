import Todo from './Todo';
import Project from './Project';
import List from './List';

export default class Storage {
  static saveList(data) {
    localStorage.setItem('list', JSON.stringify(data));
  }

  static getList() {
    const list = Object.assign(
      new List(),
      JSON.parse(localStorage.getItem('list')),
    );

    list.setProjects(
      list
        .getProjects()
        .map((project) => Object.assign(new Project(), project)),
    );

    list
      .getProjects()
      .forEach((project) =>
        project.setToDos(
          project.getToDos().map((todo) => Object.assign(new Todo(), todo)),
        ),
      );

    return list;
  }

  static addProject(project) {
    const list = Storage.getList();
    list.addProject(project);
    Storage.saveList(list);
  }

  static deleteProject(projectName) {
    const list = Storage.getList();
    list.deleteProject(projectName);
    Storage.saveList(list);
  }

  static addToDo(projectName, toDo) {
    const list = Storage.getList();
    list.getProject(projectName).addToDo(toDo);
    Storage.saveList(list);
  }

  static deleteToDo(projectName, toDoTitle) {
    const list = Storage.getList();
    list.getProject(projectName).deleteToDo(toDoTitle);
    Storage.saveList(list);
  }

  static renameToDo(projectName, toDoTitle, newTitle) {
    const list = Storage.getList();
    list.getProject(projectName).getToDo(toDoTitle).setTitle(newTitle);
    Storage.saveList(list);
  }

  static setToDoDate(projectName, toDoTitle, newDueDate) {
    const list = Storage.getList();
    list.getProject(projectName).getToDo(toDoTitle).setDueDate(newDueDate);
    Storage.saveList(list);
  }

  static updateTodayProject() {
    const list = Storage.getList();
    list.updateTodayProject();
    Storage.saveList(list);
  }
}
