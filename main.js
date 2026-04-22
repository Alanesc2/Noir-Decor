const navbar = document.getElementById('navbar');
if (navbar) {
  if (navbar.classList.contains('solid')) {
  } else {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }
}

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
}
function closeMobile() {
  if (mobileMenu) mobileMenu.classList.remove('open');
  if (hamburger) hamburger.classList.remove('open');
  document.body.style.overflow = '';
}
window.closeMobile = closeMobile;

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

const fadeEls = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  fadeEls.forEach(el => observer.observe(el));
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const hero = document.getElementById('hero');
if (hero) {
  window.addEventListener('load', () => {
    document.body.classList.add('ready');
    hero.classList.add('loaded');
  });
}

window.pickCompare = function(card) {
  document.querySelectorAll('.compare-card').forEach(c => c.classList.remove('chosen'));
  card.classList.add('chosen');
  const result = document.getElementById('compareResult');
  if (result) {
    const title = card.querySelector('h3').textContent;
    result.textContent = `You chose: ${title}`;
    result.classList.add('visible');
  }
};

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.style.display = 'none';
    const success = document.getElementById('formSuccess');
    if (success) success.style.display = 'block';
  });
}
