document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
});

const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});