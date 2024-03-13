import React, { useState } from "react";
import { Button, Grid, TextField,Avatar,IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const UserProfileModal = () => {
  const [open, setOpen] = useState(false);
  const [companyLogo, setCompanyLogo] = useState({
    fileName: "/assets/watermark.png",
    bytes: "",
  });

  const handleImage = (event) => {
    setCompanyLogo({
      fileName: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };

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
          <div>Your Details</div>
          <div style={{ cursor: "pointer" }}>
            <CloseIcon onClick={handleClose} style={{color: 'rgb(31, 130, 104)'}}/>
          </div>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} style={{ marginTop: "10px" }}>
              <TextField fullWidth label="Full Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6} style={{ marginTop: "10px" }}>
              <TextField fullWidth label="Current Address" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6} style={{ marginTop: "10px" }}>
              <TextField fullWidth label="Email ID" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Mobile Number" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="HomeTown Address"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Gender"
                  value=""
                >
                  {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
          <MenuItem value='HCL'>HCL</MenuItem>
          <MenuItem value='Wipro'>Wipro</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Current Company Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Current Company Address"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker fullWidth autoOk />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} md={6}>
                <div style={{display:'flex'}}>
            <IconButton
              fullWidth
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <TextField
                hidden
                accept="image/*"
                type="file"
                onChange={handleImage}
              />
              <PhotoCamera />
            </IconButton>

            <Avatar
              alt="Humhai Sharp"
              variant="rounded"
              src={companyLogo.fileName}
              sx={{ width: 56, height: 56 }}
            />
            </div>
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

export default UserProfileModal;
