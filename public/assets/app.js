const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

function closeNav() {
  if (!btn || !nav) return;
  nav.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}

if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeNav();
      btn.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('open')) return;
    if (!nav.contains(event.target) && !btn.contains(event.target)) closeNav();
  });
}

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', closeNav));
