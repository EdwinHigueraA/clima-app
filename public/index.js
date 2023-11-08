const button = document.querySelector('button');
const respuesta = document.querySelector('#respuesta');

button.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el botón realice una acción por defecto

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
        // Si todo está bien, redirecciona a la página de agradecimiento
        window.location.href = '/thanks.html';
    })
    .catch((err) => {
        // Manejo de errores aquí, si es necesario
        console.error('Error al enviar los datos:', err);
    });
});
