import React from 'react'
import './Job.css';

import Footer from '../Website/Footer';
import Navbar from '../Website/Navbar';
import { JobsItem } from './JobsItem';


export const Jobs = () => {

  return (
    <>
      <Navbar />
      <JobsItem
        companyName="amosta"
        designation="React js"
      />
      <Footer />
    </>
  )
}
