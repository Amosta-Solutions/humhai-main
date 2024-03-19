import React from "react";
import IdentityHeroImage from "../Assets/Images/verification-2024.png";
import { MDBBtn } from "mdb-react-ui-kit";
import VerificationClientSlider from "./VerificationClientSlider";
import "./style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import Footer from "./Footer";

function IdentityManagementSolutions() {

  return (
    <>
    <Navbar/>
        <div className='container-fluid'>
            <div className='row identity-management-solutions-home-hero-banner'>
                <div className='col-md-6'>
                    <h1 className='identity-management-hero-banner-text'>
                        Identity Management Solutions
                    </h1><br/>
                    <h2  className='identity-management-hero-banner-text'>
                        Get your Workforce verified with our tailormade verification solutions that suits you the best.
                    </h2><br/>
                    <MDBBtn color='danger'>Contact Sales</MDBBtn>
                </div>
                <div className='col-md-6'>
                    <img className='img-fluid' src={IdentityHeroImage} alt='Identity Management Solutions'/>
                </div>
            </div>
        </div>
        <div className='container-fluid my-3'>
            <div className='row'>
                    <div className='col-12 text-center seven d-none d-md-block'>
                        <h1 className='display-6 '>
                            Trusted by many renowned organisations
                        </h1>

                        {/* Shown on medium screens and larger */}
                    </div>
                    <div className='col-12 text-center d-md-none'>
                        <h1 className='display-6 '>
                            Trusted by many renowned organisations
                        </h1>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-10 text-center my-2'>
                        <VerificationClientSlider />
                    </div>
                    <div className='col-1'></div>
            </div>
        </div>
        <div className='container-fluid mb-2'>
            <div className='row'>
                    <div className='col-12 text-center seven d-none d-md-block'>
                        <h1 className='display-6 '>
                              Our comprehensive range of Verification Checks
                        </h1>
                    </div>
                    <div className='col-12 text-center d-md-none'>
                        <h1 className='display-6 '>
                              Our comprehensive range of Verification Checks
                        </h1>
                </div>
                <div className='col-md-4 text-center my-2'>
                    <Card sx={{ minWidth: 275 }} className='verification-box-border'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Reference Check
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-md-4 text-center my-2'>
                    <Card sx={{ minWidth: 275 }} className='verification-box-border'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Address Verification
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-md-4 text-center my-2'>
                    <Card sx={{ minWidth: 275 }} className='verification-box-border'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Physical Address Verification
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-md-4 text-center my-2'>
                    <Card sx={{ minWidth: 275 }} className='verification-box-border'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Qualitative Public Image Check
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-md-4 text-center my-2'>
                    <Card sx={{ minWidth: 275 }} className='verification-box-border'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Document Verification
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-md-4 text-center my-2'>
                    <Card sx={{ minWidth: 275 }} className='verification-box-border'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Employment Verification
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-md-4 text-center my-2'>
                    <Card sx={{ minWidth: 275 }} className='verification-box-border'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Education Verification
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-md-4 text-center my-2'>
                    <Card sx={{ minWidth: 275 }} className='verification-box-border'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Global Database Check
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-md-4 text-center my-2'>
                    <Card sx={{ minWidth: 275 }} className='verification-box-border'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Police Verification
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-md-4 text-center my-2'>
                    <Card sx={{ minWidth: 275 }} className='verification-box-border'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Criminal Record Verification
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-md-4 text-center my-2'>
                    <Card sx={{ minWidth: 275 }} className='verification-box-border'>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Politically Exposed Person (PEP)
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        <div className='container-fluid my-4'>
           
           
                <div className='row'>
                    
                    <div className='col-12 text-center seven d-none d-md-block'>
                        <h1 className='display-6 '>
                        Our Process
                        </h1>
                    </div>
                    <div className='col-12 text-center d-md-none'>
                        <h1 className='display-6 '>
                        Our Process
                        </h1>
                        </div>
            </div>
            <div className='row my-2'>
                <div className='col-md-3'>
                    <div className='card shadow'>
                        <div className='card-image text-center'>
                            <img src="https://img.icons8.com/external-filled-outline-lima-studio/100/external-fill-taxes-filled-outline-lima-studio.png" alt='Online Form'/>
                        </div>
                        <div className='card-body'>
                            <p className='card-title text-center'>
                                <strong>Step 1:</strong> Data & document collection through online form
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card shadow'>
                        <div className='card-image text-center'>
                            <img src="https://img.icons8.com/external-outline-berkahicon/100/external-xray-linely-aviation-outline-berkahicon.png" alt='Form Screening'/>
                        </div>
                        <div className='card-body'>
                            <p className='card-title text-center'>
                                <strong>Step 2:</strong> Screening of collected data/documents
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card shadow'>
                        <div className='card-image text-center'>
                            <img src="https://img.icons8.com/fluency/100/popular-man.png" alt='Verification Expert'/>
                        </div>
                        <div className='card-body'>
                            <p className='card-title text-center'>
                                <strong>Step 3:</strong> Verification process is conducted by our experts
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card shadow'>
                        <div className='card-image text-center'>
                            <img src="https://img.icons8.com/fluency/100/graph-report.png" alt='Reports'/>
                        </div>
                        <div className='card-body'>
                            <p className='card-title text-center'>
                                <strong>Step 4:</strong> Auto-generated reports after process completion
                            </p>
                        </div>
                    </div>
                </div>
              </div>
            
        </div>
        <div className='container-fluid my-4'>
        <div className='row'>
                    
                    <div className='col-12 text-center seven d-none d-md-block'>
                        <h1 className='display-6 '>
                             Why Choose Us ?
                        </h1>
                        <p align='justify'>As a background verification agency, our commitment to excellence sets us apart from others in the industry. Here are several reasons why our agency stands out:</p>
                    </div>
                    <div className='col-12 text-center d-md-none'>
                        <h1 className='display-6 '>
                             Why Choose Us ?
                        </h1>
                        <p align='justify'>As a background verification agency, our commitment to excellence sets us apart from others in the industry. Here are several reasons why our agency stands out:</p>
            </div>
            </div>    
            <div className='row my-3'>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src="https://img.icons8.com/nolan/150/accuracy.png" className="img-fluid rounded-start card-side-image mt-4" alt="accuracy"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Accuracy and Thoroughness</h5>
                                    <p className="card-text" align='justify'>We prioritize accuracy and thoroughness in our background checks. Our team is dedicated to conducting comprehensive investigations to provide our clients with the most reliable and detailed information.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src="https://img.icons8.com/color-glass/150/courthouse.png" className="img-fluid rounded-start card-side-image mt-4" alt="courthouse"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Compliance and Legal Expertise</h5>
                                    <p className="card-text" align='justify'>Staying abreast of the latest laws and regulations is crucial in background verification. We are committed to strict compliance with local, state, and federal laws, ensuring that all our practices align with legal standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src="https://img.icons8.com/cotton/150/browser-extensions.png" className="img-fluid rounded-start card-side-image mt-4" alt="Customize"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Customized Solutions</h5>
                                    <p className="card-text" align='justify'>We understand that each client has unique requirements. We offer customized background verification solutions tailored to meet the specific needs of our clients, whether they are individuals, businesses, or organizations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src="https://img.icons8.com/avantgarde/200/circuit.png" className="img-fluid rounded-start card-side-image" alt="Technology"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Advanced Technology</h5>
                                    <p className="card-text" align='justify'>We leverage cutting-edge technology and advanced tools to enhance the efficiency and accuracy of our background checks. Our commitment to staying technologically current allows us to deliver results in a timely and reliable manner.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src="https://img.icons8.com/nolan/150/time.png" className="img-fluid rounded-start card-side-image mt-4" alt="Time"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Fast Turnaround Time</h5>
                                    <p className="card-text" align='justify'>We prioritize efficiency without compromising accuracy. Our streamlined processes and efficient workflow enable us to provide fast turnaround times, ensuring that our clients receive the information they need promptly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src="https://img.icons8.com/external-flat-satawat-anukul/150/external-communication-communication-flat-flat-satawat-anukul-28.png" className="img-fluid rounded-start card-side-image mt-4" alt="Customer Care"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Customer Service Excellence</h5>
                                    <p className="card-text" align='justify'>Our dedication to exceptional customer service is unwavering. We prioritize clear communication, responsiveness, and transparency throughout the process. Our team is always ready to address any queries or concerns our clients may have.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src="https://img.icons8.com/3d-fluency/150/globe-africa.png" className="img-fluid rounded-start card-side-image mt-4" alt="Globe"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Global Reach</h5>
                                    <p className="card-text" align='justify'>With a global perspective, we have the capability to conduct background verifications on an international scale. Whether your needs extend locally or globally, our agency has the resources and network to provide comprehensive services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src="https://img.icons8.com/fluency/150/safety-care.png" className="img-fluid rounded-start card-side-image mt-4" alt="Security"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Data Security and Confidentiality</h5>
                                    <p className="card-text" align='justify'>We recognize the sensitivity of the information we handle. Our agency prioritizes data security and confidentiality, implementing robust measures to protect our clients' information throughout the verification process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 my-2 ml-2'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4 text-center">
                                <img src="https://img.icons8.com/stickers/150/improvement.png" className="img-fluid rounded-start card-side-image mt-4" alt="Improve"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Continuous Improvement</h5>
                                    <p className="card-text" align='justify'>We are committed to continuous improvement. Regular training, staying updated on industry best practices, and incorporating feedback from clients contribute to our ongoing efforts to enhance the quality and efficiency of our services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default IdentityManagementSolutions;
