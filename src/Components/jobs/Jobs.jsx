import React, { useState } from "react";
import "./Job.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useNavigate } from "react-router-dom";
import JobFilter from "./JobFilter";
import JobProfile from "./JobProfile";
import CustomHook from "./CustomHook";

export const Jobs = () => {
  const data = CustomHook("https://jsonplaceholder.typicode.com/users");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  const handlePrevious = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  const handleChange = (id) => {
    navigate("/jobdetails", { state: { id: id } });
  };

  return (
    <>
      <div className="jobs">
        <div>
          <JobFilter />
        </div>
        <div className="jobs-container">
          {data.slice((page - 1) * 4, page * 4).map((item, index) => {
            return (
              <div
                className="jobs-box"
                onClick={() => handleChange(item)}
                key={index}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <h5>{item.name}</h5>
                  <KeyboardArrowRightIcon
                    style={{
                      cursor: "pointer",
                      color: "#1F8268",
                      fontSize: "26px",
                    }}
                  />
                </div>
                <h6>Amosta Solution</h6>
                <p>
                  <HomeIcon style={{ fontSize: "20px" }} /> Work from home
                </p>
                <h6>
                  <AccountBalanceIcon style={{ fontSize: "20px" }} /> &#8377;{" "}
                  25,000 - ₹33,000 monthly
                </h6>

                <div className="jobs-boxes">
                  <div className="jobs-boxess">
                    <p>Full Time</p>
                  </div>
                  <div className="jobs-boxess">
                    <p>Any experience</p>
                  </div>
                  <div className="jobs-boxess">
                    <p>Basic English</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="job-box-button">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={page === 1}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={data.length <= page * 4}
            >
              Next &rarr;
            </button>
          </div>
        </div>
        <div>
          <JobProfile />
        </div>
      </div>
    </>
  );
};
