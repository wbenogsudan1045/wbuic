document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const navLinks = document.querySelectorAll('.nav-link');
const checkbox = document.getElementById('check');


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false;
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 843) {
            checkbox.checked = false;
        }
    });
});
