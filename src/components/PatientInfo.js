import React, { Component } from 'react';
import Header from './splash/Header'
import Footer from './splash/Footer'

import '../style/patient-info.css';

class PatientInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }
  }
  render() {
    return (
      <div className="patientInfo">
        <Header />
          <div className="infoBox">
            <div className="leftColumn">
              <div className="lcRow head">Patient Information</div>
              <div className="lcRow top">Patient Name:</div>
              <div className="lcRow bottom">Scott-Burke, Chance</div>
              <div className="lcRow top">Patient Sex:</div>
              <div className="lcRow bottom">Male</div>
              <div className="lcRow top">DOB:</div>
              <div className="lcRow bottom">April 9th, 1984</div>
              <div className="lcRow top">Phone:</div>
              <div className="lcRow bottom">(720)123-1234</div>
              <div className="lcRow top">Next of Kin:</div>
              <div className="lcRow bottom">Burke, Jessica</div>
              <div className="lcRow top">Address:</div>
              <div className="lcRow bottom">1234 W. 123th Way</div>
              <div className="lcRow bottom">Westminster, CO 80234</div>

              <div className="lcRow head">Diagnosis</div>
              <div className="lcRow top">Hypertension:</div>
              <div className="lcRow bottom">11/1989  Ongoing</div>
              <div className="lcRow top">Diabetes MII</div>
              <div className="lcRow bottom">05/1996  Ongoing</div>
              <div className="lcRow top">CAD</div>
              <div className="lcRow bottom">02/2002  Ongoing</div>
              <div className="lcRow top">Cellulitis</div>
              <div className="lcRow bottom">02/2005  Resolved</div>
              <div className="lcRow top">Cholecystectomy</div>
              <div className="lcRow bottom">05/1981  Resolved</div>
              <div className="lcRow top">Caesarian Section</div>
              <div className="lcRow bottom">01/1967  Resolved</div>
            </div>

              <div className="leftColumn">
              <div className="mcRow head">Medications</div>
              <div className="lcRow top">HCTZ 25mg</div>
              <div className="lcRow bottom">25mg QAM</div>
              <div className="lcRow top">Metformin 500mg</div>
              <div className="lcRow bottom">1g Bid</div>
              <div className="lcRow top">Lipitor 20mg</div>
              <div className="lcRow bottom">20mg QPM</div>
              <div className="lcRow top">Ramipril 10mg</div>
              <div className="lcRow bottom">10mg QPM</div>
              <div className="lcRow top">-</div>
              <div className="lcRow bottom">-</div>
              <div className="lcRow top">-</div>
              <div className="lcRow bottom">-</div>
              <div className="lcRow bottom">-</div>

              <div className="mcRow head">Recent Encounters</div>
              <div className="lcRow top">02/2018</div>
              <div className="lcRow bottom">GP, HTN</div>
              <div className="lcRow top">01/2018</div>
              <div className="lcRow bottom">Cardiology</div>
              <div className="lcRow top">12/2016</div>
              <div className="lcRow bottom">GP, DMII</div>
              <div className="lcRow top">02/2015</div>
              <div className="lcRow bottom">GP, DMII</div>
              <div className="lcRow top">07/2008</div>
              <div className="lcRow bottom">Hx Admit: CAD</div>
              <div className="lcRow top">02/2005</div>
              <div className="lcRow bottom">Hx Admit: Cellulitis</div>
            </div>
              <div className="leftColumn">
              <div className="rcRow head">Immunizations</div>
              <div className="lcRow top">Influenza:</div>
              <div className="lcRow bottom">10/2017</div>
              <div className="lcRow top">Pneumovax:</div>
              <div className="lcRow bottom">01/2015</div>
              <div className="lcRow top">Td</div>
              <div className="lcRow bottom">04/2011</div>
              <div className="lcRow top">-</div>
              <div className="lcRow bottom">-</div>
              <div className="lcRow top">-</div>
              <div className="lcRow bottom">-</div>
              <div className="lcRow top">-</div>
              <div className="lcRow bottom">-</div>
              <div className="lcRow bottom">-</div>

              <div className="rcRow head">Provider Details</div>
              <div className="lcRow top">GP</div>
              <div className="lcRow bottom">Jones, Ewan: 333-453-5545</div>
              <div className="lcRow top">Endocrinologist</div>
              <div className="lcRow bottom">Diaz, Ellen: 333-465-5545</div>
              <div className="lcRow top">Cardiology</div>
              <div className="lcRow bottom">Cohen, Richard: 333-465-6745</div>
              <div className="lcRow top">Dermatologist</div>
              <div className="lcRow bottom">Founier, Janice: 333-465-6611</div>
              <div className="lcRow top">Home Health RN</div>
              <div className="lcRow bottom">Talcott, Amber: 720-445-9876</div>
              <div className="lcRow top">-</div>
              <div className="lcRow bottom">-</div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default PatientInfo;
