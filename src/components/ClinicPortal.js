import React from 'react';
import Header from './splash/Header'
import Login from './Login'
import Footer from './splash/Footer'


import '../style/clinic-portal.css';

const Clinic = (props) => {
    return (
      <div className="clinicPortal">
        <Header />
        <div className="portalName">
          <h2>Clinic Portal</h2>
        </div>
        <Login onClinicClick={props.onClinicClick}/>
        <Footer />
      </div>
    )
}

export default Clinic;
