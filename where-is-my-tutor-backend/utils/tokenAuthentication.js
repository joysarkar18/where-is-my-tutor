const jwt = require("jsonwebtoken")
const secret = 'please-fuck-yourself';
const tokenAuthentication = (req , res , next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

  jwt.verify(token,secret , (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user
    console.log(user);

    next()});
    

}

module.exports = tokenAuthentication;