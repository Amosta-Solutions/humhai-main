import React from 'react';
import Slider from 'react-slick';
import HumHaiLogoWithoutSlogan from '../Assets/Images/hum-hai-no-slogan.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VerticalTextSlider = () => {
  const language = ["अवसर सबके लिए", "Opportunity For All", "ସମସ୍ତଙ୍କୁ ସୁଯୋଗ", "সকলোৰে বাবে সুযোগ", "ಎಲ್ಲರಿಗೂ ಅವಕಾಶ"];

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
          अवसर सबके लिए
        </div>
      </div>
    </>
  );
};

export default VerticalTextSlider;
