const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false)
async function getConnection() {
    await mongoose.connect(process.env.URL)
}
module.exports= getConnection