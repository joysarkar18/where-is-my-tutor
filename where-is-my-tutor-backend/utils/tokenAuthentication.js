const jwt = require("jsonwebtoken")

const tokenAuthentication = (req , res , next)=>{
    const authHeader = req.headers['authorization']
    console.log(authHeader);
    next();
    

}

module.exports = tokenAuthentication;