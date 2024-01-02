var express = require('express');
var router = express.Router();
const User = require("../models/user")



/* GET home page. */
router.get('/', function(req, res, next) {

User.create({
  firstName: "joy",
  lastName: "sarkar"
  
}).then(()=>{
  console.log("user created");
})
  res.send("hii from where is my tutor")
});

module.exports = router;
