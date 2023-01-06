const express = require("express");
const app = express();

const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://haoyangLi:519518lhyLHY~@ecommerceapiservice.kz5egej.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("DBConnection Successfull!"))
    .catch((err)=>{
        console.log(err)
    });

app.listen(5000, ()=>{
    console.log("backend server is running ....")
})

