import React, { useState } from "react";
import "./Sidebar.css";
import { Routes,Route, Link } from "react-router-dom";
import HumHaiLogo from "../Assets/Images/hum-hai-logo-2023.png";
import { Jobs } from "../jobs/Jobs";
import Jobform from '../jobs/JobForm';
import JobProfile from "../jobs/JobProfile";
import Plan from "../sidebarFunction/Plan";
import MyReferrals from "../sidebarFunction/MyReferrals";
import OfficialDocuments from "../sidebarFunction/OfficialDocumnts";
import PaySlip from "../sidebarFunction/PaySlip";
import MyDocuments from "../sidebarFunction/MyDocuments";
import { useNavigate } from "react-router-dom";
import ShowBGC from "../sidebarFunction/ShowBGC";
import CloseIcon from "@mui/icons-material/Close";

export const Sidebar = (props) => {
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState("");

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const sidebarBtn = document.querySelector(".sidebarBtn");
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active ")) {
      sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    toggleSidebar();
  };

  const handleClick =()=>{
    navigate('/userprofile')
  }

  return (
    <>
      <div>
        <div>
          <div className="sidebar">
            <div className="logo-details" style={{ overflow: "hidden" }}>
              <i className="bx ">
                <img
                  src={HumHaiLogo}
                  style={{
                    width: "60px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                  alt=""
                />
              </i>
              <span className="logo_name"> HumHai</span>
              <span> <CloseIcon onClick={toggleSidebar} style={{cursor:'pointer',marginLeft:'30px',fontSize:'35px'}}/></span>
              <hr style={{ backgroundColor: "black", color: "black" }} />
            </div>
            <ul className="nav-links " style={{ overflow: "hidden" }}>
              <li>
                <Link
                  to="/"
                  className={activeLink === "Home" ? "active" : ""}
                  onClick={() => handleLinkClick("Home")}
                >
                  <i className="bx bx-home"></i>
                  <span className="links_name">Home</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/sidebar"
                  className={activeLink === "search_job" ? "active" : ""}
                  onClick={() => handleLinkClick("search_job")}
                >
                  <i className="bx bx-search"></i>
                  <span className="links_name">Search Jobs</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/sidebar/job"
                  className={activeLink === "applied_jobs" ? "active" : ""}
                  onClick={() => handleLinkClick("applied_jobs")}
                >
                  <i className="bx bx-check"></i>
                  <span className="links_name">Applied Jobs</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/sidebar/plan"
                  className={activeLink === "plans" ? "active" : ""}
                  onClick={() => handleLinkClick("plans")}
                >
                  <i className="bx bx-shield-alt"></i>
                  <span className="links_name">Plans</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/sidebar"
                  className={
                    activeLink === "amosta_hiring_form" ? "active" : ""
                  }
                  onClick={() => handleLinkClick("amosta_hiring_form")}
                >
                  <i className="bx bx-menu"></i>
                  <span className="links_name">Amosta Hiring Form</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/sidebar"
                  className={activeLink === "saved_jobs" ? "active" : ""}
                  onClick={() => handleLinkClick("saved_jobs")}
                >
                  <i className="bx bx-bookmark"></i>
                  <span className="links_name">Saved Jobs</span>
                </Link>
              </li>
              <div className="siderboxes">Employee Tools</div>
              <li>
                <Link
                  to="/sidebar/payslip"
                  className={activeLink === "pay_slip" ? "active" : ""}
                  onClick={() => handleLinkClick("pay_slip")}
                >
                  <i className="bx bx-book"></i>
                  <span className="links_name">Payslip</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/sidebar/officialdocument"
                  className={
                    activeLink === "official_documents" ? "active" : ""
                  }
                  onClick={() => handleLinkClick("official_documents")}
                >
                  <i className="bx bx-printer"></i>
                  <span className="links_name">Official Documents</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/sidebar/myreferrals"
                  className={activeLink === "my_referrals" ? "active" : ""}
                  onClick={() => handleLinkClick("my_referrals")}
                >
                  <i className="bx bx-group"></i>
                  <span className="links_name">My Referrals</span>
                </Link>
              </li>
              <div className="siderboxes">BGC</div>
              <li>
                <Link
                  to="/sidebar/showbgc"
                  className={activeLink === "bgc_executive" ? "active" : ""}
                  onClick={() => handleLinkClick("bgc_executive")}
                >
                  <i className="bx bx-lock"></i>
                  <span className="links_name">BGC EXECUTIVE</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/sidebar/mydocuments"
                  className={activeLink === "my_documents" ? "active" : ""}
                  onClick={() => handleLinkClick("my_documents")}
                >
                  <i className="bx bx-file"></i>
                  <span className="links_name">My Documents</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/sidebar"
                  className={activeLink === "change_password" ? "active" : ""}
                  onClick={() => handleLinkClick("change_password")}
                >
                  <i className="bx bx-user-plus"></i>
                  <span className="links_name">HH01025858A011</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/sidebar"
                  className={activeLink === "change_password" ? "active" : ""}
                  onClick={() => handleLinkClick("change_password")}
                >
                  <i className="bx bx-log-out"></i>
                  <span className="links_name">Logout</span>
                </Link>
              </li>
            </ul>
          </div>

          <section className="home-section">
            <div>
              <nav>
                <div className="sidebar-button" onClick={toggleSidebar}>
                  <i className="bx bx-menu sidebarBtn"></i>
                  <span className="dashboard"></span>
                </div>
                <div className="search-box">
                  <input type="text" placeholder="Search..." />
                  <i className="bx bx-search"></i>
                </div>
                <div className="profile-details">
                  <img src={HumHaiLogo} alt="" onClick={handleClick} style={{cursor:'pointer'}} />
                  <span className="admin_name" onClick={handleClick} style={{cursor:'pointer'}}>Ankit Kumar</span>
                </div>
              </nav>
            </div>

            <div>
              <div class="home-content">
                <Routes>
                  <Route path="/job" element={<Jobs />} />
                  <Route path="/jobpost" element={<Jobform/>} />
                  <Route path="/userprofile" element={<JobProfile/>}/>
                  <Route path="/plan" element={<Plan/>} />
                  <Route path="/myreferrals" element={<MyReferrals/>}/>
                  <Route path="/officialdocument" element={<OfficialDocuments/>} />
                  <Route path="/payslip" element={<PaySlip/>} />
                  <Route path="/mydocuments" element={<MyDocuments/>}/>
                  <Route path="/showbgc" element={<ShowBGC/>} />
                </Routes>
              </div>
            </div>
          </section>
        </div>
        {/* )} */}
      </div>
    </>
  );
};
