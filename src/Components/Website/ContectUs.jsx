import React,{useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { IoCallOutline } from 'react-icons/io5';
import { IoMailOpenOutline } from 'react-icons/io5';
import back from '../Assets/Images/back_contact_us.png';

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { Grid } from '@mui/material';

const ContactUs = () => {
  const [full_name, setFullName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  return (
    <>
      <Navbar />
      <div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <img src={back} alt='' style={{maxWidth: '100%', height: 'auto', objectFit:'contain', position: 'fixed', top: 80, left: 0, zIndex: -1,
                         width: '100vw', maxHeight: '150vh', }}/>

        </div>

        <div style={{ background: 'white', }}>
          <div
            className='card'
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              marginTop: '22%',
            }}
          >
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <IoCallOutline
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '50px',
                  color: '#3F8CCB',
                }}
                size='2em'
              />
              <p style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center', marginTop: '10px' }}>
                Call Now
              </p>
              <h4 style={{ fontWeight: '500' }}>+91 124 4215321, <span>+91 8750060033</span></h4>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <IoMailOpenOutline
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '50px',
                  color: '#3F8CCB',
                }}
                size='2em'
              />
              <p style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center', marginTop: '10px' }}>
                Email Us
              </p>
              <h4 style={{ fontWeight: '500' }}>sales@amosta.com</h4>
            </div>
          </div>

          <div className='row mt-4'>
            <h3 style={{ textAlign: 'center', width: '100%' }}>OUR LOCATION</h3>
            <div className='col-md-12'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.318928493867!2d77.06934701547728!3d28.500050796814598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196c2ea9c4a7%3A0x88fb059582025d82!2sAmosta%20Solutions%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1679395612189!5m2!1sen!2sin'
                width='100%'
                height='450'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Amosta Maps'
              ></iframe>
            </div>
          </div>
          <div style={{marginTop:'5%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
           <h2 style={{textAlign:'center'}}>CONTACT US</h2>
            <div style={{width:'50%',height:'auto',padding:'20px',flexDirection:'column'}}>
       
          <form >
             <Grid container spacing={2} style={{padding:'20px'}}>
               <Grid xs={12} style={{margin:'10px'}}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  value={full_name}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  required
                />
                </Grid>
                <Grid xs={12} style={{margin:'10px'}}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  variant="outlined"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                  required
                />
                </Grid>
                <Grid xs={12} style={{margin:'10px'}}>
                <TextField
                  fullWidth
                  label="Email ID"
                  variant="outlined"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                </Grid>
                <Grid xs={12} style={{margin:'10px'}}>
                <TextField
                  fullWidth
                  label="Subject"
                  defaultValue=" "
                  variant="outlined"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  required
                />
                </Grid>
                <Grid xs={12} style={{margin:'10px'}}>
              <TextField
              style={{width:'100%'}}
                label="Message"
                multiline
                required
                rows={4}
                defaultValue=" "
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              </Grid>
              <Grid xs={12} style={{margin:'10px'}}>
              <Stack direction="row" spacing={2} className="my-2">
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </Stack>
              </Grid>
              </Grid>
            </form>
       </div>
     </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
