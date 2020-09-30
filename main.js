const toggleButton = document.querySelector('#toggleBtn');
const navbar = document.querySelector('.nav');

toggleButton.addEventListener('click', showLinks);

function showLinks() {
    if (navbar.style.display === 'none') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none'
    }
}