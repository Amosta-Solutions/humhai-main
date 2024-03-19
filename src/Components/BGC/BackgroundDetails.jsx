import React,{useState} from "react";
import "./BGC.css";
import HumHaiLogo from "../Assets/Images/hum-hai-logo-2023.png";
import { Routes,Route, Link,useNavigate } from "react-router-dom";
import BgcPersonalPage from "./BgcPersonalPage";
import JobProfile from "../jobs/JobProfile";
import BgcEducationPage from "./BgcEducationPage";
import BgcRefrencePage from "./BgcRefrencePage";
import BgcDocumentPage from "./BgcDocumentPage";
import BgcEmployeementPage from "./BgcEmployeementPage";
import BgcTenancyPage from "./BgcTenancyPage";


const BackgroundDetails = () => {
  const navigate = useNavigate()
    const [activeLink, setActiveLink] = useState("");

      const handleLinkClick = (linkName, route) => {
        setActiveLink(linkName);
        navigate(route);
      };

  return (
    <>
    <div className="backgrounddetails-heading">
    <p>Background Verification Detail</p>
    <div className="backgrounddetails-button">
      <button>Download</button> 
      <button>CSV DOWNLOAD</button>
      <button>Employment Detail</button>
    </div>
    </div>
    <div className="background">
      <div>
        <div className="background-box0">
          <div className="background-circle">
            <img src={HumHaiLogo} alt="" />
          </div>
          <div className="background-table">
          <table className="table">
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Name</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Mohd arif</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Employee Id</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>....</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Mothers Name</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Nasruin begum</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Fathers Name</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Mohd afsar</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Gender</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Male</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>DOB</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Sept. 30,1994</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Email Id</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>.....</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Contact Number</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>7780340083</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Client</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Euro</td>
              </tr>

              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>DOB</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Sept. 30,1994</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Client-Location</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Hyderabad</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'18px'}}>Parmanent Address:</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>House No./Building/Appartment</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>9-4-29-35-a-1</td>
              </tr>

              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Area/Locality/Sector</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Hakeempet</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Area/Locality/Sector 2</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Toliichowki</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Post Office</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Golkonda</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Police Station</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Humayun nagar</td>
              </tr>

              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Area/Locality/Sector</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Hakeempet</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Area/Locality/Sector 2</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Toliichowki</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Post Office</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Golkonda</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Police Station</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Humayun nagar</td>
              </tr>

              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>District</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Ranga reddy</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Tehsil</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Hyderabad</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Landmark</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Oshiya masjid</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Pin code</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>500008</td>
              </tr>

              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>State</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Telangana</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'18px'}}>Current Address:</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>House No./Building/Appartment</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>H.no 9-4-29-35-a-1</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Area/Locality/Sector</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Hakeempet</td>
              </tr>

              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Area/Locality/Sector 2</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Golkonda</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>Police Station</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Humayun nagar</td>
              </tr>
              <tr>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>District</td>
                <td style={{color:'black',fontWeight:'600',fontSize:'16px'}}>:</td>
                <td style={{color:'black'}}>Ranga reddy</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div>
        <div className="background-box1">
          <div className="background-button1">
         <button onClick={() => handleLinkClick("personal", "/background/personalpage")} className={activeLink === "personal" ? "active" : ""} >
           <span>Personal</span>
         </button>
         <button onClick={() => handleLinkClick("education", "/background/educationpage")} className={activeLink === "education" ? "active" : ""} >
           <span>Education</span>
         </button>
         <button onClick={() => handleLinkClick("reference", "/background/refrencepage")} className={activeLink === "reference" ? "active" : ""} >
           <span>Reference</span>
         </button>
         <button onClick={() => handleLinkClick("document", "/background/ducumentpage")} className={activeLink === "document" ? "active" : ""} >
           <span>Document</span>
         </button>
         <button onClick={() => handleLinkClick("employement", "/background/employeementpage")} className={activeLink === "employement" ? "active" : ""} >
           <span>Employement</span>
         </button>
         <button onClick={() => handleLinkClick("tenancy", "/background/tenancypage")} className={activeLink === "tenancy" ? "active" : ""} >
           <span>Tenancy</span>
         </button>
          </div>
        </div>
        <div className="background-box1">
        <Routes>
          <Route path="/job" element={<JobProfile/>}/>
             <Route path="/personalpage" element={<BgcPersonalPage/>} />
             <Route path="/educationpage" element={<BgcEducationPage/>} />
             <Route path="/refrencepage" element={<BgcRefrencePage/>} />
             <Route path="/ducumentpage" element={<BgcDocumentPage/>}/>
             <Route path="/employeementpage" element={<BgcEmployeementPage/>}/>
             <Route path="/tenancypage" element={<BgcTenancyPage/>} />
         </Routes>
        </div>
      </div>
    </div>
    </>
  );
};

export default BackgroundDetails;
