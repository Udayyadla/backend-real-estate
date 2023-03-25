const User = require("../models/user")
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async(req, res, next)=>{
try{
    const { token } = req.cookies;
    if(!token){
        return res.status(401).json({
            status: "failed",
            message: "please login first"
        });
    }

    const verifyUser = await jwt.verify(token, process.env.MY_JWT);

    req.user = await User.findById(verifyUser._id)
    next();

}
catch(error){
    res.status(500).json({
        status: "failed",
        message: error.message
    })
}
}