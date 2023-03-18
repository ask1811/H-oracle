import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './details.css';
function Details(){
    return(
        <div className='container'>
            <div className='row'>
                <h1 className='heading'>Enter the following details</h1>
            </div>
            <br/>
            <form>
                <div class="form-group row">
                    <label class="control-label col-sm-2" for="age">Age:</label>
                    <div class="col-sm-3">
                        <input type="number" class="form-control" id="age" placeholder="In Years" min='1'/>
                    </div>
                    <label class="control-label col-sm-2 offset-1" for="gender">Gender:</label>
                    <div class="col-sm-3">
                        <select class="form-control" id='gender'>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div class="form-group row">
                    <label className='control-label col-sm-2'>Blood pressure:</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control"/>
                    </div>
                    <label className='control-label col-sm-2 offset-1'>Serum cholestoral in mg/dl:</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control"/>
                    </div>
                </div>
                <br/>
                <div class="form-group row">
                    <label className='control-label col-sm-2'>Max heart rate:</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control"/>
                    </div>
                    <label className='control-label col-sm-2 offset-1'>Exercise induced angina:</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control"/>
                    </div>
                </div>
                <br/>
                <div class="form-group row">
                    <label className='control-label col-sm-2'>Oldpeak:</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control"/>
                    </div>
                    <label className='control-label col-sm-2 offset-1'>Slope ST:</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control"/>
                    </div>
                </div>
                <br/>
                <div class="form-group row">
                    <label className='control-label col-sm-2'>Thall:</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control"/>
                    </div>
                </div>
                <br/>
                <div class="form-group">
                    <label class="control-label col-2" for="pwd">No of major vessels:</label>
                    <input type="radio" id="0" name="cp" value="0"/>
                    <label class="col-1" for="0">0</label>
                    <input type="radio" id="1" name="cp" value="1"/>
                    <label class="col-1" for="1">1</label>
                    <input type="radio" id="2" name="cp" value="2"/>
                    <label class="col-1" for="2">2</label>
                    <input type="radio" id="3" name="cp" value="3"/>
                    <label class="col-1" for="3">3</label>
                </div>
                <br/>
                <div class="form-group">
                    <label class="control-label col-2" for="pwd">Fasting blood sugar more than 120 mg/dl?:</label>
                    <input type="radio" id="true" name="cp" value="true"/>
                    <label class="col-1" for="true">true</label>
                    <input type="radio" id="false" name="cp" value="false"/>
                    <label class="col-1" for="false">false</label>
                </div>
                <br/>
                <div class="form-group">
                    <label class="control-label col-2" for="pwd">Chest pain:</label>
                    <input type="radio" id="0" name="cp" value="0"/>
                    <label class="col-1" for="0">0</label>
                    <input type="radio" id="1" name="cp" value="1"/>
                    <label class="col-1" for="1">1</label>
                    <input type="radio" id="2" name="cp" value="2"/>
                    <label class="col-1" for="2">2</label>
                    <input type="radio" id="3" name="cp" value="3"/>
                    <label class="col-1" for="3">3</label>
                </div>
                <br/>
                <div class="form-group">
                    <label class="control-label col-2" for="pwd">Resting electrocardiographic result:</label>
                    <input type="radio" id="0" name="cp" value="0"/>
                    <label class="col-1" for="0">0</label>
                    <input type="radio" id="1" name="cp" value="1"/>
                    <label class="col-1" for="1">1</label>
                    <input type="radio" id="2" name="cp" value="2"/>
                    <label class="col-1" for="2">2</label>
                    <input type="radio" id="3" name="cp" value="3"/>
                    <label class="col-1" for="3">3</label>
                </div>
            </form>
        </div>
    )
}

export default Details;