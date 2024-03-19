import React from "react";
import "./MyReferrals.css";

const MyReferrals = () => {
  return (
    <div className="myreferrals">
      <div>
        <h2>Available Referral</h2>
      </div>
      <div>
      <table className="table">
          <thead className="thead">
            <tr>
              <td>S.no.</td>
              <td>Name</td>
              <td>Mobile no.</td>
              <td>HH ID</td>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr>
              <th>1.</th>
              <th>Ankit Kumar Jha</th>
              <th>8602180052</th>
              <th>HH203432890A011</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReferrals;
