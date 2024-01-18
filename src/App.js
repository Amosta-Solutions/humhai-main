// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteHome from './Components/Website/Home'
import Navbar from "./Components/Website/Navbar";
import IdentityManagementSolutions from "./Components/Website/IdentityManagementSolutions";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route index element = {<WebsiteHome/>}/>
        <Route path='/' element = {<WebsiteHome/>}/>
        <Route path="identity-management-home" element = {<IdentityManagementSolutions/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
