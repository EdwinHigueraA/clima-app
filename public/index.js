const button = document.querySelector('button');
const respuesta = document.querySelector('#respuesta');

button.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el botón realice una acción por defecto

    // Verificar que el campo de texto no esté vacío
    if (respuesta.value.trim() === '') {
        alert('Por favor, escribe un comentario antes de enviar.');
        return; // Detiene la función aquí si el campo está vacío
    }

    const rest = respuesta.value;

    fetch('/api/v1/clima', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rest }),
    })
    .then(response => response.json())
    .then(data => {
        // Limpiar el campo de texto después del envío
        respuesta.value = '';
        
        // Redirigir a la página de agradecimiento
        window.location.href = '/thanks.html';
    })
    .catch((err) => {
        // Manejo de errores aquí, si es necesario
        console.error('Error al enviar los datos:', err);
    });
});
