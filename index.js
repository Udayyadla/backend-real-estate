const express = require("express");
const mongoose = require("mongoose");
const conn = require("./connection/conn");
const app = express();
const port = "8080";
const cors = require("cors");
const bodyParser = require("body-parser");
// const postModal = require("./models/add-properties");
app.use(express.json())
const userRouter=require("./routes/add-property")
const props=require('./routes/properties');
// app.use(bodyParser)

conn()
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));
app.use("/",userRouter)
app.use("/",props);
app.listen(port, () => {
  console.log(`app is running at port ${port}`);
});

