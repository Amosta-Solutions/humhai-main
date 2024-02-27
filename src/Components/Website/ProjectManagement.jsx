import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import Footer from './Footer';
import project_heder from '../Assets/Images/project heder.jpg';
import MerchantOnboarding from '../Assets/Images/merchant-onboarding.png';
import FieldKYC from '../Assets/Images/field-kyc.png';
import StrategicRecruitment from '../Assets/Images/strategic-recruitment.png';

function ProjectManagement() {
  return (
    <>
      <Navbar />
      <div>
        <img
          src={project_heder}
          alt=''
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
      </div>
      <div className='container my-2'>
        <div className='row'>
          <div className='col-12 text-center'>
            <p className='display-6'>Introduction</p>
            <p align='justify'>
              Amosta Solutions is a dynamic and innovative project management
              company specializing in streamlining merchant onboarding
              processes, conducting comprehensive field KYC (Know Your
              Customer) procedures, and offering strategic recruitment
              services. With a proven track record of excellence, we assist
              businesses across various industries in achieving operational
              efficiency, regulatory compliance, and sustainable growth.
            </p>
          </div>
          <div className='col-12 text-center'>
            <p className='display-6'>Our Services</p>
          </div>
          <div className='col-md-4'>
            <MDBCard>
              <MDBCardImage src={MerchantOnboarding} position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle>Merchant Onboarding</MDBCardTitle>
                <MDBCardText>
                  <p align='justify'>
                    Seamless Solutions excels in providing end-to-end merchant
                    onboarding solutions that facilitate seamless and swift
                    integration of new businesses into your platform. Our team
                    of experts ensures that the entire process, from
                    application submission to account activation, is smooth
                    and hassle-free for both merchants and your organization.
                    We utilize cutting-edge technology to automate workflows,
                    minimize manual intervention, and reduce processing times,
                    enhancing the overall merchant experience.
                  </p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className='col-md-4'>
            <MDBCard>
              <MDBCardImage src={FieldKYC} position='top' alt='Field KYC' />
              <MDBCardBody>
                <MDBCardTitle>Field KYC</MDBCardTitle>
                <MDBCardText>
                  <p align='justify'>
                    We understand the critical importance of robust KYC
                    processes in mitigating risks and adhering to regulatory
                    requirements. Our dedicated team conducts comprehensive
                    field KYC checks, verifying the authenticity of merchant
                    information through physical visits and thorough
                    documentation. By combining advanced verification
                    technologies and meticulous attention to detail, we help
                    our clients establish a strong foundation of trust and
                    compliance.
                  </p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className='col-md-4'>
            <MDBCard>
              <MDBCardImage
                src={StrategicRecruitment}
                position='top'
                alt='Strategic Recruitment'
              />
              <MDBCardBody>
                <MDBCardTitle>Strategic Recruitment</MDBCardTitle>
                <MDBCardText>
                  <p align='justify'>
                    At Amosta Solutions, we believe that human capital is the
                    driving force behind successful enterprises. As an integral
                    part of our project management approach, we offer tailored
                    recruitment services to fulfill your organization's staffing
                    needs. Whether you require skilled personnel for specific
                    projects, temporary support during peak periods, or
                    long-term talent acquisition, our experienced recruiters
                    identify and secure candidates who align with your
                    company's values, culture, and goals.
                  </p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
        <div className='row my-2'>
          <div className='col-12 text-center'>
            <p className='display-6'>Why Choose Us?</p>
          </div>
          <div className='col-md-3'>
            <div className='card shadow'>
              <p>
                <strong>Expertise and Experience</strong>
              </p>
              <p align='justify' className='p-2'>
                Our team comprises seasoned professionals with extensive
                industry knowledge, ensuring that your projects are executed
                flawlessly and in accordance with the latest industry trends.
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card shadow'>
              <p>
                <strong>Customized Solutions</strong>
              </p>
              <p align='justify' className='p-2'>
                We understand that every business is unique. Our solutions are
                tailor-made to address your specific requirements, helping you
                achieve optimal outcomes.
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card shadow'>
              <p>
                <strong>Cutting-edge Technology</strong>
              </p>
              <p align='justify' className='p-2'>
                By harnessing the power of advanced technologies, we streamline
                processes, reduce errors, and enhance overall operational
                efficiency.
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card shadow'>
              <p>
                <strong>Compliance and Security</strong>
              </p>
              <p align='justify' className='p-2'>
                Our strict adherence to regulatory standards guarantees that
                your operations remain compliant at all times. We prioritize
                data security and privacy, employing the latest safeguards to
                protect sensitive information.
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card shadow'>
              <p>
                <strong>End-to-End Support</strong>
              </p>
              <p align='justify' className='p-2'>
                From project inception to successful completion, we provide
                comprehensive support, ensuring that you remain well-informed
                and confident throughout the entire engagement.
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card shadow'>
              <p>
                <strong>Cost-Effective Solutions</strong>
              </p>
              <p align='justify' className='p-2'>
                Our services are designed to deliver value while optimizing
                costs, enabling you to allocate resources efficiently and
                achieve a favorable return on investment.
              </p>
            </div>
          </div>
        </div>
        <div className='row my-2'>
          <div className='col-12'>
            <p align='justify'>
              <strong>
                Amosta Solutions is your trusted partner in achieving excellence
                in merchant onboarding, field KYC processes, and strategic
                recruitment. With a commitment to innovation, reliability, and
                client satisfaction, we empower businesses to thrive in a
                competitive landscape. By choosing Amosta Solutions, you gain a
                strategic advantage that propels your organization towards
                sustainable growth and success. Contact us today to embark on a
                journey of seamless integration, compliance, and talent
                acquisition.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectManagement;
