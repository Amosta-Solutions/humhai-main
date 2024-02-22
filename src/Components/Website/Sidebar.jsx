import React from 'react'
import './sidebar.css'
import logo from '../Assets/Images/hum-hai-logo-2023.png'
import GridViewIcon from '@mui/icons-material/GridView';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Sidebar = () => {
  return (
    <>
    <div className="header">
    <img src={logo} className='circular--portrait' alt=''/>
    <span style={{display:'flex',flexDirection:'column'}}>
       <span style={{fontSize:'13px',fontWeight:'bold'}}>Amosta Solutions Pvt. Ltd.</span>
       <span style={{fontSize:'12px'}}> Personal Group</span>
       </span>
           <div className="header-right">
            <div>
             <button className='butt'style={{marginRight:'20px'}} >Post Job</button>
             <button className='but'>SA</button>
             </div>
           </div>
    </div>
    <div>
   <div class="sidebar">
      <a href="#home">
       <GridViewIcon style={{fontSize:"26px"}}/> DASHBOARD</a>
     <a href="#services">
       <WorkOutlineIcon style={{fontSize:"26px"}}/> JOBS</a>
     <a href="#clients">
       <PeopleOutlineIcon style={{fontSize:"26px"}}/> TABLENT POOL</a>
     <a href="#contact">
       <CalendarTodayIcon style={{fontSize:"26px"}}/> INTERVIEWS</a>
     <a href="#home">
       <ChatBubbleOutlineIcon style={{fontSize:"26px"}}/> CHATS</a>
     <a href="#services">
    <CurrencyRupeeIcon style={{fontSize:"26px"}}/> PRICING</a>
  </div>
    </div>

    <div style={{textAlign:'center',padding:'10px'}}>Sidebar 🌍🧑🏻‍💻</div>

    </>
  )
}

export default Sidebar