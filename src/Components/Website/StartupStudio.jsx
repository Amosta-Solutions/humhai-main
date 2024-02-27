import React from 'react'
import StartUpIntoBanner from '../Assets/Images/market-launch-2.png'
import startup from '../Assets/Images/startup.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';
import Footer from './Footer';

export default function StartUpStudio() {
  return (
    <div>    
      <Navbar/>
              <div >
          <img src={startup} alt='' style={{width:'100%',height:'300px',objectFit:'cover'}}/>
        </div>
      <div className='container-fluid'>
        <div className='row my-3'>
          <div className='col-12 text-center'>
            <h1 className='display-6' style={{fontWeight:'500'}}>Amosta <span className='title-background'>Start-Up Studio</span>: The Concept</h1>
          </div>
          <div className='col-md-6 text-center my-2'>
            <img className='img-fluid' src={StartUpIntoBanner} alt='Start Up Studio Banner'/>
          </div>
          <div className='col-md-6 my-2'>
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="body2">
                  <p align='justify'>
                  A startup studio, also known as a venture builder or a startup factory, is an organization that creates and launches new companies by developing and nurturing innovative ideas into successful businesses. Unlike traditional venture capital firms that primarily provide funding to startups, startup studios are actively involved in the ideation, development, and launch of new ventures.
                  </p>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }} className='my-2'>
              <CardContent>
                <Typography variant="body2">
                  <p align='justify'>
                  In Amosta Startup Studio, a team of experts from different fields such as business, technology, marketing, and design work together to identify market opportunities, validate ideas, build prototypes, and test business models. Once a promising idea is identified, the team will create a new startup company around it, provide seed funding, and guide it through the early stages of growth.
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
