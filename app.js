require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req,res)=> {

    console.log('Peticion Recibida')

    res.send('<h1>Nueva Aplicacion de clima laboral</h1>')
})

const PORT = process.env.PORT || 4000

app.listen(PORT,()=> {

    console.log(`Servidor escuchando en el puerto ${PORT}`);

})