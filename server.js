
const express = require('express');
const mongoose = require('mongoose');
const router=require('./Routes/Medicine-routes')

const port=8000
const app = express();
app.use(express.json());


//middle ware
// localhost/medicine get all medicine
app.use('/medicine',router) 

//database connectivity
mongoose.connect('mongodb+srv://admin:admin@medicine.hzdkksb.mongodb.net/medicinedb')
.then(console.log("connected"))
.then(()=> console.log("connected to database"))

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})



