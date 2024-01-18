import React from 'react'
import IdentityHeroImage from '../Assets/Images/verification-2024.png'
import { MDBBtn } from 'mdb-react-ui-kit';
import VerificationClientSlider from './VerificationClientSlider';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
                <div className='col-12 text-center'>
                    <p className='display-6'>
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
                <div className='col-12 text-center'>
                    <p className='display-6'>
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
        <div className='container-fluid my-2'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <p className='display-6'>Our Process</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default IdentityManagementSolutions