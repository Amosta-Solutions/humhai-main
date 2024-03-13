import React from "react";
import "./Job.css";
import Navbar from "../Website/Navbar";
import Footer from "../Website/Footer";
import HumHaiLogo from "../Assets/Images/hum-hai-large.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import WorkIcon from "@mui/icons-material/Work";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import img from "../Assets/Images/Job feed - Desktop - Track Applications.webp";
import UserProfileModal from "./UserProfileModal";

const UserProfile = () => {
  return (
    <>
      <Navbar />
      <div className="userProfile">
        <div className="userProfile-box-check">
          <div className="userProfile-box1">
            <div className="userProfile-contain">
              <div>
                <img src={HumHaiLogo} alt="" />
              </div>
              <div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <h6>Ankit Kumar Jha</h6>
                <div><UserProfileModal/></div>
                </div>
                <div style={{ display: "flex", margin: "auto 5px" }}>
                  <div style={{ alignItems: "baseline" }}>
                    <BusinessCenterIcon style={{ color: "#9A938C" }} />
                  </div>
                  <div>
                    <p>
                      Full Stack Web Developer at Numeric Infosystem Pvt Ltd
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <div>
                    <LocationOnIcon style={{ color: "#9A938C" }} />
                  </div>
                  <div>
                    <p>Sector 18 Gurugram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="userProfile-box1">
            <div className="userProfile-contain1">
              <div>
                <div>
                  <h6>Email ID</h6>
                  <p>jhaankit580@gmail.com</p>
                </div>
                <div>
                  <h6>Date of birth</h6>
                  <p>1st Sep 1997</p>
                </div>
                <div>
                  <h6>Current location</h6>
                  <p>Delhi-NCR</p>
                </div>
              </div>
              <div>
                <div>
                  <h6>Mobile number</h6>
                  <p>+91-8602180052</p>
                </div>
                <div>
                  <h6>Gender</h6>
                  <p>Male</p>
                </div>
                <div>
                  <h6>Hometown</h6>
                  <p>Gwalior, MP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="userProfile-box-check">
          <div className="userProfile-box2">
            <div className="userProfile-contain1-box">
              <div>
                <p>
                  If we have Humhai app then jobs will be available quickly.
                </p>
              </div>
              <div
                className="userProfile-contain1-boxes-contain"
                style={{ textAlign: "-webkit-center" }}
              >
                <div>
                  <div className="userProfile-contain1-boxes">
                    <WorkIcon style={{ color: "#852000" }} />
                  </div>
                  <p>Apply For Job</p>
                </div>
                <hr class="line" />
                <div>
                  <div className="userProfile-contain1-boxes">
                    <CallIcon style={{ color: "#852000" }} />
                  </div>
                  <p>Schedule Interview</p>
                </div>
                <hr class="line" />
                <div>
                  <div className="userProfile-contain1-boxes">
                    <VerifiedUserIcon style={{ color: "#852000" }} />
                  </div>
                  <p>Get Hired</p>
                </div>
              </div>
            </div>
          </div>
          <div className="userProfile-box4">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
