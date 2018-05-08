import React, { Component } from 'react';
import Splash from './Splash'
import PatientPortal from './PatientPortal'
import ClinicPortal from './ClinicPortal'
import '../style/app.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showSplash: undefined,
      showPatient: 'hidden',
      showClinic: 'hidden'
    }
    this.goToPortal = this.goToPortal.bind(this)
  }
  goToPortal(buttonClicked) {
    let whatClicked = buttonClicked.slice(0,-7)
    console.log(whatClicked)
    if (whatClicked === 'Clinic') {
      this.setState({
        showClinic: 'shown',
        showSplash: 'hidden',
        showPatient: 'hidden'
      })
    }
    if (whatClicked === 'Patient') {
      this.setState({
        showPatient: 'shown',
        showSplash: 'hidden',
        showClinic: 'hidden'
      })
    }
  }
  render() {
    return (
      <div className="app">
        <div className={this.state.showSplash}>
          <Splash
            onPortalButtonClick={this.goToPortal} />
        </div>
        <div className={this.state.showPatient}>
          <PatientPortal />
        </div>
        <div className={this.state.showClinic}>
          <ClinicPortal />
        </div>
      </div>
    )
  }
}

export default App;
