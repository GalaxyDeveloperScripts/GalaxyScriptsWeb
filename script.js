document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const toggle = document.querySelector('.toggle');

    toggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
