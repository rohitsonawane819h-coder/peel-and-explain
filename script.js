const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const config = window.PEEL_CONFIG || {};
if (config.youtubeUrl) {
  document.querySelectorAll('[data-youtube]').forEach(link => link.href = config.youtubeUrl);
}
if (config.facebookUrl) {
  document.querySelectorAll('[data-facebook]').forEach(link => link.href = config.facebookUrl);
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
