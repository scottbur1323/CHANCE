import React, { Component } from 'react';
import Header from './splash/Header'
import Login from './Login'
import Footer from './splash/Footer'


import '../style/patient-portal.css';

const PatientPortal = (props) => {

    return (
      <div className="patientPortal">
        <Header />
          <div className="portalName">
            <h2>Patient Portal</h2>
          </div>
        <Login onClinicClick={props.onInfoClick}/>
        <Footer />
      </div>
    )
}

export default PatientPortal;
