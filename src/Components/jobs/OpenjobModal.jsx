import React, { useState } from 'react';
import './Job.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const OpenjobModal = ({ handleClose, open }) => {
    const [activeFilter, setActiveFilter] = useState(null);

    const handleFilterClick = (filterName) => {
        setActiveFilter(filterName);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box className='modal-container' sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                height: open ? '75%' : 0,
                backgroundColor: 'white',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                transition: 'height 0.3s ease-in-out',
                overflow: 'hidden',
                padding: '20px',
            }}>
                <div>
                    <HighlightOffIcon onClick={handleClose} style={{ position: 'absolute', right: '10px', fontSize: '40px', cursor: 'pointer', top: '10px' }} />
                </div>
                <div className='open-modal'>
                    <p>All filters</p>
                    <hr />
                    <div>
                        <div className="w3-sidebar w3-light-grey w3-bar-block" style={{ width: "25%", overflowY: 'scroll', height: '45%' }}>
                            <a href="/" className={`w3-bar-item w3-button ${activeFilter === 'DatePosted' ? 'active' : ''}`} onClick={() => handleFilterClick('DatePosted')}>Date posted</a>
                            <a href="/" className={`w3-bar-item w3-button ${activeFilter === 'WorkMode' ? 'active' : ''}`} onClick={() => handleFilterClick('WorkMode')}>Work mode</a>
                            <a href="/" className={`w3-bar-item w3-button ${activeFilter === 'WorkType' ? 'active' : ''}`} onClick={() => handleFilterClick('WorkType')}>Work type</a>
                            <a href="/" className={`w3-bar-item w3-button ${activeFilter === 'WorkShift' ? 'active' : ''}`} onClick={() => handleFilterClick('WorkShift')}>Work shift</a>
                            <a href="/" className={`w3-bar-item w3-button ${activeFilter === 'Education' ? 'active' : ''}`} onClick={() => handleFilterClick('Education')}>Education</a>
                            <a href="/" className={`w3-bar-item w3-button ${activeFilter === 'Sortby' ? 'active' : ''}`} onClick={() => handleFilterClick('Sortby')}>Sort by</a>
                            <a href="/" className={`w3-bar-item w3-button ${activeFilter === 'Others' ? 'active' : ''}`} onClick={() => handleFilterClick('Others')}>Others</a>
                        </div>
                        <div style={{ marginLeft: "25%",marginTop:'10px' }}>
                            <div class="w3-container">
                                {activeFilter === 'DatePosted' && (
                                    <>
                                        <div className="blKkOK">
                                            <input type="radio" id="age1" />
                                            <label htmlFor="age1" style={{ margin: 'auto 5px', fontSize: '18px' }}>All</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="age2" />
                                            <label htmlFor="age2" style={{ margin: 'auto 5px', fontSize: '18px' }}>Last 24 hours</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="age3" />
                                            <label htmlFor="age3" style={{ margin: 'auto 5px', fontSize: '18px' }}>Last 3 days</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="age4" />
                                            <label htmlFor="age4" style={{ margin: 'auto 5px', fontSize: '18px' }}>Last 7 days</label>
                                        </div>
                                    </>
                                )}
                                {activeFilter === 'WorkMode' && (
                                    <>
                                        <div className="blKkOK">
                                            <input type="radio" id="workMode1" />
                                            <label htmlFor="workMode1" style={{ margin: 'auto 5px', fontSize: '18px' }}>Full-time</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="workMode2" />
                                            <label htmlFor="workMode2" style={{ margin: 'auto 5px', fontSize: '18px' }}>Part-time</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="workMode3" />
                                            <label htmlFor="workMode3" style={{ margin: 'auto 5px', fontSize: '18px' }}>Remote</label>
                                        </div>
                                    </>
                                )}
                                {activeFilter === 'WorkType' && (
                                    <>
                                        <div className="blKkOK">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1" style={{ margin: 'auto 5px', fontSize: '18px' }}>Full Time</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2" style={{ margin: 'auto 5px', fontSize: '18px' }}>Half Time</label>
                                        </div>
                                    </>
                                )}
                                     {activeFilter === 'WorkShift' && (
                                    <>
                                        <div className="blKkOK">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1" style={{ margin: 'auto 5px', fontSize: '18px' }}>Day Shift</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2" style={{ margin: 'auto 5px', fontSize: '18px' }}>Night Shift</label>
                                        </div>
                                    </>
                                )}
                                 {activeFilter === 'Education' && (
                                  <>
                                  <div className="blKkOK">
                                      <input type="radio" id="age1" />
                                      <label htmlFor="age1" style={{ margin: 'auto 5px', fontSize: '18px' }}>10th Or Below 10th</label>
                                  </div>
                                  <div>
                                      <input type="radio" id="age2" />
                                      <label htmlFor="age2" style={{ margin: 'auto 5px', fontSize: '18px' }}>12th Pass</label>
                                  </div>
                                  <div>
                                      <input type="radio" id="age3" />
                                      <label htmlFor="age3" style={{ margin: 'auto 5px', fontSize: '18px' }}>Diploma</label>
                                  </div>
                                  <div>
                                      <input type="radio" id="age4" />
                                      <label htmlFor="age4" style={{ margin: 'auto 5px', fontSize: '18px' }}>ITI</label>
                                  </div>
                                  <div>
                                      <input type="radio" id="age3" />
                                      <label htmlFor="age3" style={{ margin: 'auto 5px', fontSize: '18px' }}>Graducate</label>
                                  </div>
                                  <div>
                                      <input type="radio" id="age4" />
                                      <label htmlFor="age4" style={{ margin: 'auto 5px', fontSize: '18px' }}>Post Graducate</label>
                                  </div>
                              </>
                                 )}
                                  {activeFilter === 'Sortby' && (
                                      <>
                                      <div className="blKkOK">
                                          <input type="radio" id="age1" />
                                          <label htmlFor="age1" style={{ margin: 'auto 5px', fontSize: '18px' }}>Relevant</label>
                                      </div>
                                      <div>
                                          <input type="radio" id="age2" />
                                          <label htmlFor="age2" style={{ margin: 'auto 5px', fontSize: '18px' }}>Data Posted - New to Old</label>
                                      </div>
                                      <div>
                                          <input type="radio" id="age3" />
                                          <label htmlFor="age3" style={{ margin: 'auto 5px', fontSize: '18px' }}>Salary - Hight to Old</label>
                                      </div>
                                      <div>
                                          <input type="radio" id="age4" />
                                          <label htmlFor="age4" style={{ margin: 'auto 5px', fontSize: '18px' }}>Distance - Near to Far</label>
                                      </div>
                                  </>
                                  )}
                                   {activeFilter === 'Sortby' && (
                                      <>
                                      <div className="blKkOK">
                                          <input type="radio" id="age1" />
                                          <label htmlFor="age1" style={{ margin: 'auto 5px', fontSize: '18px' }}>Relevant</label>
                                      </div>
                                      <div>
                                          <input type="radio" id="age2" />
                                          <label htmlFor="age2" style={{ margin: 'auto 5px', fontSize: '18px' }}>Data Posted - New to Old</label>
                                      </div>
                                      <div>
                                          <input type="radio" id="age3" />
                                          <label htmlFor="age3" style={{ margin: 'auto 5px', fontSize: '18px' }}>Salary - Hight to Old</label>
                                      </div>
                                      <div>
                                          <input type="radio" id="age4" />
                                          <label htmlFor="age4" style={{ margin: 'auto 5px', fontSize: '18px' }}>Distance - Near to Far</label>
                                      </div>
                                  </>
                                  )}
                                      {activeFilter === 'Others' && (
                                      <>
                                      <div className="blKkOK">
                                          <input type="radio" id="age1" />
                                          <label htmlFor="age1" style={{ margin: 'auto 5px', fontSize: '18px' }}>Jobs for women</label>
                                      </div>
                                  </>
                                  )}
                            </div>
                       
                        </div>
                    </div>
                </div>
                <div className='modal-boxes'>
                    <div className='modal-boxes2'>
                        <p>0 filter(s) applied ● 5 job(s) available</p>
                    </div>
                    <div className='modal-boxes1'>
                        <div>
                            <p>Clear Filters</p>
                        </div>
                        <div>
                            <button>Apply</button>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default OpenjobModal;
