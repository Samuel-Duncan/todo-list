export default class Display {
  static responsiveMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');

    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('active');
      sidebar.classList.toggle('active');
    });
  }
}
