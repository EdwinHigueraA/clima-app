const button = document.querySelector('button');
const respuesta = document.querySelector('#respuesta');
const loadingIndicator = document.getElementById('loading');

button.addEventListener('click', (e) => {
    e.preventDefault();

    // Verificar que el campo de texto no esté vacío
    if (respuesta.value.trim() === '') {
        alert('Por favor, escribe un comentario antes de enviar.');
        return; // Detiene la función aquí si el campo está vacío
    }

    // Deshabilitar el botón y mostrar el indicador de carga
    button.disabled = true;
    loadingIndicator.style.display = 'block';

    const rest = respuesta.value;

    fetch('/api/v1/clima', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rest }),
    })
    .then(response => {
        // Verificar que la respuesta está bien antes de convertir a JSON
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Limpiar el campo de texto y redirigir
        respuesta.value = '';
        window.location.href = '/thanks.html';
    })
    .catch((err) => {
        // Manejo de errores aquí
        console.error('Error al enviar los datos:', err);
        alert('Hubo un problema al enviar tu comentario. Por favor, inténtalo de nuevo.');
    })
    .finally(() => {
        // Reactivar el botón y ocultar el indicador de carga
        button.disabled = false;
        loadingIndicator.style.display = 'none';
    });
});
