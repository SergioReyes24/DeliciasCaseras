document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const menuToggle = document.getElementById('toggle-button');
    const mobileMenu = document.querySelector('.mobile-menu'); // Seleccionar la clase correcta

    // Agregar un evento de clic al botón de menú
    menuToggle.addEventListener('click', () => {
        // Alternar clase para mostrar/ocultar el menú
        mobileMenu.classList.toggle('active'); // Usar la clase correcta
    });
});
