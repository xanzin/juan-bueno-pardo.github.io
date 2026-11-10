document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open');
    }));
  }
  const filters = document.querySelectorAll('[data-filter]');
  const publications = document.querySelectorAll('.pub-item');
  filters.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    let visible = 0;
    publications.forEach(item => {
      const show = filter === 'all' || item.dataset.categories.split(' ').includes(filter);
      item.hidden = !show;
      if (show) visible++;
    });
    document.querySelector('.pub-none').hidden = visible > 0;
  }));
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
});
