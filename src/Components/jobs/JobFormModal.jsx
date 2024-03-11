import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const JobFormModal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Company
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div>Add Company Fields</div>
          <div style={{ cursor: 'pointer' }}><CloseIcon onClick={handleClose} /></div>
        </DialogTitle>
        <DialogContent >
          <Grid container spacing={2} >
            <Grid item xs={12} md={6} style={{marginTop:'10px'}}>
              <TextField fullWidth label="Company Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6} style={{marginTop:'10px'}}>
              <TextField fullWidth label="PinCode" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Location" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="District" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="State" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Country" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="About Company" variant="outlined" multiline required rows={4} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={handleClose} >
             Cancel
         </Button>
          <Button onClick={handleClose} variant="outlined">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default JobFormModal;
