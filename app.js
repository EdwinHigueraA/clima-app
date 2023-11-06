const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()



mongoose.connect(`mongodb+srv://ehigueraa:${process.env.MONGO_DB_PASS}@cluster0.qhfo0ut.mongodb.net/clima-app?retryWrites=true&w=majority`
)
.then(result => {
    app.listen(PORT,()=> {

        console.log(`Servidor escuchando en el puerto ${PORT}`);
    
    })
    console.log('Conexion Exitosa')
    })
.catch((err) => console.log(err))

const climaSchema = mongoose.Schema({
    rest:{type : String, require: true},
},
{timestamps: true}
)

const Coment  = mongoose.model('Clima',climaSchema,'mensajes.clima')

app.use(express.json())

app.post('/api/v1/clima', (req,res,next)=> {
    const newComent = new Coment({
        rest:req.body.rest
    })

    newComent
    .save()
    .then(result =>{
      res.status(201).json({ok:true})
    })
    .catch((err) => console.log(err))
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT 

