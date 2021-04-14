const mongoose = require('mongoose')

const Epi=new mongoose.Schema({
    color: String,
    id: String,
    using:Boolean,
    name:String,
    entregue:String,
    data:Date|String
})


module.exports =  mongoose.model("Epi",Epi)