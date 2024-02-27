import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/amostasolutions/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/amostasolutions' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.youtube.com/c/AmostaSolutions' className='me-4 text-reset'>
            <MDBIcon fab icon="youtube" />
          </a>
          <a href='https://www.instagram.com/amostasolutions/?hl=en' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/company/amosta-solutions-pvt--ltd-/mycompany/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Amosta Solutions PVT Ltd
              </h6>
              <p>
              Amosta is a technology company, committed to cater the requirements of the people to live a better & happy life in era of internet of things, futuristic smart cities, connected world & super intelligent ecosystem.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='softwaresolution' className='text-reset'>
                  Web Development
                </a>
              </p>
              <p>
                <a href='backgroundcheck' className='text-reset'>
                  Background Check
                </a>
              </p>
              <p>
                <a href='projectmanagement' className='text-reset'>
                  Strategic Recruitment
                </a>
              </p>
              <p>
                <a href='projectmanagement' className='text-reset'>
                  Project Management
                </a>
              </p>
            </MDBCol>

            <MDBCol md="6" lg="6" xl="6" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                301-B, Flatted Factory Complex, Hartron Technology Park Plot No. 25A, Electronic City, Sector 18, Gurugram, Haryana 122015
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                sales@amosta.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 124 4215321
              </p>
              <p>
                <MDBIcon icon="mobile" className="me-3" /> + 91 8750060033
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#D7D7D7' }}>
        © 2024 Copyright: <a className='text-reset fw-bold' href='https://www.amosta.com/'> Amosta Solutions Private Limited
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer