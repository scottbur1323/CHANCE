import React, { Component } from 'react';
import Header from './splash/Header'
import Footer from './splash/Footer'


import '../style/patient-portal.css';

class Patient extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }
  }
  render() {
    return (
      <div className="patientPortal">
        <Header />
        YEAH YEAH FUCK YOU CHANCE
        <Footer />
      </div>
    );
  }
}

export default Patient;
