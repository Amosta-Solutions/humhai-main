import React from "react";
import "./Job.css";
import Footer from "../Website/Footer";
import Navbar from "../Website/Navbar";
import { Grid, TextField, Button } from "@mui/material";
import JobFormModal from "./JobFormModal";
import InputLabel from "@mui/material/InputLabel";
// import MenuItem from '@mui/material/MenuItem';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const LoginForm = () => {
  return (
    <>
      <Navbar />
      <div className="jobform">
        <h2>Post Jobs</h2>
      </div>
      <div className="box-container">
        <div className="jobform-box">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Job Title" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Job Type" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Job Description" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Minimum Salary" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Maximum Salary" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Salary Unite" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Education Requirement"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Requirement Skills"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Job Description" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Job Location" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="PinCode" variant="outlined" />
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
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Experience" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Minimum Experience"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Maximum Experience"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Experience Unite"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Number Of Vacancys"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Select Job Category"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <div className="jobform1">
            <div>
              <h2 style={{ fontSize: "2vw" }}>Company Details</h2>
            </div>
            <div style={{ justifyContent: "flex-end" }}>
              <JobFormModal />
            </div>
          </div>
          <div className="jobform-box1">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Company Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Company Name"
                    value=""
                  >
                    {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
          <MenuItem value='HCL'>HCL</MenuItem>
          <MenuItem value='Wipro'>Wipro</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
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
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  label="About Company"
                  variant="outlined"
                  multiline
                  required
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Button variant="contained" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default LoginForm;
