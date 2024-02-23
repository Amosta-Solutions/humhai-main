import React from 'react';
import Slider from 'react-slick';
import HumHaiLogoWithoutSlogan from '../Assets/Images/hum-hai-no-slogan.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutUsHomeBanner from '../Assets/Images/hum-hai-about-intro.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ManWithLaptop from '../Assets/Images/man-with-laptop.png'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';

const VerticalTextSlider = () => {
  const language = ["अवसर सबके लिए", "Opportunity For All", "ସମସ୍ତଙ୍କୁ ସୁଯୋଗ", "সকলোৰে বাবে সুযোগ", "ಎಲ್ಲರಿಗೂ ಅವಕಾಶ", "എല്ലാവർക്കും അവസരം", "سب کے لئے موقع", "सर्वांसाठी संधी", "அனைவருக்கும் வாய்ப்பு", "সবার জন্য সুযোগ"];

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
  return (
    <>
    <Navbar/>
      <div className='row gx-0 about-us-home-hero-banner'>
        <div className='col-md-6 text-center'>
          <img src={HumHaiLogoWithoutSlogan} alt='Hum Hai Logo withot slogan' style={{ width: '100%', maxWidth: '340px' }} />
          <Slider {...settings} style={{ color:'#000',}} >
            {language.map((text, index) => (
              <div key={index} className="item" style={{color:'#F06135'}}>
                {text}
              </div>
            ))}
          </Slider>
        </div>
        <div className='col-md-6 text-center'>
          <img src={AboutUsHomeBanner} alt='About Us Home Banner' className='img-fluid'/>
        </div>
      </div>
      <div className='container-fluid my-3'>
        <div className='row'>
          <div className='col-12 text-center seven d-none d-md-block'>
            <h1 className='display-6 '>
              Who We Are?
            </h1>

            {/* Shown on medium screens and larger */}
          </div>
          <div className='col-12 text-center d-md-none'>
            <h1 className='display-6 '>
              Who We Are?
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <p align="justify">
              Welcome to Hum Hai, where we believe in transforming dreams into reality and empowering individuals to reach their full potential. At Hum Hai, we are dedicated to providing a comprehensive platform that goes beyond traditional job search and business development services. We are committed to nurturing ideas, fostering creativity, and creating opportunities that transcend conventional boundaries.
            </p>
          </div>
          <div className='col-md-6'>
            <p align="justify">
              At Hum Hai, our mission is to be a catalyst for change in the professional and artistic landscape. We strive to bridge the gap between aspirations and achievements by offering a diverse range of services that encompass job placement, entrepreneurial support, talent development, and event management.
            </p>
          </div>
        </div>
      </div>
      <div className='container-fluid my-3'>
        <div className='row'>
          <div className='col-12 text-center seven d-none d-md-block'>
            <h1 className='display-6 '>
              What Sets Us Apart?
            </h1>

            {/* Shown on medium screens and larger */}
          </div>
          <div className='col-12 text-center d-md-none'>
            <h1 className='display-6 '>
              What Sets Us Apart?
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 text-center my-2'>
            <Card sx={{ maxWidth: '100%' }}>
              <CardActionArea>
                <div className='card-image'>
                  <img width="100" height="100" src="https://img.icons8.com/external-nawicon-flat-nawicon/150/external-Job-Search-recruitment-nawicon-flat-nawicon.png" alt="external-Job-Search-recruitment-nawicon-flat-nawicon"/>
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Job Search Redefined
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align='justify'>
                  We understand that finding the right job is more than just matching skills with requirements. Our platform offers personalized job search assistance, ensuring that individuals not only find employment but also embark on fulfilling career journeys.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className='col-md-4 text-center my-2'>
            <Card sx={{ maxWidth: '100%' }}>
              <CardActionArea>
                <div className='card-image'>
                <img width="100" height="100" src="https://img.icons8.com/cotton/100/businessman.png" alt="businessman"/>
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Entrepreneurial Support
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align='justify'>
                  For those with an entrepreneurial spirit, Hum Hai provides guidance, resources, and mentorship to turn innovative ideas into thriving businesses. From conceptualization to implementation, we are there every step of the way.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className='col-md-4 text-center my-2'>
            <Card sx={{ maxWidth: '100%' }}>
              <CardActionArea>
                <div className='card-image'>
                <img width="100" height="100" src="https://img.icons8.com/external-flaticons-flat-flat-icons/100/external-talent-recruitment-agency-flaticons-flat-flat-icons.png" alt="external-talent-recruitment-agency-flaticons-flat-flat-icons"/>
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Talent Development and Showcase
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align='justify'>
                    Recognizing the abundance of talent in various artistic fields, we offer a dedicated platform for budding stage artists to showcase their skills. Whether you're a musician, actor, or any other performer, Hum Hai is the stage where your talent gets the spotlight it deserves.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className='col-md-4 text-center my-2'>
            <Card sx={{ maxWidth: '100%' }}>
              <CardActionArea>
                <div className='card-image'>
                <img width="100" height="100" src="https://img.icons8.com/color/100/employee-card.png" alt="employee-card"/>
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Internship Opportunities
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align='justify'>
                    We understand the importance of hands-on experience in shaping future leaders. Our internship programs connect aspiring professionals with industry leaders, providing invaluable insights and practical skills for a successful career.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className='col-md-4 text-center my-2'>
            <Card sx={{ maxWidth: '100%' }}>
              <CardActionArea>
                <div className='card-image'>
                <img width="100" height="100" src="https://img.icons8.com/fluency/100/service.png" alt="service"/>
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Services Beyond Boundaries
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align='justify'>
                    Hum Hai goes beyond conventional offerings by providing essential support services. Our background verification services ensure trust and credibility, while our recruitment services streamline the hiring process. Additionally, our expertise in software/web development and event management adds value to the opportunities we create.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
      <div className='container-fluid my-3'>
        <div className='row'>
          <div className='col-12 text-center seven d-none d-md-block'>
            <h1 className='display-6 '>
              Our Core Values
            </h1>

            {/* Shown on medium screens and larger */}
          </div>
          <div className='col-12 text-center d-md-none'>
            <h1 className='display-6 '>
              Our Core Values
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 text-center my-4'>
            <img className='img-fluid' src={ManWithLaptop} alt='man-with-laptop'/>
          </div>
          <div className='col-md-8 my-2'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12 my-2'>
                  <MDBCard style={{ maxWidth: '100%' }}>
                    <MDBRow className='g-0'>
                      <MDBCol md='4' className='text-center my-4'>
                        <MDBCardImage src='https://img.icons8.com/external-others-bzzricon-studio/100/external-women-womens-day-others-bzzricon-studio-3.png' alt='empower' fluid />
                      </MDBCol>
                      <MDBCol md='8'>
                        <MDBCardBody>
                          <MDBCardTitle>Empowerment</MDBCardTitle>
                          <MDBCardText>
                            We empower individuals to take charge of their careers, businesses, and artistic endeavors, providing them with the tools and support they need to succeed.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </div>
                <div className='col-12 my-2'>
                  <MDBCard style={{ maxWidth: '100%' }}>
                    <MDBRow className='g-0'>
                      <MDBCol md='4' className='text-center my-4'>
                        <MDBCardImage src='https://img.icons8.com/clouds/100/innovation.png' alt='innovation' fluid />
                      </MDBCol>
                      <MDBCol md='8'>
                        <MDBCardBody>
                          <MDBCardTitle>Innovation</MDBCardTitle>
                          <MDBCardText>
                            Hum Hai thrives on innovation, whether it's finding unique ways to connect talent with opportunities or developing cutting-edge solutions in software/web development.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </div>
                <div className='col-12 my-2'>
                  <MDBCard style={{ maxWidth: '100%' }}>
                    <MDBRow className='g-0'>
                      <MDBCol md='4' className='text-center my-4'>
                        <MDBCardImage src='https://img.icons8.com/color/100/people-working-together.png' alt='empower' fluid />
                      </MDBCol>
                      <MDBCol md='8'>
                        <MDBCardBody>
                          <MDBCardTitle>Community</MDBCardTitle>
                          <MDBCardText>
                            We believe in the strength of a supportive community. Through networking events, mentorship programs, and collaborative initiatives, we foster a sense of belonging among our members.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalTextSlider;
