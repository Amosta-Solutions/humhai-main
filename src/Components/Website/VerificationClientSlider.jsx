import React, { Component } from "react";
import Slider from "react-slick";
import CapgeminiLogo from '../Assets/Images/clients/Verification/capgemini.png'
import DPSLogo from '../Assets/Images/clients/Verification/dps.png'
import HCLLogo from '../Assets/Images/clients/Verification/hcl.png'
import HindustanSecuritiesLogo from '../Assets/Images/clients/Verification/hindustan-securities.png'
import HSBCLogo from '../Assets/Images/clients/Verification/hsbc.png'
import InfosysLogo from '../Assets/Images/clients/Verification/infosys.png'
import KnorrBremseLogo from '../Assets/Images/clients/Verification/knorr-bremse.png'
import PathwaysLogo from '../Assets/Images/clients/Verification/pathways-schools.png'
import SietzLogo from '../Assets/Images/clients/Verification/sietz.png'
import STJLogo from '../Assets/Images/clients/Verification/stj.png'
import BritishSchoolLogo from '../Assets/Images/clients/Verification/the-british-school.png'
import VacoBinaryLogo from '../Assets/Images/clients/Verification/vaco-binary-semantics.png'

export default class VerificationClientSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
  
    return (
      <div>
        <Slider {...settings}>
          <div className="mx-2">
            <img src={CapgeminiLogo} alt="Capgemini Logo" className="img-fluid logo-slider"/>
          </div>
          <div className="mx-2">
            <img src={DPSLogo} alt="DPS Logo" className="img-fluid logo-slider"/>
          </div>
          <div className="mx-2">
            <img src={HCLLogo} alt="HCL Logo" className="img-fluid logo-slider"/>
          </div>
          <div className="mx-2">
            <img src={HindustanSecuritiesLogo} alt="Hindustan Securities Logo" className="img-fluid logo-slider"/>
          </div>
          <div className="mx-2">
            <img src={HSBCLogo} alt="HSBC Logo" className="img-fluid logo-slider"/>
          </div>
          <div className="mx-2">
            <img src={InfosysLogo} alt="Infosys Logo" className="img-fluid logo-slider"/>
          </div>
          <div className="mx-2">
            <img src={KnorrBremseLogo} alt="Knorr Bremse Logo" className="img-fluid logo-slider"/>
          </div>
          <div className="mx-2">
            <img src={PathwaysLogo} alt="Pathways Logo" className="img-fluid logo-slider"/>
          </div>
          <div className="mx-2">
            <img src={SietzLogo} alt="Sietz Logo" className="img-fluid logo-slider"/>
          </div>
          <div className="mx-2">
            <img src={STJLogo} alt="STJ Logo" className="img-fluid logo-slider"/>
          </div>
          <div className="mx-2">
            <img src={BritishSchoolLogo} alt="The British School Logo" className="img-fluid logo-slider"/>
          </div>
          <div className="mx-2">
            <img src={VacoBinaryLogo} alt="Vaco Binary Logo" className="img-fluid logo-slider"/>
          </div>
        </Slider>
      </div>
    );
  }
}