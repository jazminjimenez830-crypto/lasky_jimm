const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  const isOpen = navbarMenu.classList.contains('active');
  navbarToggle.setAttribute('aria-expanded', isOpen);
  navbarToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

navbarMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    navbarToggle.setAttribute('aria-expanded', 'false');
    navbarToggle.setAttribute('aria-label', 'Abrir menú');
  });
});
