import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteHome from './Components/Website/Home'
import IdentityManagementSolutions from "./Components/Website/IdentityManagementSolutions";
import Sidebar from './Components/Website/Sidebar';
import AboutUs from './Components/Website/AboutUs';
import Login from "./Components/Website/Login";

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
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
