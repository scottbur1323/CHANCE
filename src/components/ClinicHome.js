import React, { Component } from 'react';
import Header from './splash/Header'
import Footer from './splash/Footer'

import '../style/clinic-home.css';

const ClinicHome = (props) => {
    return (
      <div className="clinicHome">
        <Header />
        <div className="portalName">
          <h2>Clinic Home</h2>
        </div>
        <div className="currentTitle">
          <h3>Current Patients</h3>
        </div>
        <div className="currentPatients">
          <section className="patientName">
            <div className="patient columnTitle">
              <p>PATIENT NAME</p>
            </div>
            <div className="patient">
              <p>Herold, Casey</p>
            </div>
            <div className="patient" onClick={() => props.onInfoClick()}>
              <p>Scott-Burke, Chance</p>
            </div>
            <div className="patient">
              <p>Coberly, Kyle</p>
            </div>
            <div className="patient">
              <p>Reynolds, CJ</p>
            </div>
            <div className="patient">
              <p>Patton, Brooks</p>
            </div>
            <div className="patient">
              <p>Ortega, Berto</p>
            </div>
            <div className="patient">
              <p>Kryzenske, Jess</p>
            </div>
            <div className="patient">
              <p>Freely, IP</p>
            </div>
          </section>
          <section className="patientAge">
          <div className="patient columnTitle">
            <p>AGE</p>
          </div>
            <div className="patient">
              <p>91</p>
            </div>
            <div className="patient">
              <p>34</p>
            </div>
            <div className="patient">
              <p>7</p>
            </div>
            <div className="patient">
              <p>20</p>
            </div>
            <div className="patient">
              <p>83</p>
            </div>
            <div className="patient">
              <p>68</p>
            </div>
            <div className="patient">
              <p>68</p>
            </div>
            <div className="patient">
              <p>34</p>
            </div>
          </section>
          <section className="patientTime">
          <div className="patient columnTitle">
            <p>ADMIT TIME</p>
          </div>
            <div className="patient">
              <p>09:10am</p>
            </div>
            <div className="patient">
              <p>09:12am</p>
            </div>
            <div className="patient">
              <p>09:49am</p>
            </div>
            <div className="patient">
              <p>09:52am</p>
            </div>
            <div className="patient">
              <p>10:01am</p>
            </div>
            <div className="patient">
              <p>10:08am</p>
            </div>
            <div className="patient">
              <p>10:25am</p>
            </div>
            <div className="patient">
              <p>10:55am</p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    )
}

export default ClinicHome;
