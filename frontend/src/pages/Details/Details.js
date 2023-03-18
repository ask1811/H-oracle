import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import './details.css';
function Details(){
    return(
        <div className='container'>
            <div className='row'>
                <h1>Enter the following details</h1>
            </div>
            <br/>
            <div className='row'>
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="control-label col-sm-2" for="pwd">Age:</label>
                    <div class="col-sm-4">
                        <input type="number" class="form-control" id="pwd" placeholder="In Years" min='1'/>
                    </div>
                </div>
                <br/>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="pwd">Gender:</label>
                    <div class="col-sm-4">
                        <select class="form-control">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div class="form-group">
                    <label class="control-label col-1" for="pwd">Chest pain:</label>
                    <br/>
                    <input type="radio" id="html" name="cp" value="0"/>
                    <label class="col-1" for="html">0</label>
                    <input type="radio" id="css" name="cp" value="1"/>
                    <label class="col-1" for="css">1</label>
                    <input type="radio" id="javascript" name="cp" value="2"/>
                    <label class="col-1" for="javascript">2</label>
                    <input type="radio" id="javascript" name="cp" value="3"/>
                    <label class="col-1" for="javascript">3</label>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Details;