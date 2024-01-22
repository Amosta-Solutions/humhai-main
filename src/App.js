// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteHome from './Components/Website/Home'
import Navbar from "./Components/Website/Navbar";
import IdentityManagementSolutions from "./Components/Website/IdentityManagementSolutions";
import AboutUs from "./Components/Website/AboutUs";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route index element = {<WebsiteHome/>}/>
        <Route path='/' element = {<WebsiteHome/>}/>
        <Route path="identity-management-home" element = {<IdentityManagementSolutions/>}/>
        <Route path="aboutus" element = {<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
