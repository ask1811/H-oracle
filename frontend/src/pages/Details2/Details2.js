import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Details2.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
function Details2() {
    var _a = React.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
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
                            <input type="number" class="form-control" id="age" min='1' />
                        </div>
                        <label class="control-label col-sm-2 offset-1" for="gender">Gender:</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label className='control-label col-sm-2'>High Cholestrol :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" />
                        </div>
                        <a className='control-label col-sm-2 offset-1' aria-describedby={id} variant="contained" onClick={handleClick}>Body Mass Index(BMI) :
                        </a>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                        </Popover>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label className='control-label col-sm-2'>Are you a smoker? :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" />
                        </div>
                        <a className='control-label col-sm-2 offset-1' aria-describedby={id} variant="contained" onClick={handleClick}>Physical Activity:</a>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label className='control-label col-sm-2' aria-describedby={id} variant="contained" onClick={handleClick}>Physical Health :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" />
                        </div>
                        <label className='control-label col-sm-2 offset-1' aria-describedby={id} variant="contained" onClick={handleClick}>Fruits :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label className='control-label col-sm-2' aria-describedby={id} variant="contained" onClick={handleClick}>Vegetables :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" />
                        </div>
                        <label className='control-label col-sm-2 offset-1' aria-describedby={id} variant="contained" onClick={handleClick}>Heavy Alcohol Consumption :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <br />
                    <div class="form-group row">
                        <label className='control-label col-sm-2' aria-describedby={id} variant="contained" onClick={handleClick}>Stroke :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" />
                        </div>
                        <label className='control-label col-sm-2 offset-1' aria-describedby={id} variant="contained" onClick={handleClick}>High Blood Pressure :</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    <br />
                    <div className='row'>
                        <input type="submit" class="btn btn-danger col-1 offset-5" value="Submit" />
                    </div>
                </form>

            </div >
            <div className='Guide'>
                <h1 className='g1'>Guidelines to Enter Details</h1>
                <h2 className='g1'>*Age: If age is between 18-24 Enter 1</h2>
                <h2 className='g1'>  1 = 18-24 / 2 = 25-29 / 3 = 30-34 / 4 = 35-39 / 5 = 40-44 / 6 = 45-49 / 7 = 50-54 / 8 = 55-59 / 9 = 60-64 / 10 = 65-69 / 11 = 70-74 / 12 = 75-79 / 13 = 80 or older
                </h2>
                <br />
                <h2 className='g1'>*Gender: 1: male, 0: female</h2>
                <br />
                <h2 className='g1'>*Cholestrol: 0 = no high cholesterol, 1 = high cholesterol</h2>
                <br />
                <h2 className='g1'>*BMI=(Weight in Kg)/(Height in metre)</h2>
                <br />
                <h2 className='g1'>*Smoker: Have you smoked at least 100 cigarettes in your entire life? [Note: 5 packs = 100 cigarettes] 0 = no 1 = yes</h2>
                <br />
                <h2 className='g1'>*Physical Activity: Physical Activity in past 30 days - not including job 0 = no 1 = yes</h2>
                <br />
                <h2 className='g1'>*Physical Health: How many injuries you have had in the past 30 days (Physical illness or injury days in past 30 days scale 1-30)</h2>
                <br />
                <h2 className='g1'>*Fruits: Do you Consume Fruits 1 or more times per day 0 = no 1 = yes</h2>
                <br />
                <h2 className='g1'>*Vegetables: Do you consume Vegetables 1 or more times per day 0 = no 1 = yes</h2>
                <br />
                <h2 className='g1'> *Heavy Alcohol Consumption: (adult men more than or equal to 14 drinks per week and adult women more than or equal to 7 drinks per week) 0 = no 1 = yes</h2>
                <br />
                <h2 className='g1'> *Stroke: Have you ever had a stroke. 0 = no, 1 = yes</h2>
                <br />
                <h2 className='g1'>*High Blood Pressure: 0 = no High BP,1 = Yes High BP </h2>
            </div>
        </div >
    )
}

export default Details2;