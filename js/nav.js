const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll('.navbar-menu a'); // all links in the nav

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');

  // Disable scroll when menu is open
  if (navbarMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// Close menu & enable scroll when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarToggle.classList.remove('active');
    navbarMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Hide/show navbar on scroll
let lastScroll = window.scrollY;

window.addEventListener('scroll', function() {
  const nav = document.querySelector('.navbar');
  const currentScroll = window.scrollY;

  if (currentScroll > 50) {
    if (currentScroll < lastScroll) {
      // Scrolling UP
      nav.classList.remove('nav-hidden');
      nav.classList.add('nav-scrolled');
    } else {
      // Scrolling DOWN
      nav.classList.add('nav-hidden');
    }
  } else {
    // Top of page
    nav.classList.remove('nav-hidden');
    nav.classList.remove('nav-scrolled');
  }

  lastScroll = currentScroll;
});
