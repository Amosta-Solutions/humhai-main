import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from 'mdb-react-ui-kit';
import HumHaiLogo from '../Assets/Images/hum-hai-logo-2023.png'

export default function Navbar() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className='shadow' stick='top' sticky>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
            <img src={HumHaiLogo} alt='Hum Hai Logo' className='img-fluid'/>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav fullWidth={false} className='ms-auto mb-2 mb-lg-0'>
          <MDBNavbarItem>    
                <MDBNavbarLink active aria-current='page' href='/home' className='navbar-item-block'>
                    Home
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>    
                <MDBNavbarLink active aria-current='page' href='/aboutus' className='navbar-item-block'>
                    About Us
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link navbar-item-block' role='button' active >
                  Solutions
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='identity-management-home'>
                    <MDBIcon fas icon="user-check" /> Background Verification
                  </MDBDropdownItem>
                  <MDBDropdownItem link href='/strategic'>
                    <MDBIcon fas icon="hands-helping" href='/strategic' /> Strategic Recruitment
                  </MDBDropdownItem>
                  <MDBDropdownItem link href='/softwaresolution'>
                    <MDBIcon fab icon="python" href='/softwaresolution' /> Software Solutions
                  </MDBDropdownItem>
                  <MDBDropdownItem link href='/projectmanagment'>
                    <MDBIcon fas icon="project-diagram" href='/projectmanagment' /> Project Management
                  </MDBDropdownItem>
                  <MDBDropdownItem link href='/event'>
                    <MDBIcon fas icon="calendar-check" href='/event' /> Event Management
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>    
                <MDBNavbarLink active aria-current='page' href='/employee' className='navbar-item-block'>
                    Employment
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>    
                <MDBNavbarLink active aria-current='page' href='/opportuninty' className='navbar-item-block'>
                    Opportunities
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>    
                <MDBNavbarLink active aria-current='page' href='/startup' className='navbar-item-block'>
                    StartUp Studio
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>    
                <MDBNavbarLink active aria-current='page' href='/career' className='navbar-item-block'>
                    Careers
                </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>    
                <MDBNavbarLink active aria-current='page' href='/contact' className='navbar-item-block'>
                    Contact Us
                </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}