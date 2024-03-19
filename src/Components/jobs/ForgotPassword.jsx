import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const ForgotPassword = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <div>
        <EditIcon
          style={{ color: "rgb(31, 130, 104)" }}
          onClick={handleClickOpen}
        />
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>Change Password</div>
          <div style={{ cursor: "pointer" }}>
            <CloseIcon onClick={handleClose} style={{color:'rgb(31, 130, 104)'}}/>
          </div>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} style={{ marginTop: "10px" }}>
              <TextField fullWidth label="Current Password" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={12} style={{ marginTop: "10px" }}>
              <TextField fullWidth label="New Password" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField fullWidth label="Confirm New Password" variant="outlined" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} variant="outlined">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ForgotPassword;
