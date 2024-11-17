const navLinks = document.querySelectorAll('.navigation__link');
const currentPath = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

