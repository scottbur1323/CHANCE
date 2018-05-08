import React, { Component } from 'react';
import Header from './splash/Header'
import Footer from './splash/Footer'


import '../style/clinic-portal.css';

class Clinic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }
  }
  render() {
    return (
      <div className="clinicPortal">
        <Header />
        <p>FUCKING CLINIC</p>
        <Footer />
      </div>
    );
  }
}

export default Clinic;
