import React from 'react'
import './Job.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Footer from '../Website/Footer';
import Navbar from '../Website/Navbar';
import {useNavigate} from 'react-router-dom'

export const Jobs = () => {
  const navigate =useNavigate()
  return (
    <>
    <Navbar/>
    <div className='jobs'>
        <h2>Recommended Jobs for you</h2>
        <div className='jobs-container'>
        <div className='jobs-box'>
          <p>Digital Manager</p>
          <p>Amosta Solution</p>
          <p>&#8377; 35000-45000 Per Month</p>
          <div className='jobs-button'>
            <div>
              <button className='button1'><LocationOnIcon style={{fontSize:'18px'}}/> Haryana</button>
            </div>
            <div>
              <button className='button2'><LocalLibraryIcon style={{fontSize:'18px'}}/> B.Com</button>
            </div>
            <div>
              <button className='button3'><WorkHistoryIcon style={{fontSize:'18px'}}/> 5-7 Year</button>
            </div>

          </div>
          <div className='jobs-button1'>
          <div>
            <button className='button4' onClick={()=>navigate('/jobdetails')}>Apply</button>
          </div>
          <div>
            <button className='button5'>Details</button>
          </div>
          </div>
        </div>
        <div className='jobs-box'></div>
        <div className='jobs-box'></div>
        <div className='jobs-box'></div>
        </div>
      </div>
      <Footer/>
      </>
  )
}
