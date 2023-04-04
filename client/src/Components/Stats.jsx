import React from 'react';
import '../css/Stats.css';
import BackgroundPic from '../images/parkingBg.jpg'

const Stats = () => {
  return (
    <>

<section id="facts" className="py-4 flex"

style={{
    backgroundImage: 'url('+BackgroundPic+')',
    backgroundSize: "cover",
  }}
  
  >
    <div className="containerStats">
      <div className="facts-row">
        <div className="facts-item">
        
          <div className="facts-info">
            <strong>2500+</strong>
            <p className="text">HOTELS</p>
          </div>
        </div>
        <div className="facts-item">
          <span className="fas fa-umbrella-beach  facts-icon" />
          <div className="facts-info">
            <strong>2000+</strong>
            <p className="text">Restaurant</p>
          </div>
        </div>
        <div className="facts-item">
          <span className="fas fa-mountain facts-icon" />
          <div className="facts-info">
            <strong>500+</strong>
            <p className="text">Destinations</p>
          </div>
        </div>
        <div className="facts-item">
          <span className="fas fa-ship facts-icon" />
          <div className="facts-info">
            <strong>8 000+</strong>
            <p className="text">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  </section>   
    </>
  )
}

export default Stats;