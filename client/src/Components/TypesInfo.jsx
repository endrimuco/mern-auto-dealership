import React from 'react'
import '../css/OurFacts.css'
import ElectronicVehicle from '../images/electronicvehicle.jpg';
import Hybrid from '../images/hybrid.jpg';

const TypesInfo = () => {
  return (
    <>
        <div className="containerTypesInfo">

        <p className="TypesInfoTitle">Types of vehicles we offer!</p>

            <div className="containerTypesInfo2">
            <div className="flip-card m-5">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={ElectronicVehicle} alt="Avatar" style={{width: '100%', height: '100%'}} />
              </div>
              <div className="flip-card-back">
                <p className='TypesInfoElectronic'>Electronic</p>
                <p className='TypesInfoDes'>Our Auto Dealership offers various of models in electronic vehicles, mostly sold are electronic vehicles from Hyundai and Audi.</p>
              </div>
            </div>
          </div>

          <div className="flip-card m-5">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Hybrid} alt="Avatar" style={{width: '100%', height: '100%'}} />
              </div>
              <div className="flip-card-back">
                <p className='TypesInfoHybrid'>Hybrid</p>
                <p className='TypesInfoDes'>Our Hybrid vehicle collection is on Toyota and Mercedes Benz their request has risen up from clients.</p>
              </div>
            </div>
          </div>  
            </div>
        </div> 
    </>
  )
}

export default TypesInfo;