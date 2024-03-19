import React from "react";
import "./MyReferrals.css";

const OfficialDocuments = () => {
  return (
    <div className="myreferrals">
      <div>
        <h2>Availaible Documents</h2>
      </div>
      <div>
      <table className="table">
          <thead className="thead">
            <tr>
              <td>S.no.</td>
              <td>Documents</td>
              <td>Download Links</td>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr>
              <th>1.</th>
              <th>offer letter</th>
              <th>8602180052</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OfficialDocuments;
