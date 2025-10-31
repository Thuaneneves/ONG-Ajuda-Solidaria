// app.js - Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('index.html')) {
        Router.init();
    }
    
    // Toggle para modo escuro/alto contraste
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'high-contrast' : currentTheme === 'high-contrast' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? 'Modo Alto Contraste' : newTheme === 'high-contrast' ? 'Modo Claro' : 'Modo Escuro';
            localStorage.setItem('theme', newTheme);
        });
        // Carregar tema salvo
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.textContent = savedTheme === 'dark' ? 'Modo Alto Contraste' : savedTheme === 'high-contrast' ? 'Modo Claro' : 'Modo Escuro';
    }
    
    // Navegação por teclado (ex.: Enter/Space em links)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const focused = document.activeElement;
            if (focused.tagName === 'A') {
                e.preventDefault();
                focused.click();
            }
        }
    });
    
    // Inicializar formulário se aplicável
    if (window.location.pathname.includes('cadastro.html')) {
        FormValidation.initVolunteerForm();
    }
});
