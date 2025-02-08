const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Routes = require('./controller/TaskController');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// mongodb connection
mongoose.connect(process.env.mongo)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    res.send("Im coming from express server");
})

app.use("/", Routes);

app.listen(process.env.port,()=>{
    console.log("Server is running on port 8080");
})