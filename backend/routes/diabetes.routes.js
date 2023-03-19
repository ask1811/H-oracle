const express = require("express");
const router = express.Router();
const Users = require("../model/user.model");
const {spawn} = require('child_process');
const {PythonShell} =require('python-shell');

router.post('/predict',async(req,res)=>{
    const Age = req.body.Age;  
    const Sex = req.body.Sex  
    const HighChol = req.body.HighChol   
    const BMI = req.body.BMI  
    const Smoker = req.body.Smoker  
    const PhysActivity = req.body.PhysActivity  
    const PhysHlth = req.body.PhysHlth  
    const Fruits = req.body.Fruits 
    const Veggies = req.body.Veggies
    const HvyAlcoholConsump = req.body.HvyAlcoholConsump  
    const Stroke = req.body.Stroke  
    const HighBP = req.body.HighBP

    var dataToSend;
    const python = spawn('python', ['./mlmodel2/main.py',Age, Sex, HighChol, BMI, Smoker, PhysActivity, PhysHlth, Fruits, Veggies, HvyAlcoholConsump, Stroke, HighBP]);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(dataToSend)
        if (dataToSend == 1){
            res.json({"message":"High chance of diabetes"})
        }
        else{
            res.json({"message":"Low chance of diabetes"})
        }
       });
    python.stderr.on('data',function(data){
        console.log(`${data}`)
    })
})

module.exports = router;