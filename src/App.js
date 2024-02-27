import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteHome from './Components/Website/Home'
import IdentityManagementSolutions from "./Components/Website/IdentityManagementSolutions";
import Sidebar from './Components/Website/Sidebar';
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

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/home' element = {<WebsiteHome/>}/>
        <Route path='/side' element ={<Sidebar/>}/>
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

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
