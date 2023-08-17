const burgerMenu = document.querySelector('.hamburger');
const menuList = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
  menuList.classList.toggle('active');
});
