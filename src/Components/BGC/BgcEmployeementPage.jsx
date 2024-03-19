import React from 'react'
import "./BGC.css";
import { Grid } from '@mui/material';

const BgcEmployeementPage = () => {
  return (
    <>
    <div>
      <div>
        <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'600'}}><span style={{fontSize:'22px',fontWeight:'600',margin:'auto 10px'}}>Employment Information</span></i>
      </div>
      <hr/>
      <div>
        <div>
          <table id="customers1">
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Company Name</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Designation</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Employee Id</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>From</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>To</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>brhif4892f</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Location</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Work Responsibility</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>HR Number</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>HR Email</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Salary</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Reason of leaving</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>

            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Previous Manager</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Offer Letter</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Pay Slip</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Resignation</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Experience Letter</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Bank Statement</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Employment check result</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}></td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Employement Certificate Add</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}><input type='file' /> <span className='bgcemployeement'><button>Submit Emp</button></span></td>
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

export default BgcEmployeementPage;