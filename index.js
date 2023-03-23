const express = require('express');
const mongoose = require("mongoose");
const conn=require('./connection/conn');
const app=express();
const port = '8080'
const cors = require("cors")
const bodyParser = require('body-parser');




conn().then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err))


app.listen(port, () => { console.log(`app is running at port ${port}`); })