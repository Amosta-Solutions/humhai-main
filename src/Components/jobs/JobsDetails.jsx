import React from 'react'
import Navbar from '../Website/Navbar'
import Footer from '../Website/Footer';
import HumHaiLogo from '../Assets/Images/hum-hai-large.png'

export const JobsDetails = () => {
  return (
    <>
    <Navbar/>
    <div style={{ overflowX: 'hidden' }}>
      <div className="container-fluid mt-5 p-2">
        <div className="details background row">
          <div className="col-md-7">
            <div className="d-flex text-start flex-column mx-3 ">
              <h2 className="fw-semibold mt-4">React Js</h2>
              <h2 className="fs-5">Amosta Solution pvt ltd</h2>
              <div className="mt-2 job-details" style={{ display: 'flex', flexDirection: 'row' }}>
                {/* Left side details */}
                <div className="left">
                  <div className="education p-2">
                    <i className="fa-solid fa-book-open-reader me-2"></i>Education: educational_requirement
                  </div>
                  <div className="Experience p-2">
                    <i className="fa-solid fa-business-time me-2"></i>Experience:{' '}
                    {/* {job.is_fresher ? (
                      <span className="badge rounded-pill p-2 me-2 mt-2 text-bg-dark">
                        <i className="fa-solid fa-user-graduate mx-1"></i>Fresher
                      </span>
                    ) : (
                      `${job.minimum_experience}-${job.maximum_experience} (${job.get_experience_unit_display})`
                    )} */}
                  </div>
                </div>
                {/* Right side details */}
                <div className="right">
                  <div className="Salary p-2">
                    <i className="fa-solid fa-indian-rupee-sign me-2"></i>Salary:{' '}
                    {/* {`${job.minimum_salary}-${job.maximum_salary} (${job.get_salary_unit_display})`} */}
                  </div>
                  <div className="Address p-2">
                    <i className="fa-solid fa-location-dot me-2"></i>Location:{' '}
                    {/* {job.is_work_from_home ? (
                      <span className="badge rounded-pill p-2 me-2 mt-2 text-bg-secondary">
                        <i className="fa-solid fa-house-circle-check mx-1"></i>Work from home
                      </span>
                    ) : (
                      `${job.state}, ${job.location}, ${job.district} -${job.pincode}, ${job.country}`
                    )} */}
                  </div>
                </div>
              </div>
              {/* Tags and views */}
              <div className="tags mt-3">
                <span className="badge rounded-pill p-2 me-2 mt-2 text-bg-dark">
                  <i className="fa-solid fa-hourglass-start mx-1"></i>
                  get_job_type_display
                </span>
              </div>
               views
            </div>
          </div>

          <div className="col-md-5 text-center my-auto mx-auto">
            <div className="text-center apply-contact-btnss mt-2">
              <div class="company-logo mt-3">
              <img src={HumHaiLogo} alt='' className="img-fluid"/>
              </div>
              <div>
              <button className="btn button-87 btns mt-3 apply-contact-btn"
               style={{background: 'linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%)', color: 'white',border: 'none', borderRadius: '5px',padding:'10px',width:'200px'}}>Apply</button>
              </div>
              <div>
              <button className="btn button-87 btns mt-3 apply-contact-btn"  style={{background: 'linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%)', color: 'white',border: 'none', borderRadius: '5px',padding:'10px',width:'200px'}}>Contact HR</button>
              </div>
       {/*        {request.user.is_authenticated ? (
                // Buttons for authenticated users
                recruiter.user === request.user ? (
                  <span className="btn button-87 btns mt-3 apply-contact-btn">You have posted this job</span>
                ) : applied ? (
                  <span className="btn button-87 btns mt-3 apply-contact-btn">Applied already!</span>
                ) : !job.is_active ? (
                  <span className="fw-bolder fs-6 border border-2">
                    This job post is not accepting any more applications as it has been withdrawn by the recruiter.
                  </span>
                ) : (
                  // Apply button for regular users
                  <button type="button" className="btn button-87 btns mt-3 apply-contact-btn" onClick={applyForJob}>
                    Apply
                  </button>
                )
              ) : (
                // Buttons for non-authenticated users
                <>
                  <a type="button" className="btn button-87 btns mt-3 apply-contact-btn" href="/login" target="_blank">
                    Login to Apply
                  </a>
                  <div className="gap-1"></div>
                  <a type="button" className="btn button-87 btns mt-3 apply-contact-btn" href="/signup" target="_blank">
                    Register to Apply
                  </a>
                </>
              )}
              <a href="#" className="btn button-87 btns mt-3 apply-contact-btn">
                Contact HR
              </a>*/}
            </div>
          </div> 
        </div>

        {/* Job requirements */}
        <div className="row">
          <div className="col-md-7 mt-4">
            <div className="requirements border border-dark rounded shadow shadow-md border-opacity-50 p-2">
              <h4 className="text-center">Skill Set Required</h4>
              <div className="row">
                {/* {job.skills.map((skill, index) => ( */}
                  <div className="col-sm-12 col-md-6" >
                    <p>
                      <i className="fa-solid fa-caret-right me-2 text-success mb-2"></i>
                      <b>skill</b><br/>
                      <i className="fa-solid fa-caret-right me-2 text-success mb-2"></i>
                      <b>Good Communication</b><br/>
                      <i className="fa-solid fa-caret-right me-2 text-success mb-2"></i>
                      <b>Create a responsive website</b><br/>
                      <i className="fa-solid fa-caret-right me-2 text-success mb-2"></i>
                      <b>Next JS, HTML, CSS, JAVASCRICPT, MONGODB</b><br/>
                    </p>
                  </div>
                {/* ))} */}
              </div>
            </div>
          </div>
          {/* ... (stepper or other components) */}
        </div>

        <hr />

        {/* Job description */}
        <div className="job-description mx-2 mt-4 row">
          <div className="col-xl-7 col-sm-12 border-end">
            <h2 className="">Job Description</h2>
            <p align="justify">job.job_description</p>
            {/* ... (horizontal line and other details) */}
            Key Responsibilities:
•
Client Acquisition: Identify and target potential clients, including B2B and B2C businesses, and develop strategies to acquire new clients for our digital marketing services.
•
Sales Strategy: Develop and implement effective sales strategies to meet and exceed sales targets, including revenue and client acquisition goals.
•
Client Relationship Management: Build and maintain strong, long-lasting client relationships by understanding their needs, providing solutions, and ensuring high client satisfaction.
•
Product Knowledge: Stay up-to-date with the latest digital marketing trends and technologies to effectively communicate the value of our services to clients.
•
Sales Presentations: Prepare and deliver compelling sales
presentations to potential clients, showcasing our digital
marketing capabilities and the benefits of working with Qwerty Brands Solutions.
•
Sales Reporting: Track and report on sales performance, pipeline, and forecasts using CRM tools.
•
Team Collaboration: Collaborate with internal teams, including marketing, creative, and technical teams, to ensure seamless execution of digital marketing campaigns.
Qualifications:
•
Bachelor's degree in Business, Marketing, or a related field.
•
Proven experience as a sales Manager or similar role in the digital marketing industry.
•
Strong understanding of digital marketing services, including SEO, PPC, social media marketing, content marketing, and web development.
•
Excellent communication, negotiation, and interpersonal skills.
•
Demonstrated ability to meet and exceed sales targets.
•
Experience with Microsoft Office software is a plus.
•
Self-motivated, results-oriented, and able to work independently.
•
Strong analytical and problem-solving skills.
Benefits:
•
Competitive salary and performance-based incentives.
•
Opportunity to work with a dynamic and innovative team.
•
Ongoing training and professional development opportunities.
Collaborative and inclusive work environment.
          </div>

          <div className="col-xl-5 col-sm-12 mt-4 posted-by" style={{ paddingLeft: '72px' }}>
            {/* ... (job posted by details) */}
            <h2 style={{fontWeight:'500px'}}>Job Posted By</h2>
            <div className="mx-auto mt-4 p-3">
              <button type="button" className="btn button-87 btns me-2 ">
                Apply now
              </button>
              <button type="button" className="btn btns btn-dark " href="#">
                Save Job
              </button>
            </div>
          </div>
        </div>
        {/* ... (company details) */}
      </div>

    </div>
    <Footer/>
    </>
  )
}


