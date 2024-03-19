import React from "react";
import "./Job.css";
import img from "../Assets/Images/Job feed - Desktop - Track Applications.webp";
import HumHaiLogo from "../Assets/Images/hum-hai-large.png";
import { useNavigate } from "react-router-dom";

const JobProfile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="jobs-box2">
        <div className="jobprofilebox">
          <img src={HumHaiLogo} alt="" />
        </div>
        <p>Ankit jha</p>
        <div className="profilebutton">
          <button onClick={() => navigate("/userprofile")}>
            Update Profile
          </button>
        </div>
      </div>
      <div className="jobs-box3">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default JobProfile;
