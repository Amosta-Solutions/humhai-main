import React from 'react'
import "./BGC.css";
import { Grid } from '@mui/material';

const BgcRefrencePage = () => {
  return (
    <>
    {/* First Refrence......... */}
    <div>
      <div style={{background:'orange'}}>
        <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'600'}}><span style={{fontSize:'22px',fontWeight:'600',margin:'auto 10px'}}>Reference Information 1</span></i>
      </div>
      <hr/>
      <div>
        <div>
          <table id="customers1">
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Name</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>MANENDER SINGH</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Relation</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>Brother</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Contact Number</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>868234777</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Address</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>Uttra pradesh</td>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Name</label>
             <input placeholder='Enter Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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

          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Mobile</label>
             <input placeholder='Enter Mobile Number' type='number' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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

          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Relation</label>
             <input placeholder='Enter Relation' type='number' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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
          <div style={{background:'#FFFF00'}}>
            <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'500'}}><span style={{fontSize:'22px',fontWeight:'500',margin:'auto 10px'}}>Permanent Address</span></i>
          </div>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
            <div style={{display:'flex',flexDirection:'row',gap:'5px'}}>
                <div><input type='checkbox'/></div>
                <div>same as mentioned by candidate</div>
           </div>
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
            <textarea rows="5" cols="60" name="text" placeholder="Enter text" />
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'auto auto'}}>
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

          <div style={{background:'#FFFF00'}}>
            <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'500'}}><span style={{fontSize:'22px',fontWeight:'500',margin:'auto 10px'}}>Current Address</span></i>
          </div>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
            <div style={{display:'flex',flexDirection:'row',gap:'5px'}}>
                <div><input type='checkbox'/></div>
                <div>same as mentioned by candidate</div>
           </div>
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
            <textarea rows="5" cols="60" name="text" placeholder="Enter text" />
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'auto auto'}}>
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

          <div style={{background:'#FFFF00'}}>
            <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'500'}}><span style={{fontSize:'22px',fontWeight:'500',margin:'auto 10px'}}>CROSS QUESTIONS</span></i>
          </div>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Current Employer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 1</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 2</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 3</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 4</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>

           
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <input placeholder='Remark' type='text' />         
          </Grid>

          {/* Second Refrence.............. */}
          <div>
      <div style={{background:'orange'}}>
        <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'600'}}><span style={{fontSize:'22px',fontWeight:'600',margin:'auto 10px'}}>Reference Information 2</span></i>
      </div>
      <hr/>
      <div>
        <div>
          <table id="customers1">
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Name</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>MANENDER SINGH</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Relation</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>Brother</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Contact Number</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>868234777</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Address</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>Uttra pradesh</td>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Name</label>
             <input placeholder='Enter Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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

          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Mobile</label>
             <input placeholder='Enter Mobile Number' type='number' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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

          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Relation</label>
             <input placeholder='Enter Relation' type='number' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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
          <div style={{background:'#FFFF00'}}>
            <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'500'}}><span style={{fontSize:'22px',fontWeight:'500',margin:'auto 10px'}}>Permanent Address</span></i>
          </div>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
            <div style={{display:'flex',flexDirection:'row',gap:'5px'}}>
                <div><input type='checkbox'/></div>
                <div>same as mentioned by candidate</div>
           </div>
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
            <textarea rows="5" cols="60" name="text" placeholder="Enter text" />
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'auto auto'}}>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Police Station</label>
             <input placeholder='Enter Police Station Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12}>
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
           
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>District</label>
             <input placeholder='Enter District Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12}>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>State</label>
             <input placeholder='Enter State Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12}>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Pin Code</label>
             <input placeholder='Enter Pin Code' type='text' />         
          </Grid>
          <Grid item xs={12} md={12}>
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
          <div style={{background:'#FFFF00'}}>
            <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'500'}}><span style={{fontSize:'22px',fontWeight:'500',margin:'auto 10px'}}>Current Address</span></i>
          </div>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
            <div style={{display:'flex',flexDirection:'row',gap:'5px'}}>
                <div><input type='checkbox'/></div>
                <div>same as mentioned by candidate</div>
           </div>
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
            <textarea rows="5" cols="60" name="text" placeholder="Enter text" />
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'auto auto'}}>
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

          <div style={{background:'#FFFF00'}}>
            <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'500'}}><span style={{fontSize:'22px',fontWeight:'500',margin:'auto 10px'}}>CROSS QUESTIONS</span></i>
          </div>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Current Employer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 1</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 2</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 3</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 4</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
 
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <input placeholder='Remark' type='text' />         
          </Grid>

            </div>
        </div>
      </div>
         </div>

         {/* Third Refrence.......... */}
          <div>
      <div style={{background:'orange'}}>
        <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'600'}}><span style={{fontSize:'22px',fontWeight:'600',margin:'auto 10px'}}>Reference Information 3</span></i>
      </div>
      <hr/>
      <div>
        <div>
          <table id="customers1">
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Name</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>MANENDER SINGH</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Relation</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>Brother</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Contact Number</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>868234777</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Address</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>Uttra pradesh</td>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Name</label>
             <input placeholder='Enter Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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

          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Mobile</label>
             <input placeholder='Enter Mobile Number' type='number' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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

          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Relation</label>
             <input placeholder='Enter Relation' type='number' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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
          <div style={{background:'#FFFF00'}}>
            <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'500'}}><span style={{fontSize:'22px',fontWeight:'500',margin:'auto 10px'}}>Permanent Address</span></i>
          </div>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
            <div style={{display:'flex',flexDirection:'row',gap:'5px'}}>
                <div><input type='checkbox'/></div>
                <div>same as mentioned by candidate</div>
           </div>
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
            <textarea rows="5" cols="60" name="text" placeholder="Enter text" />
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'auto auto'}}>
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
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
            <div style={{display:'flex',flexDirection:'row',gap:'5px'}}>
                <div><input type='checkbox'/></div>
                <div>same as mentioned by candidate</div>
           </div>
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
            <textarea rows="5" cols="60" name="text" placeholder="Enter text" />
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'auto auto'}}>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Police Station</label>
             <input placeholder='Enter Police Station Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12}>
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
           
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>District</label>
             <input placeholder='Enter District Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12}>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>State</label>
             <input placeholder='Enter State Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12}>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Pin Code</label>
             <input placeholder='Enter Pin Code' type='text' />         
          </Grid>
          <Grid item xs={12} md={12}>
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
          <div style={{background:'#FFFF00'}}>
            <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'500'}}><span style={{fontSize:'22px',fontWeight:'500',margin:'auto 10px'}}>Current Address</span></i>
          </div>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
            <div style={{display:'flex',flexDirection:'row',gap:'5px'}}>
                <div><input type='checkbox'/></div>
                <div>same as mentioned by candidate</div>
           </div>
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
            <textarea rows="5" cols="60" name="text" placeholder="Enter text" />
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'auto auto'}}>
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

          <div style={{background:'#FFFF00'}}>
            <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'500'}}><span style={{fontSize:'22px',fontWeight:'500',margin:'auto 10px'}}>CROSS QUESTIONS</span></i>
          </div>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Current Employer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 1</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 2</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 3</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 4</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
 
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <input placeholder='Remark' type='text' />         
          </Grid>

            </div>
        </div>
      </div>
         </div>

         {/* Fourth Refrence......... */}
         <div>
      <div style={{background:'orange'}}>
        <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'600'}}><span style={{fontSize:'22px',fontWeight:'600',margin:'auto 10px'}}>Reference Information 4</span></i>
      </div>
      <hr/>
      <div>
        <div>
          <table id="customers1">
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Name</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>MANENDER SINGH</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Relation</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>Brother</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Contact Number</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>868234777</td>
            </tr>
            <tr>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>Address</td>
              <td style={{color:'black',fontWeight:'500',fontSize:'16px'}}>:</td>
              <td style={{color:'black'}}>Uttra pradesh</td>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Name</label>
             <input placeholder='Enter Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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

          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Mobile</label>
             <input placeholder='Enter Mobile Number' type='number' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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

          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Relation</label>
             <input placeholder='Enter Relation' type='number' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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
          <div style={{background:'#FFFF00'}}>
            <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'500'}}><span style={{fontSize:'22px',fontWeight:'500',margin:'auto 10px'}}>Permanent Address</span></i>
          </div>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
            <div style={{display:'flex',flexDirection:'row',gap:'5px'}}>
                <div><input type='checkbox'/></div>
                <div>same as mentioned by candidate</div>
           </div>
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
            <textarea rows="5" cols="60" name="text" placeholder="Enter text" />
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'auto auto'}}>
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
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
            <div style={{display:'flex',flexDirection:'row',gap:'5px'}}>
                <div><input type='checkbox'/></div>
                <div>same as mentioned by candidate</div>
           </div>
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
            <textarea rows="5" cols="60" name="text" placeholder="Enter text" />
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'auto auto'}}>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Police Station</label>
             <input placeholder='Enter Police Station Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12}>
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
           
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>District</label>
             <input placeholder='Enter District Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12}>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>State</label>
             <input placeholder='Enter State Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12}>
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
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Pin Code</label>
             <input placeholder='Enter Pin Code' type='text' />         
          </Grid>
          <Grid item xs={12} md={12}>
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
          <div style={{background:'#FFFF00'}}>
            <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'500'}}><span style={{fontSize:'22px',fontWeight:'500',margin:'auto 10px'}}>Current Address</span></i>
          </div>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
            <div style={{display:'flex',flexDirection:'row',gap:'5px'}}>
                <div><input type='checkbox'/></div>
                <div>same as mentioned by candidate</div>
           </div>
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
            <textarea rows="5" cols="60" name="text" placeholder="Enter text" />
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'auto auto'}}>
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

          <div style={{background:'#FFFF00'}}>
            <i className="bx bx-copy" style={{fontSize:'22px',fontWeight:'500'}}><span style={{fontSize:'22px',fontWeight:'500',margin:'auto 10px'}}>CROSS QUESTIONS</span></i>
          </div>
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>
             <label>Current Employer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
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
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 1</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 2</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 3</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
          <Grid item xs={12} md={12} style={{margin:'5px auto'}}>
          <label>Question 4</label>
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
          
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <label>Answer</label>
             <input placeholder='Enter Current Employer Name' type='text' />         
          </Grid>
 
          <Grid item xs={12} md={12} style={{margin:'10px auto'}}>  
             <input placeholder='Remark' type='text' />         
          </Grid>

            </div>
        </div>
      </div>
    </div>

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

export default BgcRefrencePage;