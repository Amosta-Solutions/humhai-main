import React from "react";
import "../sidebarFunction/Plan.css";

const Plan = () => {
  return (
    <>
      <div className="plans">
        <p>Please Choose Your Plan</p>
      </div>
      <div className="planpage">
        <div className="plan-container">
          <div class="card1">
            <div className="plan-boxes1">
              <h1 style={{ color: "#1F827F" }}>Free</h1>
              <h6>&#8377; 0.00</h6>
              <p>Unlimited Job search</p>
              <p>Unlimited Document upload Can apply upto 1 Job</p>
            </div>
            <div class="container1">
              <hr />
              <div className="plan-boxes1">
                <button>Activate</button>
              </div>
            </div>
          </div>
          <div class="card1">
            <div className="plan-boxes1">
              <h1 style={{ color: "#1F827F" }}>Silver</h1>
              <h6>&#8377; 100 .00 *</h6>
              <p>Everything included in Free plan</p>
              <p>Can apply upto 5 Jobs</p>
            </div>
            <div class="container1">
              <hr />
              <div className="plan-boxes1">
                <button>Activate</button>
              </div>
            </div>
          </div>
          <div class="card1">
            <div className="plan-boxes1">
              <h1 style={{ color: "orange" }}>Gold (Primium)</h1>
              <h6>&#8377; 500 .00 *</h6>
              <p>Everything Included in silver plan</p>
              <p>Unlimited Job Apply</p>
              <p>Job assist</p>
              <p>Profiling assist</p>
            </div>
            <div class="container1">
              <hr />
              <div className="plan-boxes1">
                <button>Activate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
