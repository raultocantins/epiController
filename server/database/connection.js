const mongoose= require('mongoose')
const urlConnect="mongodb+srv://admin:3571592486@cluster0.ebc1x.mongodb.net/epis?retryWrites=true"
mongoose.connect(urlConnect).then((res)=>{
    console.log("Conectado com sucesso!")
})
.catch((err)=>{
    console.log(err)
})