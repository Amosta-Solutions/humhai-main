import React, { useState } from 'react';
import './Job.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import OpenjobModal from './OpenjobModal';

const JobFilter = () => {
    const [show,setShow] =useState(true)
    const [show1,setShow1] =useState(true)
    const [show2,setShow2] =useState(true)
    const [show3,setShow3] =useState(true)
    const [show4,setShow4] =useState(true)

    const openToggle=()=>{
        setShow(!show)
    }
    const openToggle1=()=>{
        setShow1(!show1)
    }
    const openToggle2=()=>{
        setShow2(!show2)
    }
    const openToggle3=()=>{
        setShow3(!show3)
    }
    const openToggle4=()=>{
        setShow4(!show4)
    }

    const [modalOpen, setModalOpen] = useState(false);
    const handleClickOpen = () => {
      setModalOpen(true);
    };


  const showDate = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 0 && screenWidth <= 800) {
      openToggle();
      handleClickOpen();
    } else {
      openToggle();
    }
  }
  

  const ShowForm = ()=> ( 
   <>
    <div className='jobs-box1'>
    <div className="JobFilter">
      <div className="filters">
      <div className='filterSection'>
      <div className='filtermap' onClick={showDate}>
          <p><FilterAltIcon/> Filters </p>
          </div>
          </div>
        <div className="filterSection">
         
          <div className='filtermap'>
            <div 
            onClick={showDate}
            >
             <p>Date posted </p>
          </div>
          <div  
          onClick={openToggle}
          >
           {show?<ExpandMoreIcon />:<ExpandLessIcon/>} 
          </div>
          </div>
          {show && (
          <div className="radioGroup">
            <div>
              <input type="radio" id="age1" />
              <label htmlFor="age1" style={{margin:'auto 5px',fontSize:'14px'}}>All</label>
            </div>
            <div>
              <input type="radio" id="age2" />
              <label htmlFor="age2" style={{margin:'auto 5px',fontSize:'14px'}}>Last 24 hours</label>
            </div>
            <div>
              <input type="radio" id="age3" />
              <label htmlFor="age3" style={{margin:'auto 5px',fontSize:'14px'}}>Last 3 days</label>
            </div>
            <div>
              <input type="radio" id="age4" />
              <label htmlFor="age4" style={{margin:'auto 5px',fontSize:'14px'}}>Last 7 days</label>
            </div>
          </div>
          )
}
        </div>
        <hr/>
        <div className="filterSection">
        <div className='filtermap'>
            <div onClick={showDate}>
              <p>Salary </p>
            </div>
            <div  onClick={openToggle1}>
           {show1?<ExpandMoreIcon />:<ExpandLessIcon/>} 
          </div>
          </div>
          {show1&&(
          <div className='boxcheck'>
          <p style={{fontSize:'14px'}}>Minimum monthly salary</p>
          <div className="salarySlider">
            <p style={{fontSize:'14px'}}>&#8377; 0</p>
            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" />
            <div className="salaryLabels">
              <p>0</p>
              <p>1.5 Lacs</p>
            </div>
          </div>
          </div>
          )}
        </div>
        <hr/>
        <div className="filterSection">
          <div className="workMode">
          <div className='filtermap'>
            <div onClick={showDate}>
              <p>Work Mode </p>
            </div>
            <div  onClick={openToggle2}>
           {show2?<ExpandMoreIcon />:<ExpandLessIcon/>} 
          </div>
          </div>
          <div className='boxcheck'>
          {show2&&(
          <div>
            <div>
               <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
               <label htmlFor="vehicle1" style={{margin:'auto 5px',fontSize:'14px'}}> Work from home</label>
          </div>
          <div>
               <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
               <label htmlFor="vehicle2" style={{margin:'auto 5px',fontSize:'14px'}}> Work from office</label>
          </div>
          <div>
              <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
              <label htmlFor="vehicle3" style={{margin:'auto 5px',fontSize:'14px'}}> Work from field</label>
          </div>
          </div>
          )}
          </div>
          </div>
        </div>
        <hr/>
        <div className="filterSection">
          <div className="workMode">
          <div className='filtermap'>
            <div onClick={showDate}>
              <p> Work Type </p>
            </div>
            <div  onClick={openToggle3}>
           {show3?<ExpandMoreIcon />:<ExpandLessIcon/>} 
          </div>
          </div>
          <div className='boxcheck'>
          {show3&&(
          <div>
            <div>
               <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
               <label htmlFor="vehicle1" style={{margin:'auto 5px',fontSize:'14px'}}> Full Time</label>
          </div>
          <div>
               <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
               <label htmlFor="vehicle2" style={{margin:'auto 5px',fontSize:'14px'}}> Half Time</label>
          </div>
          </div>
          )}
          </div>
          </div>
        </div>
        <hr/>
        <div className="filterSection">
          <div className="workMode">
          <div className='filtermap'>
            <div onClick={showDate}>
              <p>Work Shift </p>
            </div>
            <div  onClick={openToggle4}>
           {show4?<ExpandMoreIcon />:<ExpandLessIcon/>} 
          </div>
          </div>
          <div className='boxcheck'>
            {show4 &&(
         <div>
            <div>
               <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
               <label htmlFor="vehicle1" style={{margin:'auto 5px',fontSize:'14px'}}> Day Shift</label>
          </div>
          <div>
               <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
               <label htmlFor="vehicle2" style={{margin:'auto 5px',fontSize:'14px'}}> Night Shift</label>
          </div>
          </div>
          )}
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>

</>
  )
  return ( 
    <div className='App' >
       <OpenjobModal 
        handleClose={() => setModalOpen(false)} open={modalOpen} setOpen={setModalOpen} 
        />
       {ShowForm()}
    </div>
 );
}
 
export default JobFilter;
