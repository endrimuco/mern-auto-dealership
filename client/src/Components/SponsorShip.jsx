import React from 'react';
import BenzLogo from '../images/benzLogo.png';
import AudiLogo from '../images/audilogo.png';
import BmwLogo from '../images/bmwlogo.png';
import ToyotaLogo from '../images/toyotalogo.png';
import OpelLogo from '../images/opellogo.png';
import RenaultLogo from '../images/renaultlogo.png';
import NisanLogo from '../images/nisanlogo.png';
import HyundaiLogo from '../images/hyundaiLogo.png';

import '../css/SponsorShip.css'

const SponsorShip = () => {
  return (
    <div>
        
      <div className='SponsorMainDiv'>

        <div className='SponsorImages'>
        
        <img
        className="SponsorLogo1 SLogos"
        src={BenzLogo}
        alt="benz-logo"
         />

        <img
        className="SponsorLogo2 SLogos"
        src={AudiLogo}
        alt="First slide"
        />

        <img
        className="SponsorLogo1 SLogos"
        src={BmwLogo}
        alt="First slide"
         />

        <img
        className="SponsorLogo2 SLogos"
        src={ToyotaLogo}
        alt="First slide"
        />

        <img
        className="SponsorLogo1 SLogos"
        src={OpelLogo}
        alt="First slide"
         />

        <img
        className="SponsorLogo1 SLogos"
        src={NisanLogo}
        alt="First slide"
        />

        <img
        className="SponsorLogo2 SLogos"
        src={HyundaiLogo}
        alt="First slide"
        />

        </div>

        
      </div>
        
    </div>
  )
}

export default SponsorShip