import React, { useState } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './details.css';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from "@mui/material";
const  Details = ()=>{

    const addData = (e)=>{
        // console.log(e.target);
        const {name,value} = e.target;
        setData(()=>{
            return{
                ...logdata,
                [name]:value
            }
                
        })
    }

    const [res,setRes] = useState({
        data:""
    })
    const baseURL = "http://localhost:4000/api"
    const [logdata,setData] = useState({
        age:"",	
        sex:"1",	
        cp:"",	
        trestbps:"",	
        chol:"",
        fbs:"",	
        restecg:"",	
        thalach:"",	
        exang:"",	
        oldpeak:"",	
        slope:"",
        ca:"",
        thal:""
    })

    async function predict(){
        await axios.post(`${baseURL}/heart/predict`,{
            age:logdata.age,
            sex:logdata.sex,
            cp:logdata.cp,
            trestbps:logdata.trestbps,	
            chol:logdata.chol,	
            fbs:logdata.fbs,	
            restecg:logdata.restecg,
            thalach:logdata.thalach,	
            exang:logdata.exang,	
            oldpeak:logdata.oldpeak,	
            slope:logdata.slope,	
            ca:logdata.ca,	
            thal:logdata.thal
        }).then((response)=>{
            console.log(response.data)
            setRes(()=>{
                return{
                    ...res,
                    ["data"]:response.data.message
                }
                    
            })
        })
    }
    const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = (e) => {
    e.preventDefault()
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
    return (
        <div className='whole'>
            <div className='container'>
                <div className='row'>
                    <h1 className='heading'>Enter the following details</h1>
                </div>
                <br />
                <form>
                    <div class="form-group row">
                        <label class="control-label col-sm-2" for="age">Age :</label>
                        <div class="col-sm-3">
                            <input type="number" name='age' onChange={addData} value = {logdata.age} class="form-control" id="age" placeholder="In Years" min='1' />
                        </div>
                        <label class="control-label col-sm-2 offset-1" for="gender">Gender:</label>
                        <div class="col-sm-3">
                            <select class="form-control" id='gender' name='sex' onChange={(e)=>{if(e.target.value=="male"){
                                setData(()=>{
                                    return{
                                        ...logdata,
                                        ["sex"]:1
                                    }
                                        
                                })
                            }
                            else{
                                setData(()=>{
                                    return{
                                        ...logdata,
                                        ["sex"]:0
                                    }
                                        
                                })
                            }
                            }}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label className='control-label col-sm-2'>Blood pressure :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" name='trestbps' value={logdata.trestbps} onChange={addData} />
                        </div>
                        <label className='control-label col-sm-2 offset-1'>Serum cholestoral :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" placeholder="In mg/dl" name='chol' onChange={addData} value={logdata.chol} />
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label className='control-label col-sm-2'>Max heart rate :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" name='thalach' onChange={addData} value = {logdata.thalach} />
                        </div>
                        <label className='control-label col-sm-2 offset-1'>Exercise induced angina :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" name='exang' onChange={addData} value={logdata.exang} />
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label className='control-label col-sm-2'>Oldpeak :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" name='oldpeak' value={logdata.oldpeak} onChange={addData} />
                        </div>
                        <label className='control-label col-sm-2 offset-1'>Slope ST :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value={logdata.slope} name="slope" onChange={addData}/>
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label className='control-label col-sm-2'>Thall :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" name='thal' value={logdata.thal} onChange={addData} />
                        </div>
                    </div>
                    <br />
                    <div class="form-group ">
                        <label class="control-label col-2" >No of major vessels :</label>
                        <input type="radio" id="0" name="ca" value="0" onChange={addData} />
                        <label class="col-1 mv" for="0">0</label>
                        <input type="radio" id="1" name="ca" value="1" onChange={addData}/>
                        <label class="col-1 mv" for="1">1</label>
                        <input type="radio" id="2" name="ca" value="2" onChange={addData}/>
                        <label class="col-1 mv" for="2">2</label>
                        <input type="radio" id="3" name="ca" value="3" onChange={addData}/>
                        <label class="col-1 mv" for="3">3</label>
                    </div>
                    <br />
                    <div class="form-group">
                        <label class="control-label col-2">Fasting blood sugar more than 120 mg/dl? :</label>
                        <input type="radio" id="true" name="fbs" value="1" onChange={addData}/>
                        <label class="col-1 bs" for="true">true</label>
                        <input type="radio" id="false" name="fbs" value="0" onChange={addData} />
                        <label class="col-1 bs" for="false">false</label>
                    </div>
                    <br />
                    <div class="form-group">
                        <label class="control-label col-2" >Chest pain :</label>
                        <input type="radio" id="0c" name="cp" value="0" onChange={addData}/>
                        <label class="col-1 cp" for="0c">0</label>
                        <input type="radio" id="1c" name="cp" value="1" onChange={addData} />
                        <label class="col-1 cp" for="1c">1</label>
                        <input type="radio" id="2c" name="cp" value="2" onChange={addData}/>
                        <label class="col-1 cp" for="2c">2</label>
                        <input type="radio" id="3c" name="cp" value="3" onChange={addData} />
                        <label class="col-1 cp" for="3c">3</label>
                    </div>
                    <br />
                    <div class="form-group">
                        <label class="control-label col-2">Resting electrocardiographic result:</label>
                        <input type="radio" id="0r" name="restecg" value="0" onChange={addData} />
                        <label class="col-1 re" for="0r">0</label>
                        <input type="radio" id="1r" name="restecg" value="1" onChange={addData} />
                        <label class="col-1 re" for="1r">1</label>
                        <input type="radio" id="2r" name="restecg"value="2" onChange={addData} />
                        <label class="col-1 re" for="2r">2</label>
                        <input type="radio" id="3r" name="restecg" value="3" onChange={addData} />
                        <label class="col-1 re" for="3r">3</label>
                    </div>
                    <br />
                    <div className='row'>
                        <input type="submit" class="btn btn-danger col-1 offset-5" value="Submit" onClick={
                            (e)=>{e.preventDefault();
                            console.log(logdata)
                            predict()
                            handleClickOpen(e)
                        }
                            }/>
                    </div>
                </form>

            </div>
            <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {res.data}
          </DialogContentText>
        </DialogContent>
      </Dialog>
        </div >
    )
}

export default Details;