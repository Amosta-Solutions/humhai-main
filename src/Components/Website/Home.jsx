import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HumHaiHeaderLogo from '../Assets/Images/hum-hai-header-2023.png'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  // MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import JobSearch from '../Assets/Images/job-search.png'
import BusinessOpportunity from '../Assets/Images/business-opportunity.png'
import StartUp from '../Assets/Images/start-up.png'
import SkillDevelopment from '../Assets/Images/skill.png'
import Verification from '../Assets/Images/verification-2.png'
import Recruitment from '../Assets/Images/recruitment.png'
import it from '../Assets/Images/it.jpg'
import project_managment from '../Assets/Images/project_managment.jpg'
import Navbar from '../Website/Navbar'

const Home = () => {
  const [hover,setHover] =useState(false)
  const language = ["Job Seeker", "Employer", "Freelancer", "Willing to start your own business", "In search of software solutions", "Theater Enthusiast", "Looking to host events"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    arrows: false, 
  };
  const text ="Show your creative side to the world with our skill development classes in dance/acting/public speaking."
  return (
    <>
    <Navbar/>
      <div className='row gx-0 home-hero-banner'>
        <div className='col-md-6 text-center'>
          <p className='display-6'>If you are</p>
          <Slider {...settings} style={{ color:'#f16136',}} >
            {language.map((text, index) => (
              <div key={index} className="item" style={{color:'#F06135'}}>
                {text}
              </div>
            ))}
          </Slider>
          <p className='display-6 my-3'>We got you covered</p>
          <p><MDBBtn className='btn-bg-color'>Contact Us</MDBBtn></p>
        </div>
        <div className='col-md-6 text-center'>
          <img src={HumHaiHeaderLogo} alt='Banner' className='img-fluid'/>
        </div>
      </div>
      <div className='container-fluid my-4'>
        <div className='row'>
          <div className='col-12 text-center'>
            <p className='display-6 quote'>
              "Expect change. Analyze the landscape. Take the opportunities. Stop being the chess piece; become the player. It's your move." 
            </p>
          </div>
        </div>
      </div>
      <div className='container-fluid my-4'>
        <div className='row'>
          <div className='col-12 text-center seven d-none d-md-block'>
            <h1 className='display-6 '>
              What Do We Offer?
            </h1>

            {/* Shown on medium screens and larger */}
          </div>
          <div className='col-12 text-center d-md-none'>
            <h1 className='display-6 '>
              What Do We Offer?
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 text-center my-2'>
            <MDBCard className='card-box'>
              <img className='img-fluid text-center' src={JobSearch} alt="Job Search"/>
              <MDBCardBody>
                <MDBCardTitle>Job Search Redefined</MDBCardTitle>
                <MDBCardText>
                  <p align='justify'>Find a job that suits you the best. And if you are looking to expand your workforce, leave it on us.</p>
                </MDBCardText>
                <MDBBtn className='btn-block btn-bg-color' href='#'>Lets Go</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className='col-md-3 text-center my-2'>
            <MDBCard className='card-box'>
              <img className='img-fluid text-center' src={BusinessOpportunity} alt="Business Opportunity"/>
              <MDBCardBody>
                <MDBCardTitle>Business Opportunities</MDBCardTitle>
                <MDBCardText>
                  <p align='justify'>Start your own business with minimum or no investment and be your own boss. </p>
                </MDBCardText>
                <MDBBtn className='btn-block btn-bg-color' href='#'>Lets Go</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className='col-md-3 text-center my-2'>
            <MDBCard className='card-box'>
              <img className='img-fluid text-center' src={StartUp} alt="StartUp Studio"/>
              <MDBCardBody>
                <MDBCardTitle>Start Up Studio</MDBCardTitle>
                <MDBCardText>
                  <p align='justify'>If you have an <strong>Entrepreneur</strong> inside you, we can help convert your idea into an actual business.</p>
                </MDBCardText>
                <MDBBtn className='btn-block btn-bg-color' href='#'>Lets Go</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className='col-md-3 text-center my-2'>
            <MDBCard className='card-box'>
              <img className='img-fluid text-center' src={SkillDevelopment} alt="StartUp Studio"/>
              <MDBCardBody>
                <MDBCardTitle>Skill Development</MDBCardTitle>
                <MDBCardText onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                  {
                   !hover?<p align='justify'>{text.substring(0, 95)+ "..." }</p>: <p align='justify'>{text}</p>
                  }
                  
                 
                </MDBCardText>
                <MDBBtn className='btn-block btn-bg-color' href='#'>Lets Go</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
      <div className='container-fluid my-4'>
        <div className='row'>
          <div className='col-12 text-center seven d-none d-md-block'>
            <h1 className='display-6 '>
              Our Services
            </h1>

            {/* Shown on medium screens and larger */}
          </div>
          <div className='col-12 text-center d-md-none'>
            <h1 className='display-6 '>
              Our Services
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 text-center my-2'>
            <MDBCard className='card-box'>
              <img className='img-fluid text-center' src={Verification} alt="Verification"/>
              <MDBCardBody>
                <MDBCardTitle>Background Check</MDBCardTitle>
                <MDBCardText>
                  <p align='justify'>Get your Workforce verified like never before. Check out our tailor made verification plans that suits you the best. </p>
                </MDBCardText>
                <MDBBtn className='btn-block btn-bg-color' href='#'>Lets Go</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className='col-md-3 text-center my-2'>
            <MDBCard className='card-box'>
              <img className='img-fluid text-center' src={Recruitment} alt="Recruitment"/>
              <MDBCardBody>
                <MDBCardTitle>Recruitment</MDBCardTitle>
                <MDBCardText>
                  <p align='justify'>Hire the best talent for your organisation. Be it blue collar workforce or smart tech geeks, we are just a phone call away.</p>
                </MDBCardText>
                <MDBBtn className='btn-block btn-bg-color' href='#'>Lets Go</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className='col-md-3 text-center my-2'>
            <MDBCard className='card-box'>
              <img className='img-fluid text-center' src={it} alt="it" style={{maxWidth:'90%',margin:'auto'}}/>
              <MDBCardBody>
                <MDBCardTitle>Web/App Developer</MDBCardTitle>
                <MDBCardText>
                  <p align='justify'>Innovative web and app solutions tailored to your needs, driving digital growth and delivering exceptional user experiences.</p>
                </MDBCardText>
                <MDBBtn className='btn-block btn-bg-color' href='#'>Lets Go</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className='col-md-3 text-center my-2'>
            <MDBCard className='card-box'>
              <img className='img-fluid text-center' src={Recruitment} alt="Recruitment"/>
              <MDBCardBody>
                <MDBCardTitle>Project Managment</MDBCardTitle>
                <MDBCardText>
                  <p align='justify'>Hire the best talent for your organisation. Be it blue collar workforce or smart tech geeks, we are just a phone call away.</p>
                </MDBCardText>
                <MDBBtn className='btn-block btn-bg-color' href='#'>Lets Go</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home