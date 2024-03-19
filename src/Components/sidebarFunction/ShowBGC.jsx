import React from "react";
import "./MyReferrals.css";

const ShowBGC = () => {
  return (
    <div className="showbgc">
      <div>
        <h2>Available BGC Details</h2>
      </div>
      <div>
      <table className="table">
          <thead className="thead">
            <tr style={{fontSize:'18px'}}>
              <td>S.no.</td>
              <td>Name</td>
              <td>Contact Number</td>
              <td>Client</td>
              <td>Details</td>
              <td>Other Details</td>
              <td>Court Check</td>
              <td>Doc Data</td>
              <td>Applied </td>
              <td>Report</td>
              <td>Online Id</td>				
            </tr>
          </thead>
          <tbody className="tbody">
            <tr>
              <th>1.</th>
              <th>Ankit Kumar Jha</th>
              <th>8602180052</th>
              <th>HH203432890A011</th>
              <th><a href="/background/personalpage" >View</a></th>
              <th><a href="" >Other</a></th>
              <th><a href="" >Court Check</a></th>
              <th><a href="/bgcdocpage" >Doc Data</a></th>
              <th>15 jan 2024</th>
              <th>1.</th>
              <th>Ankit Kumar Jha</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBGC;
