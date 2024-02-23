import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteHome from './Components/Website/Home'
import IdentityManagementSolutions from "./Components/Website/IdentityManagementSolutions";
import Sidebar from './Components/Website/Sidebar';
import AboutUs from './Components/Website/AboutUs';
import Login from "./Components/Website/Login";
import  {SoftwareSolution}  from "./Components/Website/SoftwareSolution";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/home' element = {<WebsiteHome/>}/>
        <Route path='/side' element ={<Sidebar/>}/>
        <Route path="identity-management-home" element = {<IdentityManagementSolutions/>}/>
        <Route path="aboutus" element = {<AboutUs/>}/>
        <Route path="software-solution" element={<SoftwareSolution/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
