const router = require("express").Router()
const { body, validationResult } = require('express-validator');

router.get("/" ,   (req , res) => {

    res.json({hi:"hii"})

})

router.post("/sign-up",[
    // Validate email
    body('email').isEmail().normalizeEmail().withMessage('Please enter a valid email address'),
    // Validate password
    body('password').isLength({ min: 6 }).withMessage("Please enter a password more than 6 char"),
  ], (req , res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body.email , req.body.password);
    const email = req.body.email;
    const password = req.body.password;



    res.json({hii:"signup"});
})




module.exports = router