import React, { Component } from 'react';
import Splash from './Splash'
import PatientPortal from './PatientPortal'
import ClinicPortal from './ClinicPortal'
import ClinicHome from './ClinicHome'
import PatientInfo from './PatientInfo'
import '../style/app.css';

class App extends Component {
  constructor(props) {
    super(props)
    // USE THIS WHEN READY
    this.state = {
      showSplash: undefined,
      showPatient: 'hidden',
      showClinic: 'hidden',
      showClinicHome: 'hidden',
      showPatientInfo: 'hidden'
    }
    // this.state = {
    //   showSplash: 'hidden',
    //   showPatient: 'hidden',
    //   showClinic: 'hidden',
    //   showClinicHome: 'hidden',
    //   showPatientInfo: undefined
    //
    // }
  }
  goToPortal = (buttonClicked) => {
    let whatClicked = buttonClicked.slice(0,-7)
    console.log(whatClicked)
    if (whatClicked === 'Clinic') {
      this.setState({
        showClinic: undefined,
        showSplash: 'hidden',
        showPatient: 'hidden',
        showClinicHome: 'hidden',
        showPatientInfo: 'hidden'
      })
    }
    if (whatClicked === 'Patient') {
      this.setState({
        showPatient: undefined,
        showSplash: 'hidden',
        showClinic: 'hidden',
        showClinicHome: 'hidden',
        showPatientInfo: 'hidden'
      })
    }
  }
  goToClinicHome = () => {
    this.setState({
      showClinicHome: undefined,
      showPatient: 'hidden',
      showSplash: 'hidden',
      showClinic: 'hidden',
      showPatientInfo: 'hidden'
    })
  }
  goToPatientInfo = () => {
    this.setState({
      showPatientInfo: undefined,
      showClinicHome: 'hidden',
      showPatient: 'hidden',
      showSplash: 'hidden',
      showClinic: 'hidden',
    })
  }
  goToSplash = () => {
    this.setState({
      showSplash: undefined,
      showClinicHome: 'hidden',
      showPatient: 'hidden',
      showClinic: 'hidden',
      showPatientInfo: 'hidden'
    })
  }
  render() {
    return (
      <div className="app">
        <div className={this.state.showSplash}>
          <Splash
            onPortalButtonClick={this.goToPortal} />
        </div>
        <div className={this.state.showPatient}>
          <PatientPortal
            onInfoClick={this.goToPatientInfo}
            onBackClick={this.goToSplash} />
        </div>
        <div className={this.state.showClinic}>
          <ClinicPortal
            onClinicClick={this.goToClinicHome}
            onBackClick={this.goToSplash}/>
        </div>
        <div className={this.state.showClinicHome}>
          <ClinicHome
            onInfoClick={this.goToPatientInfo}
            onBackClick={this.goToClinicHome}/>
        </div>
        <div className={this.state.showPatientInfo}>
          <PatientInfo
            onBackClick={this.goToSplash} />
        </div>
      </div>
    )
  }
}

export default App;
