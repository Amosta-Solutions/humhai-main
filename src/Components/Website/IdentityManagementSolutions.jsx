import React, { useState } from 'react'
import IdentityHeroImage from '../Assets/Images/verification-2024.png'
import { MDBBtn } from 'mdb-react-ui-kit';
import VerificationClientSlider from './VerificationClientSlider';
import './style.css'
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import {CardActionArea} from '@mui/material';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import FormIcon from '../Assets/Images/icons/online-form.png'

function IdentityManagementSolutions() {
  return (
    <>
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
                <div className='col-12 text-center' style={{backgroundColor: "aliceblue"}}>
                    <p className='display-6' style={{fontWeight:"400"}}>
                        Trusted by many renowned organisations
                    </p>
                </div>
                <div className='col-1'></div>
                <div className='col-10 text-center my-2'>
                    <VerificationClientSlider/>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
        <div className='container-fluid mb-2'>
            <div className='row'>
                <div className='col-12 text-center' style={{backgroundColor: "aliceblue"}}>
                    <p className='display-6' style={{fontWeight:"400"}}>
                        Our comprehensive range of Verification Checks
                    </p>
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
            <div className='col-12 text-center' style={{backgroundColor: "aliceblue"}}>
                    <p className='display-6' style={{fontWeight:"400"}}>
                        
                        Our Process </p>
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
                            <img src="https://img.icons8.com/doodle/100/graph-report.png" alt='Report'/>
                        </div>
                        <div className='card-body'>
                            <p className='card-title text-center'>
                                <strong>Step 4:</strong> Auto generated reports after process completion
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid my-4'>
            <div className='row'>
            <div className='col-12 text-center' style={{backgroundColor: "aliceblue"}}>
                    <p className='display-6' style={{fontWeight:"400"}}>
                        Why Choose Us ?
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default IdentityManagementSolutions