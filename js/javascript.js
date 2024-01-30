document.addEventListener("DOMContentLoaded", function () {
    var closeButtonElements = document.querySelectorAll('.close');

    closeButtonElements.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            console.log('Botón "X" clickeado');
            // Intenta ocultar la imagen ampliada
            var lightBox = button.closest('.light-box');
            if (lightBox) {
                lightBox.style.display = 'none';
            }
        });
    });
});