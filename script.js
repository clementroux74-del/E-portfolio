const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const menu = document.getElementById('menu');
const links = document.getElementById('links');
function closeMenu() {
  links.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && links.classList.contains('open')) {
    closeMenu();
    menu.focus();
  }
});
window.matchMedia('(min-width: 1151px)').addEventListener('change', closeMenu);
