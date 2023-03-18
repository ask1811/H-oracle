const express = require("express");
const router = express.Router();
const Users = require("../model/user.model");
const {spawn} = require('child_process');
const {PythonShell} =require('python-shell');

router.post('/predict',async(req,res)=>{
    const age = req.body.age;
    const sex = req.body.sex;
    const cp = req.body.cp;
    const trestbps = req.body.trestbps;
    const chol = req.body.chol;
    const fbs = req.body.fbs	;
    const restecg = req.body.restecg;
    const thalach = req.body.thalach;
    const exang = req.body.exang;
    const oldpeak = req.body.oldpeak;
    const slope = req.body.slope;
    const ca = req.body.ca;
    const thal = req.body.thal;

    var dataToSend;
    const python = spawn('python', ['./mlmodel/main.py', age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(dataToSend)
        if (dataToSend == 1){
            res.json({"message":"High chance of heart disease"})
        }
        else{
            res.json({"message":"Low chance of heart disease"})
        }
       });
    python.stderr.on('data',function(data){
        console.log(`${data}`)
    })
})

module.exports = router;