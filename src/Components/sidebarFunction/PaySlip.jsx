import React from "react";
import "./MyReferrals.css";

const PaySlip = () => {
  return (
    <div className="myreferrals">
      <div>
        <h2>Availaible Payslips</h2>
      </div>
      <div>
        <table className="table">
          <thead className="thead">
            <tr>
              <td>S.no.</td>
              <td>Pay Slip</td>
              <td>Download Links</td>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr>
              <th>1.</th>
              <th>For Payslip May 2023</th>
              <th>8602180052</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaySlip;
