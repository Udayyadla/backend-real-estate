const express = require("express")

const Router = express.Router()
Router.get('/signout', async(req, res)=>{
try{
res.status(200).cookie("token", null, {expires : new Date(Date.now()), httpOnly: true}).json({
    status: true,
    message: "sign Out sucessfully"
})
}
catch(error){
    res.status(500).json({
        status: "failed",
        message: error.message
    })
}
});

module.exports = Router


