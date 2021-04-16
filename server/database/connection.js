const mongoose= require('mongoose')
require('dotenv').config()

const urlConnect=process.env.URL_CONNECTION
mongoose.connect(urlConnect).then((res)=>{
    console.log("Conectado com sucesso!")
})
.catch((err)=>{
    console.log(err)
})