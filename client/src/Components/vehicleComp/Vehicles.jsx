import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import '../../css/Vehicles.css';
import { MDBCardImage } from 'mdb-react-ui-kit';
import VehicleModal from "./VehicleModal";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("http://localhost:3030/vehicles");
        setVehicles(data.data.vehiclesD);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [])

  return (
    <div className="vehiclesMainDiv">

      <Row className="RowFix pt-2 m-auto"> 
      {vehicles.map((vehicle, index) => {
        return (
        <Col xs={12} md={3} key={index}>
        <div className="vehicleCard">
        {vehicle.image && vehicle.image !== "" && (
          <MDBCardImage className="vehicleCardImg" src={vehicle.image}></MDBCardImage>
        )}
      <div className="vehicleCardBody">
      <div className="vehicleCardTitle">
         {vehicle.name}
        </div>

        <div className="vehicleCardPriceYear">
          <div className="vehiclePrice">
            Price: {vehicle.price}
          </div>

          <div className="vehicleYear">
          Year: {vehicle.year}
          </div>
          
        </div>
    
        <div className='vehicleCardBtn'>
        <VehicleModal vehicle={vehicle} />
      </div>
      </div>
     </div>
     </Col>
            );
          })}
      </Row>
      </div>
  );
};

export default Vehicles;
