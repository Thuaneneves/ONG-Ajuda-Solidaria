document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMenuToggle();
    
    if (window.location.pathname.includes('index.html')) {
        Router.init();
    }
    if (window.location.pathname.includes('cadastro.html')) {
        FormValidation.initVolunteerForm();
    }
});

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : currentTheme === 'dark' ? 'high-contrast' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? 'Modo Alto Contraste' : newTheme === 'high-contrast' ? 'Modo Claro' : 'Modo Escuro';
        });
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.textContent = savedTheme === 'dark' ? 'Modo Alto Contraste' : savedTheme === 'high-contrast' ? 'Modo Claro' : 'Modo Escuro';
    }
}

function initMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('open');
        });
    }
}
