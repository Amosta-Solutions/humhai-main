import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import carrer from '../Assets/Images/career.png'
import HumHaiLogo from '../Assets/Images/hum-hai-large.png'

export const Careers = () => {
  return (
    <>
    <Navbar/>
      <div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <img src={carrer} alt='' style={{maxWidth: '100%', height: 'auto', objectFit:'contain', zIndex: -1, width: '100vw', maxHeight: '150vh', }}/>

        </div>
        <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 text-center my-3'>
            <p className='display-6' style={{fontWeight:'500'}}>Kickstart Your Career At Amosta</p>
          </div>
        </div>
        <div className='row my-2'>
          <div className='col-md-6 text-center'>
            <img className='img-fluid' src={HumHaiLogo} alt='Hum Hai Logo'/>
          </div>
          <div className='col-md-6'>
            <p align='justify'>We are looking for some self-motivated, dynamic team mates to join us and help making peoples lives easier.</p>
            <p align='justify'>Please reach us at <a href='mailto:jobs@amosta.com'>jobs@amosta.com</a> and someone from our Talent Acquisition Team will reach out to you. In the meanwhile, do checkout <a href='https://www.humhai.in'>Hum Hai</a>, India's Leading Opportunity Portal and gets access to endless options that suits you the best.</p>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
}
