import React from 'react';
import Header from './splash/Header'
import Aside from './splash/Aside'
import SplashBody from './splash/SplashBody'
import Footer from './splash/Footer'

import '../style/splash.css';

const Splash = (props) => {
    return (
      <div className="splash">
      <Header />
      <div className="aside-splash">
        <Aside />
        <SplashBody onPortalButtonClick={props.onPortalButtonClick}/>
      </div>
      <Footer />
      </div>
    )
}

export default Splash;
