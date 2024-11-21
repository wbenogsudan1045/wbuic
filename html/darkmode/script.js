// Get references to elements
const darkModeToggle = document.getElementById('dark-mode-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const checkbox = document.getElementById('check');

// Check localStorage for dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Close navigation menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        checkbox.checked = false;
    });
});
