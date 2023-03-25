const express = require("express");
const mongoose = require("mongoose");
const conn = require("./connection/conn");
const app = express();
const port = "8080";
const cors = require("cors");
const bodyParser = require("body-parser");
const search=require('./routes/search');
// const postModal = require("./models/add-properties");
app.use(express.json())
const userRouter = require("./routes/add-property")
const props = require('./routes/properties');
// app.use(bodyParser)
const signup = require("./routes/signup");
const signin = require("./routes/signin");
const showprops=require("./routes/getproperties");

conn()
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));
app.use("/", userRouter)
app.use("/",showprops);
app.use("/signup", signup)
app.use('/',props);
app.use("/", signin)
app.use('/',search);
app.listen(port, () => {
  console.log(`app is running at port ${port}`);
});

