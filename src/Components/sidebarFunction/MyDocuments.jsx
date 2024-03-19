import React, { useState } from "react";
import "./MyReferrals.css";
import { TextField,Grid } from "@mui/material";

const MyDocuments = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="mydocument">
      <h2>MyDocuments</h2>

      {show && (
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
            <input type="text" className="form-control" placeholder="Enter Document Name" />
            </Grid>
            <Grid item xs={12} md={12}>
            <input type="file" id="img" className="form-control" name="img" accept="image/*"/>
            </Grid>
            <Grid item xs={12} md={12}>
            <button className="button0" onClick={handleShow}>- Remove</button>
            </Grid>
            <Grid item xs={12} md={12}>
            <button onClick={handleShow} className="button1">Save Change</button>
            </Grid>
          </Grid>
        </div>
      )}
      {!show &&(
      <button onClick={handleShow} className="button1">+ Add Documents</button>
      )}
    </div>
  );
};

export default MyDocuments;
