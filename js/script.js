const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

const modal = document.querySelector('.art-modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalCaption = document.querySelector('.modal-caption');

document.querySelectorAll('.art-card').forEach((card) => {
  card.addEventListener('click', () => {
    modalImage.src = card.dataset.full;
    modalImage.alt = card.querySelector('img').alt;
    modalTitle.textContent = card.dataset.title;
    modalCaption.textContent = card.dataset.caption;
    modal.showModal();
  });
});

document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.open) modal.close();
});

document.querySelector('#year').textContent = new Date().getFullYear();
