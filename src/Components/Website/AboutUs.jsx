import React from 'react'
import HumHaiLogoWithoutSlogan from '../Assets/Images/hum-hai-no-slogan.png'

function AboutUs() {
  return (
    <>
        <div className='container-fluid'>
            <div className='row about-us-home-hero-banner'>
                <div className='col-md-6 text-center'>
                    <img src={HumHaiLogoWithoutSlogan} alt='Hum Hai Logo withot slogan'/>
                    <div className='text-container-2'>
                        <ul className="dynamic-text">
                            <li className="item-2">अवसर सबके लिए</li>
                            <li className="item-2">Opportunities For All</li>
                            <li className="item-2">ସମସ୍ତଙ୍କୁ ସୁଯୋଗ</li>
                            <li className="item-2">সকলোৰে বাবে সুযোগ</li>
                            <li className="item-2">ಎಲ್ಲರಿಗೂ ಅವಕಾಶ</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6 text-center'>
                अवसर सबके लिए
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs