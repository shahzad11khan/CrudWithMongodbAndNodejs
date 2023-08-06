const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const medicineSchema=new Schema({
// write the fields name here
name:{
    type:String,
    required:true
}, 
description:{
    type: String,
    required: true
}, 
price:{
    type: Number,
    required: true
},
image:{
    type: String,
    required: true
}

})
module.exports = mongoose.model("Medicine", medicineSchema)
