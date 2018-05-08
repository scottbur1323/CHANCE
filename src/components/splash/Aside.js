import React from 'react';
import '../../style/aside.css';
import logo from '../../chanceLogoRed.png'

const Aside = () => {
    return (
      <div className="aside">
        <h2>We Are Community</h2>
        <p>Committed to bringing the community of SmallTown together so that your health comes first.</p>
        <h2>Connecting Healthcare</h2>
        <p>We strive to connect all of your SmallTown healthcare in to one place.  We are all one.</p>
        <div className="asideLogo">powered by:</div>
        <img className="chanceLogo" src={logo} alt="../chanceLogoRed.png" />
      </div>
    )
}

export default Aside;
