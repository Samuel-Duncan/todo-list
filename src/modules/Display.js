import Todo from './Todo';
import Project from './Project';
import Storage from './Storage';

export default class Display {
  static responsiveMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');

    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('active');
      sidebar.classList.toggle('active');
    });
  }

  static setUpTabs() {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentItems = document.querySelectorAll('.tabs-content');

    menuItems.forEach((item) => {
      item.addEventListener('click', () => {
        const content = document.querySelector('.content');
        const menuItemName = item.dataset.forTab;
        const itemToActivate = content.querySelector(
          `.tabs-content[data-tab="${menuItemName}"]`,
        );

        menuItems.forEach((button) => {
          button.classList.remove('active');
        });

        contentItems.forEach((contentItem) => {
          contentItem.classList.remove('active');
        });

        item.classList.add('active');
        itemToActivate.classList.add('active');
      });
    });

    Display.responsiveMenu();
  }

  static toggleForms(element, form, container) {
    element.addEventListener('click', () => {
      form.classList.toggle('active');
      container.classList.toggle('active');
    });
  }

  static openForms() {
    const newProjectButton = document.getElementById('new-project-button');
    const newToDoButton = document.querySelectorAll('#new-todo-button');
    const projectForm = document.getElementById('project_form');
    const toDoForm = document.getElementById('todo_form');
    const projectFormContainer = document.getElementById(
      'project-form-background',
    );
    const toDoFormContainer = document.getElementById('todo-form-background');

    Display.toggleForms(newProjectButton, projectForm, projectFormContainer);

    newToDoButton.forEach((toDoButton) => {
      Display.toggleForms(toDoButton, toDoForm, toDoFormContainer);
    });

    Display.setUpTabs();
  }

  static closeForms() {
    const projectCancelButton = document.getElementById(
      'project-cancel-button',
    );
    const toDoCancelButton = document.getElementById('todo-cancel-button');
    const projectForm = document.getElementById('project_form');
    const toDoForm = document.getElementById('todo_form');
    const projectFormContainer = document.getElementById(
      'project-form-background',
    );
    const toDoFormContainer = document.getElementById('todo-form-background');
    const closeProjectBtn = document.getElementById('close-project-btn');
    const closeToDoBtn = document.getElementById('close-todo-btn');

    Display.toggleForms(projectCancelButton, projectForm, projectFormContainer);
    Display.toggleForms(toDoCancelButton, toDoForm, toDoFormContainer);
    Display.toggleForms(
      projectFormContainer,
      projectForm,
      projectFormContainer,
    );
    Display.toggleForms(toDoFormContainer, toDoForm, toDoFormContainer);
    Display.toggleForms(closeProjectBtn, projectForm, projectFormContainer);
    Display.toggleForms(closeToDoBtn, toDoForm, toDoFormContainer);

    Display.openForms();
  }

  static loadProjects() {
    Storage.getList()
      .getProjects()
      .forEach((project) => {
        if (project.name !== 'Today') {
          Display.createProject(project.name);
        }
      });

    Display.initAddProjectButtons();
  }

  static loadToDos(projectName) {
    Storage.getList()
      .getProject(projectName)
      .getToDos()
      .forEach((toDo) => Display.createToDo(toDo.name, toDo.dueDate));

    if (projectName !== 'Today') {
      Display.initAddToDoButtons();
    }
  }
}
