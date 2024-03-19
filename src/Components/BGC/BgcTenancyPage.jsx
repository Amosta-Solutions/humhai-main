import React from 'react'
import "./BGC.css";
import { Grid } from '@mui/material';

const BgcTenancyPage = () => {
  return (
    <>
    <div>
      <div>
        <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'600'}}><span style={{fontSize:'22px',fontWeight:'600',margin:'auto 10px'}}>Tenancy Information</span></i>
      </div>
      <hr/>
      <div>
        <div>
          <table id="customers1">
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>House Owner Name</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>none</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Address</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>none</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Contact Number</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>none</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Residing</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>none</td>
            </tr>
        </table>
          <div className="bgcpersonal">
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
            <textarea rows="5" cols="60" name="text" placeholder="Enter text" />
          </Grid>

          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
           <select>
             <option value="default">Pending</option>
             <option value="pending">Pending</option>
             <option value="insufficient_data">Insufficient Data</option>
             <option value="rejected">Rejected</option>
             <option value="validated">Validated</option>
             <option value="not_aware">Not Aware</option>
             <option value="not_validated">Not Validated</option>
          </select>
          </Grid>
          <Grid item xs={12} md={12} style={{marginTop:'10px auto'}}>
          <button className="button1">Save Change</button>
          </Grid>
            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default BgcTenancyPage;