import React from "react";
import "./BGC.css";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
  Checkbox,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import img from "../Assets/Images/Job feed - Desktop - Track Applications.webp";

const BgcDocDataPage = () => {
  return (
    <>
         <div className="backgrounddoc-heading">
        <div className="backgrounddoc-button1">
          <button>Home</button>
          <button>Others</button>
          <button>All Data</button>
          <button>Contact US</button>
          <button>Solution</button>
        </div>
      </div>
      <div className="backgrounddoc-main">
        {/* First Box........ */}
        <div className="bgcdocdata">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="bgcdocdata-box1">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <img src={img} alt="" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" fullWidth>
                      Download Image
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="bgcdocdata-box1">
                <p>Document Details</p>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Enter Pan Number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="status-label">Status</InputLabel>
                      <Select
                        labelId="status-label"
                        id="status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Enter Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="name-status-label">Status</InputLabel>
                      <Select
                        labelId="name-status-label"
                        id="name-status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker fullWidth autoOk />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="date-status-label">Status</InputLabel>
                      <Select
                        labelId="date-status-label"
                        id="date-status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Enter Father Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="father-status-label">Status</InputLabel>
                      <Select
                        labelId="father-status-label"
                        id="father-status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox />
                    Show on Final Report
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* Second Box......... */}
        <div className="bgcdocdata">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="bgcdocdata-box2">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <img src={img} alt="" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" fullWidth>
                      Download Image
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="bgcdocdata-box2">
                <p>Adhar Details</p>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Enter Adhar Number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="status-label">Status</InputLabel>
                      <Select
                        labelId="status-label"
                        id="status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Enter Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="name-status-label">Status</InputLabel>
                      <Select
                        labelId="name-status-label"
                        id="name-status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker fullWidth autoOk />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="date-status-label">Status</InputLabel>
                      <Select
                        labelId="date-status-label"
                        id="date-status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Enter Mobile Number Provided"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="father-status-label">Status</InputLabel>
                      <Select
                        labelId="father-status-label"
                        id="father-status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox />
                    Show on Final Report
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* Third Box........ */}
        <div className="bgcdocdata">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="bgcdocdata-box2">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <img src={img} alt="" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" fullWidth>
                      Download Image
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="bgcdocdata-box2">
                <p>Driver Details</p>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Enter Driving license Number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="status-label">Status</InputLabel>
                      <Select
                        labelId="status-label"
                        id="status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Enter Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="name-status-label">Status</InputLabel>
                      <Select
                        labelId="name-status-label"
                        id="name-status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker fullWidth autoOk />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="date-status-label">Status</InputLabel>
                      <Select
                        labelId="date-status-label"
                        id="date-status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Enter Father's Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="father-status-label">Status</InputLabel>
                      <Select
                        labelId="father-status-label"
                        id="father-status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox />
                    Show on Final Report
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        {/* Fourth Box.......... */}
        <div className="bgcdocdata">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="bgcdocdata-box2">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <img src={img} alt="" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" fullWidth>
                      Download Image
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="bgcdocdata-box2">
                <p>Voter Id Details</p>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Enter Voter Id Number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="status-label">Status</InputLabel>
                      <Select
                        labelId="status-label"
                        id="status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Enter Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="name-status-label">Status</InputLabel>
                      <Select
                        labelId="name-status-label"
                        id="name-status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      style={{ width: "100%", paddingRight: "75px" }}
                    >
                      <DatePicker
                        fullWidth
                        autoOk
                        style={{ width: "100%", paddingRight: "75px" }}
                      />
                    </LocalizationProvider>
                  </Grid>

                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="date-status-label">Status</InputLabel>
                      <Select
                        labelId="date-status-label"
                        id="date-status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Enter Address"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="father-status-label">Status</InputLabel>
                      <Select
                        labelId="father-status-label"
                        id="father-status-select"
                        label="Status"
                        value=""
                      >
                        {/* <MenuItem value='Amosta'>Amosta Solution Pvt Ltd</MenuItem>
           <MenuItem value='HCL'>HCL</MenuItem>
           <MenuItem value='Wipro'>Wipro</MenuItem> */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox />
                    Show on Final Report
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default BgcDocDataPage;
