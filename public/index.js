
const respuesta = document.querySelector('#respuesta')


const button = document.querySelector('button')

button.addEventListener('click',(e)=> {
    const rest = respuesta.value

    fetch('/api/v1/clima',{
        method: 'POST',
        headers:{
        'Content-Type':'application/json',
        },
        body: JSON.stringify({
            rest
        }),
    })
})