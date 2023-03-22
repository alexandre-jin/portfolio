const burger = document.querySelector('.burger');
const navLinks = document.querySelector(".link")

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
});

burger.addEventListener('click', () => {
  navLinks.classList.toggle('menu_burger')
});