const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('navbar-container');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);