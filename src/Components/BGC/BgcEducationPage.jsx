import React from 'react'
import "./BGC.css";
import { Grid } from '@mui/material';

const BgcEducationPage = () => {
  return (
    <>
    <div>
      <div>
        <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'600'}}><span style={{fontSize:'22px',fontWeight:'600',margin:'auto 10px'}}>Education Information</span></i>
      </div>
      <hr/>
      <div>
        <div>
          <table id="customers1">
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Institute</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>MANENDER SINGH</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Qualification</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>12 PASS</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>From</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>None</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>To</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>None</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>City</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>10th marksheet</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>12th marksheet</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>7780340083</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}></td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>7780340083</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Provisional Certificate / Degree</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>Euro</td>
            </tr>
        </table>
          <div className="bgcpersonal">
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

export default BgcEducationPage