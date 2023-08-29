import Todo from './Todo';
import Project from './Project';

export default class List {
  constructor() {
    this.projects = [];
    this.projects.push(new Project('Today'));
  }

  getProjects() {
    return this.projects;
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  }

  isOnProjectList(projectName) {
    return this.projects.some((project) => project.getName() === projectName);
  }

  addProject(newProject) {
    if (!this.isOnProjectList(newProject.getName())) {
      this.projects.push(newProject);
    }
  }

  deleteProject(projectName) {
    this.projects = this.projects.filter(
      (project) => project.getName() !== projectName,
    );
  }

  updateTodayProject() {
    this.getProject('Today').setToDos([]);

    this.projects.forEach((project) => {
      if (project.getName() === 'Today') return;

      const todayToDos = project.getToDos();
      todayToDos.forEach((toDo) => {
        const toDoName = `${toDo.getTitle()} (${project.getName()})`;
        this.getProject('Today').addToDo(new Todo(toDoName, toDo.getDueDate()));
      });
    });
  }
}
