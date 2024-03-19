import React from 'react'
import IdentityHeroImage from "../Assets/Images/Software Solutions- Banner.jpg";
import Navbar from "./Navbar";
import Footer from './Footer';
import f1 from './../Assets/Images/Content Management Systems.jpg'
import f2 from './../Assets/Images/Custom Website Development.jpg'
import f3 from './../Assets/Images/E-Commerce Solutions.jpg'
import f4 from './../Assets/Images/Mobile App Development.jpg'
import f5 from './../Assets/Images/SEO & Digital Marketing.jpg'
import f6 from './../Assets/Images/Web Application Development.jpg'
import f7 from './../Assets/Images/Website Maintenance.jpg'

export const SoftwareSolution = () => {
  return (
    <div>
          <Navbar/>
        <div className='container-fluid'>
                <div>
                    <img className='img-fluid' src={IdentityHeroImage} alt='Identity Management Solutions'/>
                </div>
            </div>
        <div className='container-fluid my-4'>
        <div className='row'>
                    
                    <div className='col-12 text-center seven d-none d-md-block'>
                        <h1 className='display-6 '>
                             Why Choose Us ?
                        </h1>
                        {/* <p align='justify'>As a background verification agency, our commitment to excellence sets us apart from others in the industry. Here are several reasons why our agency stands out:</p> */}

                        {/* Shown on medium screens and larger */}
                    </div>
                    <div className='col-12 text-center d-md-none'>
                        <h1 className='display-6 '>
                             Why Choose Us ?
                        </h1>
                        {/* <p align='justify'>As a background verification agency, our commitment to excellence sets us apart from others in the industry. Here are several reasons why our agency stands out:</p> */}
            </div>
            </div>
                       
                    
            <div className='row my-3'>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src={f2} className="img-fluid rounded-start card-side-image mt-4" alt="accuracy"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Custom Website Development</h5>
                                    <p className="card-text" align='justify'>We specialize in crafting bespoke websites that align perfectly with your brand identity and business goals. Our developers use cutting-edge technologies and best practices to create user-friendly, responsive, and visually captivating websites that leave a lasting impression on your visitors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src={f6} className="img-fluid rounded-start card-side-image mt-4" alt="courthouse"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Web Application Development</h5>
                                    <p className="card-text" align='justify'>Need a powerful web application to streamline your business processes or engage your audience? Our expert developers have experience in creating feature-rich web applications tailored to your specific needs. From project management tools to social media platforms, we've got the expertise to bring your ideas to life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src={f1} className="img-fluid rounded-start card-side-image mt-4" alt="Customize"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Content Management Systems</h5>
                                    <p className="card-text" align='justify'>Take control of your website's content with our customized CMS solutions. We empower you to update and manage your website effortlessly, even if you have no technical background. Say goodbye to dependence on developers for every small change.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src={f3} className="img-fluid rounded-start card-side-image" alt="Technology"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">E-Commerce Solutions</h5>
                                    <p className="card-text" align='justify'>Ready to take your business online and tap into the vast potential of e-commerce? Our team can build robust, secure, and scalable e-commerce platforms that enable you to showcase your products and services effectively. We focus on optimizing the user experience to increase conversion rates and drive sales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src={f4} className="img-fluid rounded-start card-side-image mt-4" alt="Time"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Mobile App Development</h5>
                                    <p className="card-text" align='justify'>Extend your reach to mobile users with our mobile app development services. Whether you need an iOS, Android, or cross-platform app, we leverage the latest technologies to build high-performance, user-friendly, and visually appealing mobile applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src={f7} className="img-fluid rounded-start card-side-image mt-4" alt="Customer Care"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Website Maintenance</h5>
                                    <p className="card-text" align='justify'>Once your website or application is up and running, we don't stop there. Our team provides ongoing maintenance and support services to ensure your platform stays secure, updated, and optimized for peak performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src={f5} className="img-fluid rounded-start card-side-image mt-4" alt="Globe"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">SEO & Digital Marketing</h5>
                                    <p className="card-text" align='justify'>Having a fantastic website is not enough if your target audience can't find it. We offer SEO and digital marketing strategies to boost your online visibility, drive organic traffic, and increase your conversion rates. Let us help you climb the search engine rankings and stand out from the competition.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        <Footer/>
    </div>
  )
}
