const express = require("express");
const app = express();

const mongoose = require('mongoose')

const dotenv = require("dotenv")

dotenv.config();

mongoose
    .connect(process.env.mongoUrl)
    .then(() => console.log("DBConnection Successfull!"))
    .catch((err)=>{
        console.log(err)
    });

app.listen(5000, ()=>{
    console.log("backend server is running ....")
})

