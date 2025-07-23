const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () =>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});





let lastScroll = window.scrollY;

window.addEventListener('scroll', function() {
const nav = document.querySelector('.navbar'); // updated to match your class
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