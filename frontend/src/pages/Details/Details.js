import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./details.css";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
const Details = () => {
  var _a = React.useState(null),
    anchorEl = _a[0],
    setAnchorEl = _a[1];
  var handleClick = function (event) {
    setAnchorEl(event.currentTarget);
  };
  var handleClose = function () {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = (e) => {
    e.preventDefault()
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  return (
    <div className="whole">
      <div className="container">
        <div className="row">
          <h1 className="heading">Enter the following details</h1>
        </div>
        <br />
        <form>
          <div class="form-group row">
            <label class="control-label col-sm-2" for="age">
              Age :
            </label>
            <div class="col-sm-3">
              <input
                type="number"
                class="form-control"
                id="age"
                placeholder="In Years"
                min="1"
              />
            </div>
            <label class="control-label col-sm-2 offset-1" for="gender">
              Gender:
            </label>
            <div class="col-sm-3">
              <select class="form-control" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <br />
          <div class="form-group row">
            <label className="control-label col-sm-2">Blood pressure :</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" />
            </div>
            <a
              className="control-label col-sm-2 offset-1"
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              Serum cholestoral :
            </a>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
            <div class="col-sm-3">
              <input type="text" class="form-control" placeholder="In mg/dl" />
            </div>
          </div>
          <br />
          <div class="form-group row">
            <label className="control-label col-sm-2">Max heart rate :</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" />
            </div>
            <a
              className="control-label col-sm-2 offset-1"
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              Exercise induced angina :
            </a>
            <div class="col-sm-3">
              <input type="text" class="form-control" />
            </div>
          </div>
          <br />
          <div class="form-group row">
            <label
              className="control-label col-sm-2"
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              Oldpeak :
            </label>
            <div class="col-sm-3">
              <input type="text" class="form-control" />
            </div>
            <label
              className="control-label col-sm-2 offset-1"
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              Slope ST :
            </label>
            <div class="col-sm-3">
              <input type="text" class="form-control" />
            </div>
          </div>
          <br />
          <div class="form-group row">
            <label
              className="control-label col-sm-2"
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              Thall :
            </label>
            <div class="col-sm-3">
              <input type="text" class="form-control" />
            </div>
          </div>
          <br />
          <div class="form-group ">
            <label class="control-label col-2">No of major vessels :</label>
            <input type="radio" id="0" name="mv" value="0" />
            <label class="col-1 mv" for="0">
              0
            </label>
            <input type="radio" id="1" name="mv" value="1" />
            <label class="col-1 mv" for="1">
              1
            </label>
            <input type="radio" id="2" name="mv" value="2" />
            <label class="col-1 mv" for="2">
              2
            </label>
            <input type="radio" id="3" name="mv" value="3" />
            <label class="col-1 mv" for="3">
              3
            </label>
          </div>
          <br />
          <div class="form-group">
            <label class="control-label col-2">
              Fasting blood sugar more than 120 mg/dl? :
            </label>
            <input type="radio" id="true" name="bs" value="true" />
            <label class="col-1 bs" for="true">
              true
            </label>
            <input type="radio" id="false" name="bs" value="false" />
            <label class="col-1 bs" for="false">
              false
            </label>
          </div>
          <br />
          <div class="form-group">
            <label class="control-label col-2">Chest pain :</label>
            <input type="radio" id="0c" name="cp" value="0c" />
            <label class="col-1 cp" for="0c">
              0
            </label>
            <input type="radio" id="1c" name="cp" value="1" />
            <label class="col-1 cp" for="1c">
              1
            </label>
            <input type="radio" id="2c" name="cp" value="2" />
            <label class="col-1 cp" for="2c">
              2
            </label>
            <input type="radio" id="3c" name="cp" value="3" />
            <label class="col-1 cp" for="3c">
              3
            </label>
          </div>
          <br />
          <div class="form-group">
            <label
              class="control-label col-2"
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              Resting electrocardiographic result:
            </label>
            <input type="radio" id="0r" name="re" value="0" />
            <label class="col-1 re" for="0r">
              0
            </label>
            <input type="radio" id="1r" name="re" value="1" />
            <label class="col-1 re" for="1r">
              1
            </label>
            <input type="radio" id="2r" name="re" value="2" />
            <label class="col-1 re" for="2r">
              2
            </label>
            <input type="radio" id="3r" name="re" value="3" />
            <label class="col-1 re" for="3r">
              3
            </label>
          </div>
          <br />
          <div className="row">
            <button
              type="submit"
              class="btn btn-danger col-1 offset-5"
              value="Submit"
              onClick={handleClickOpen}
            >
              Submit
            </button>
          </div>
          {/* <div id="result" class="modal" role="dialog">
            <div class="modal-dialog modal-lg" role="content">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title">Result</h3>
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div class="modal-body">
                  <p></p>
                </div>
              </div>
            </div>
          </div> */}
        </form>
      </div>
      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Details;
