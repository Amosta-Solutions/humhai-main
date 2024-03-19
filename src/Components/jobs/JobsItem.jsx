import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { useNavigate } from "react-router-dom";
export const JobsItem = (props) => {
  console.log(props, "props");
  const navigate = useNavigate();
  return (
    <div className="jobs">
      <h2>Recommended Jobs for you</h2>
      <div className="jobs-container">
        <div className="jobs-box">
          <p>{props.companyName}</p>
          <p>{props.designation}</p>
          <p>&#8377; 35000-45000 Per Month</p>
          <div className="jobs-button">
            <div>
              <button className="button1">
                <LocationOnIcon style={{ fontSize: "18px" }} /> Haryana
              </button>
            </div>
            <div>
              <button className="button1">
                <LocalLibraryIcon style={{ fontSize: "18px" }} /> B.Com
              </button>
            </div>
            <div>
              <button className="button1">
                <WorkHistoryIcon style={{ fontSize: "18px" }} /> 5-7 Year
              </button>
            </div>
          </div>
          <div className="jobs-button1">
            <div>
              <button
                className="button4"
                onClick={() => navigate("/jobdetails")}
              >
                Apply
              </button>
            </div>
            <div>
              <button className="button5">Details</button>
            </div>
          </div>
        </div>
        <div className="jobs-box"></div>
        <div className="jobs-box"></div>
        <div className="jobs-box"></div>
      </div>
    </div>
  );
};
