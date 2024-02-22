import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteHome from './Components/Website/Home'
import Navbar from "./Components/Website/Navbar";
import IdentityManagementSolutions from "./Components/Website/IdentityManagementSolutions";
import Sidebar from './Components/Website/Sidebar';
import AboutUs from './Components/Website/AboutUs';
import TextPage from './Components/Website/TextPage';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route index element = {<WebsiteHome/>}/>
        <Route path='/' element = {<WebsiteHome/>}/>
        <Route path='/side' element ={<Sidebar/>}/>
        <Route path='/text' element={<TextPage/>}/>
        <Route path="identity-management-home" element = {<IdentityManagementSolutions/>}/>
        <Route path="aboutus" element = {<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
