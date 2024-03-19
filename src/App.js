import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteHome from './Components/Website/Home'
import IdentityManagementSolutions from "./Components/Website/IdentityManagementSolutions";
import AboutUs from './Components/Website/AboutUs';
import Login from "./Components/Website/Login";
import ContectUs from "./Components/Website/ContectUs";
import { EventManagment } from "./Components/Website/EventManagement";
import { Careers } from "./Components/Website/Careers";
import { StrategicRecruitment } from "./Components/Website/StrategicRecruitment";
import  StartupStudio from "./Components/Website/StartupStudio";
import { SoftwareSolution } from "./Components/Website/SoftwareSolution";
import  ProjectManagement  from "./Components/Website/ProjectManagement";
import { Opportunity } from "./Components/Website/Opportunity";
import { Employment } from "./Components/Website/Employment";
import { JobsDetails } from "./Components/jobs/JobsDetails";
import UserProfile from "./Components/jobs/UserProfile";
import UserProfileModal from "./Components/jobs/UserProfileModal";
import {Sidebar} from "./Components/sidebar/Sidebar";
import JobForm from './Components/jobs/JobForm';
import BackgroundDetails from "./Components/BGC/BackgroundDetails";
import BgcDocDataPage from "./Components/BGC/BgcDocDataPage";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/' element = {<WebsiteHome/>}/>
        <Route path="/identity-management-home" element = {<IdentityManagementSolutions/>}/>
        <Route path="/aboutus" element = {<AboutUs/>}/>
        <Route path="/contact" element={<ContectUs/>} />
        <Route path='/event' element={<EventManagment/>} />
        <Route path="/employee" element={<Employment/>} />
        <Route path="/career" element={<Careers/>} />
        <Route path="/strategic" element={<StrategicRecruitment/>} />
        <Route path="/startup" element={<StartupStudio/>} />
        <Route path="/softwaresolution" element={<SoftwareSolution/>} />
        <Route path="/projectmanagment" element={<ProjectManagement/>}/>
        <Route path="/opportuninty" element={<Opportunity/>} />
        <Route path="/jobdetails" element={<JobsDetails/>}/>
        <Route path='/jobpost' element={<JobForm/>}/>
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path="/userModal" element={<UserProfileModal/>}/>
        <Route path='/sidebar/*' element ={<Sidebar/>}/>
        <Route path="/background/*" element={<BackgroundDetails/>} />
        <Route path='/bgcdocpage' element={<BgcDocDataPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
