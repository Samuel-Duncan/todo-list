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
}
