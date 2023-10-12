// Referencia al botón y a la imagen de la bombilla
const toggleButton = document.getElementById('toggleButton');
const led = document.getElementById('led');

// Variable para rastrear el estado de la bombilla
let isOn = false;

// Función para cambiar el estado de la bombilla
function toggleLED() {
    if (isOn) {
        led.src = 'images/led_off.png';
    } else {
        led.src = 'images/led_on.png';
    }
    isOn = !isOn;
}

// Agregar un controlador de eventos al botón
toggleButton.addEventListener('click', toggleLED);
