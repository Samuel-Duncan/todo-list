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
    const menuItem = document.querySelectorAll('.menu-item');
    const contentItems = document.querySelectorAll('.tabs-content');
    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        const content = document.querySelector('.main');
        const menuItemName = item.dataset.forTab;
        const itemToActivate = content.querySelector(
          `.tabs-content[data-tab="${menuItemName}"]`,
        );

        menuItem.forEach((button) => {
          button.classList.remove('active');
        });

        contentItems.forEach((contentItem) => {
          contentItem.classList.remove('active');
        });

        item.classList.add('active');
        itemToActivate.classList.add('active');
      });
    });
  }

  static openForms() {
    const newProjectButton = document.getElementById('new-project-button');
    const newToDoButton = document.querySelectorAll('#new-todo-button');
    const projectForm = document.getElementById('project_form');
    const toDoForm = document.getElementById('todo_form');
    const projectFormContainer = document.getElementById(
      'project-form-container',
    );
    const toDoFormContainer = document.getElementById('todo-form-container');

    newProjectButton.addEventListener('click', () => {
      projectForm.classList.toggle('active');
      projectFormContainer.classList.toggle('active');
    });

    newToDoButton.forEach((toDoButton) => {
      toDoButton.addEventListener('click', () => {
        toDoForm.classList.toggle('active');
        toDoFormContainer.classList.toggle('active');
      });
    });

    Display.closeForms();
  }

  static closeForms() {
    const projectCancelButton = document.getElementById(
      'project-cancel-button',
    );
    const toDoCancelButton = document.getElementById('todo-cancel-button');
    const projectForm = document.getElementById('project_form');
    const toDoForm = document.getElementById('todo_form');
    const projectFormContainer = document.getElementById(
      'project-form-container',
    );
    const toDoFormContainer = document.getElementById('todo-form-container');

    const formCloser = (element, form, container) => {
      element.addEventListener('click', () => {
        form.classList.toggle('active');
        container.classList.toggle('active');
      });
    };

    formCloser(projectCancelButton, projectForm, projectFormContainer);
    formCloser(toDoCancelButton, toDoForm, toDoFormContainer);
  }
}
