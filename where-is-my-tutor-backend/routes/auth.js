const router = require("express").Router()
const { body, validationResult } = require('express-validator');

const Teacher = require('../models/teacher')
const Student = require('../models/student')

router.get("/" ,   (req , res) => {

    res.json({hi:"hii"})

})

router.post("/sign-up",[
    // Validate email
    body('email').isEmail().normalizeEmail().withMessage('Please enter a valid email address'),
    // Validate password
    body('password').isLength({ min: 6 }).withMessage("Please enter a password more than 6 char"),
  ], async(req , res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body.email , req.body.password);
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const userName = req.body.userName;

    if(type===0){
        let foundUser =await Student.findOne({where: {email: email}});
    if(foundUser!=null){
        return res.json({status : false , message : "User with this email already exists"});
    }

    else{
        Student.create({email:email , password:password , userName : userName}).then(()=>{
            console.log("student created");
         return   res.json({status : true , message : "student created"})
        })
        

    }
    }

    else{
        res.json({hii:"signup"});

    }





    
})




module.exports = router