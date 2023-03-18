const express = require("express");
const router = express.Router();
const Users = require("../model/user.model");

router.get('',(req,res)=>{
    res.json("Hello")
})

router.post('/signup',async(req,res)=>{
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const user = new Users({name,email,password});
        const storeData = await user.save();
        res.status(201).json(storeData);
    })

router.post("/signin",async(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;
    var user = await Users.find({"email":email})
    console.log(user);
    if (user[0].password==password){
        res.status(201).json({"message":"authorised","token":"xxx","data":user});
    }
    else{
        res.status(401).json({"messge":"unauthorised"})
    }  
})

module.exports = router;

